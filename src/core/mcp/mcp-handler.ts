/**
 * MCP Handler
 * Handles MCP protocol requests and responses
 */

import {
    JSONRPCRequest,
    JSONRPCResponse,
    JSONRPCError,
    MCPWebSocketRequest,
    MCPWebSocketResponse,
    MCPMethod,
    Tool,
    ToolCallRequest,
    ToolCallResult,
    ServerCapabilities
} from './mcp-types';
import { ToolRegistry } from './tool-registry';

/**
 * MCP Handler configuration
 */
export interface MCPHandlerConfig {
    serverName: string;
    serverVersion: string;
    capabilities?: ServerCapabilities;
}

/**
 * Tool execution function
 */
export type ToolExecutor = (args: any) => Promise<ToolCallResult>;

/**
 * MCP Handler implementation
 */
export class MCPHandler {
    private config: MCPHandlerConfig;
    private toolRegistry: ToolRegistry;
    private initialized: boolean = false;

    constructor(config: MCPHandlerConfig) {
        this.config = {
            capabilities: {
                tools: {},
                resources: {},
                prompts: {}
            },
            ...config
        } as MCPHandlerConfig;

        this.toolRegistry = new ToolRegistry();
    }

    /**
     * Handle incoming MCP request from WebSocket
     */
    async handleRequest(wsRequest: MCPWebSocketRequest): Promise<MCPWebSocketResponse> {
        const { requestId, mcp } = wsRequest;

        try {
            let result: any;

            switch (mcp.method) {
                case MCPMethod.Initialize:
                    result = await this.handleInitialize(mcp.params);
                    break;

                case MCPMethod.ListTools:
                    result = await this.handleListTools();
                    break;

                case MCPMethod.CallTool:
                    result = await this.handleCallTool(mcp.params);
                    break;

                case MCPMethod.ListResources:
                    result = await this.handleListResources();
                    break;

                case MCPMethod.ReadResource:
                    result = await this.handleReadResource(mcp.params);
                    break;

                case MCPMethod.ListPrompts:
                    result = await this.handleListPrompts();
                    break;

                case MCPMethod.GetPrompt:
                    result = await this.handleGetPrompt(mcp.params);
                    break;

                default:
                    throw new Error(`Unknown method: ${mcp.method}`);
            }

            return {
                type: 'mcp_response',
                requestId,
                mcp: {
                    jsonrpc: '2.0',
                    result,
                    id: mcp.id || requestId
                }
            };

        } catch (error) {
            const mcpError: JSONRPCError = {
                code: -32603,
                message: error instanceof Error ? error.message : 'Internal error',
                data: error instanceof Error ? error.stack : undefined
            };

            return {
                type: 'mcp_response',
                requestId,
                mcp: {
                    jsonrpc: '2.0',
                    error: mcpError,
                    id: mcp.id || requestId
                }
            };
        }
    }

    /**
     * Register a tool
     */
    registerTool(tool: Tool, executor: ToolExecutor): void {
        this.toolRegistry.register(tool, executor);
    }

    /**
     * Unregister a tool
     */
    unregisterTool(name: string): void {
        this.toolRegistry.unregister(name);
    }

    /**
     * Check if handler is initialized
     */
    isReady(): boolean {
        return this.initialized;
    }

    /**
     * Handle initialize request
     */
    private async handleInitialize(params?: any): Promise<any> {
        this.initialized = true;

        return {
            protocolVersion: '2025-11-25',
            capabilities: this.config.capabilities,
            serverInfo: {
                name: this.config.serverName,
                version: this.config.serverVersion
            }
        };
    }

    /**
     * Handle tools/list request
     */
    private async handleListTools(): Promise<any> {
        const tools = this.toolRegistry.list();

        return {
            tools: tools.map(tool => ({
                name: tool.name,
                description: tool.description,
                inputSchema: tool.inputSchema
            }))
        };
    }

    /**
     * Handle tools/call request
     */
    private async handleCallTool(params?: any): Promise<any> {
        if (!params) {
            throw new Error('Missing params in tools/call request');
        }

        const { name, arguments: args } = params as ToolCallRequest;

        if (!name) {
            throw new Error('Missing tool name in tools/call request');
        }

        const result = await this.toolRegistry.execute(name, args || {});

        return result;
    }

    /**
     * Handle resources/list request
     */
    private async handleListResources(): Promise<any> {
        // Not implemented yet
        return {
            resources: []
        };
    }

    /**
     * Handle resources/read request
     */
    private async handleReadResource(params?: any): Promise<any> {
        // Not implemented yet
        throw new Error('resources/read not implemented');
    }

    /**
     * Handle prompts/list request
     */
    private async handleListPrompts(): Promise<any> {
        // Not implemented yet
        return {
            prompts: []
        };
    }

    /**
     * Handle prompts/get request
     */
    private async handleGetPrompt(params?: any): Promise<any> {
        // Not implemented yet
        throw new Error('prompts/get not implemented');
    }
}
