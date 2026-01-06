/**
 * MCP Protocol Handler
 *
 * Handles MCP (Model Context Protocol) requests and responses
 * Integrates with Obsidian MCP tools
 */

import { App } from 'obsidian';
import { Notice } from 'obsidian';
import {
    JSONRPCRequest,
    JSONRPCResponse,
    JSONRPCError,
    MCPMethod,
    ServerCapabilities,
    Tool
} from './mcp-types';
import { ObsidianMCPTools } from './obsidian-mcp-tools';

export class MCPHandler {
    private tools: ObsidianMCPTools;
    private serverCapabilities: ServerCapabilities;

    constructor(private app: App) {
        this.tools = new ObsidianMCPTools(app);
        this.serverCapabilities = {
            tools: {},
            resources: {}
        };
    }

    /**
     * Handle an MCP request
     */
    async handleRequest(request: JSONRPCRequest): Promise<JSONRPCResponse> {
        const { method, params, id } = request;

        try {
            let result: any;

            switch (method) {
                // Initialize
                case MCPMethod.Initialize:
                    result = await this.initialize(params);
                    break;

                // Tools
                case MCPMethod.ListTools:
                    result = await this.listTools();
                    break;

                case MCPMethod.CallTool:
                    result = await this.callTool(params);
                    break;

                // Resources
                case MCPMethod.ListResources:
                    result = await this.listResources();
                    break;

                case MCPMethod.ReadResource:
                    result = await this.readResource(params);
                    break;

                // Prompts
                case MCPMethod.ListPrompts:
                    result = await this.listPrompts();
                    break;

                default:
                    throw new Error(`Unknown MCP method: ${method}`);
            }

            return {
                jsonrpc: '2.0',
                result,
                id: id as any
            };

        } catch (error) {
            const mcpError: JSONRPCError = {
                code: -32603, // Internal error
                message: error.message,
                data: error.stack
            };

            return {
                jsonrpc: '2.0',
                error: mcpError,
                id: id as any
            };
        }
    }

    /**
     * Initialize MCP session
     */
    private async initialize(params: any): Promise<ServerCapabilities> {
        console.log('[MCP] Initializing with params:', params);

        // Return server capabilities
        return this.serverCapabilities;
    }

    /**
     * List available tools
     */
    private async listTools(): Promise<{ tools: Tool[] }> {
        const tools = this.tools.getTools();
        console.log(`[MCP] Listing ${tools.length} tools`);
        return { tools };
    }

    /**
     * Call a tool
     */
    private async callTool(params: any): Promise<any> {
        const { name, arguments: args } = params;
        console.log(`[MCP] Calling tool: ${name}`, args);

        const result = await this.tools.callTool(name, args);

        if (result.isError) {
            throw new Error(result.content[0].text);
        }

        return result;
    }

    /**
     * List resources (files in the vault)
     */
    private async listResources(): Promise<{ resources: any[] }> {
        const files = this.app.vault.getMarkdownFiles();
        const resources = files.map(f => ({
            uri: `file://${f.path}`,
            name: f.basename,
            description: f.path,
            mimeType: 'text/markdown'
        }));

        console.log(`[MCP] Listing ${resources.length} resources`);
        return { resources };
    }

    /**
     * Read a resource (file content)
     */
    private async readResource(params: any): Promise<any> {
        const { uri } = params;
        const path = uri.replace('file://', '');

        console.log(`[MCP] Reading resource: ${path}`);

        const result = await this.tools.callTool('get_file_contents', { path });
        return {
            contents: [{
                uri,
                mimeType: 'text/markdown',
                text: result.content[0].text
            }]
        };
    }

    /**
     * List prompts
     */
    private async listPrompts(): Promise<{ prompts: any[] }> {
        // Obsidian doesn't have predefined prompts in this implementation
        return { prompts: [] };
    }
}
