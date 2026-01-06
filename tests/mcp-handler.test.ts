/**
 * MCP Handler Tests
 * Tests MCP protocol handling and tool registry integration
 */

import { describe, it, expect, beforeEach } from '@jest/globals';
import { MCPHandler } from '../src/core/mcp/mcp-handler';
import { ToolRegistry } from '../src/core/mcp/tool-registry';
import { MCPMethod, MCPWebSocketRequest, Tool, ToolCallResult } from '../src/core/mcp/mcp-types';

describe('MCPHandler', () => {
    let handler: MCPHandler;

    beforeEach(() => {
        handler = new MCPHandler({
            serverName: 'test-server',
            serverVersion: '1.0.0'
        });
    });

    describe('Initialization', () => {
        it('should initialize with correct config', async () => {
            const request: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'init-1',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.Initialize,
                    id: 1
                }
            };

            const response = await handler.handleRequest(request);

            expect(response.type).toBe('mcp_response');
            expect(response.requestId).toBe('init-1');
            expect(response.mcp.result).toBeDefined();
            expect(response.mcp.result.protocolVersion).toBe('2025-11-25');
            expect(response.mcp.result.serverInfo.name).toBe('test-server');
        });

        it('should be ready after initialization', async () => {
            expect(handler.isReady()).toBe(false);

            const request: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'init-1',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.Initialize,
                    id: 1
                }
            };

            await handler.handleRequest(request);

            expect(handler.isReady()).toBe(true);
        });
    });

    describe('Tool Registration', () => {
        it('should register a tool', () => {
            const tool: Tool = {
                name: 'test_tool',
                description: 'A test tool',
                inputSchema: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                }
            };

            const executor = async (args: any): Promise<ToolCallResult> => ({
                content: [{ type: 'text', text: `Test: ${args.message}` }]
            });

            expect(() => handler.registerTool(tool, executor)).not.toThrow();
        });

        it('should not register duplicate tools', () => {
            const tool: Tool = {
                name: 'duplicate_tool',
                description: 'Test',
                inputSchema: { type: 'object' }
            };

            const executor = async (): Promise<ToolCallResult> => ({
                content: [{ type: 'text', text: 'test' }]
            });

            handler.registerTool(tool, executor);

            expect(() => handler.registerTool(tool, executor)).toThrow();
        });

        it('should unregister a tool', () => {
            const tool: Tool = {
                name: 'temp_tool',
                description: 'Test',
                inputSchema: { type: 'object' }
            };

            const executor = async (): Promise<ToolCallResult> => ({
                content: [{ type: 'text', text: 'test' }]
            });

            handler.registerTool(tool, executor);
            expect(() => handler.unregisterTool('temp_tool')).not.toThrow();
        });
    });

    describe('Tool Execution', () => {
        beforeEach(async () => {
            // Initialize handler
            const initRequest: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'init',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.Initialize,
                    id: 0
                }
            };
            await handler.handleRequest(initRequest);

            // Register test tool
            const tool: Tool = {
                name: 'echo',
                description: 'Echo back the message',
                inputSchema: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    },
                    required: ['message']
                }
            };

            const executor = async (args: any): Promise<ToolCallResult> => ({
                content: [{ type: 'text', text: `Echo: ${args.message}` }]
            });

            handler.registerTool(tool, executor);
        });

        it('should list tools', async () => {
            const request: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'list-1',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.ListTools,
                    id: 1
                }
            };

            const response = await handler.handleRequest(request);

            expect(response.mcp.result.tools).toHaveLength(1);
            expect(response.mcp.result.tools[0].name).toBe('echo');
        });

        it('should call a tool', async () => {
            const request: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'call-1',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.CallTool,
                    params: {
                        name: 'echo',
                        arguments: { message: 'Hello' }
                    },
                    id: 2
                }
            };

            const response = await handler.handleRequest(request);

            expect(response.mcp.result.content).toHaveLength(1);
            expect(response.mcp.result.content[0].text).toBe('Echo: Hello');
        });

        it('should handle tool errors', async () => {
            const request: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'call-error',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.CallTool,
                    params: {
                        name: 'nonexistent',
                        arguments: {}
                    },
                    id: 3
                }
            };

            const response = await handler.handleRequest(request);

            expect(response.mcp.error).toBeDefined();
            expect(response.mcp.error.code).toBe(-32603);
        });

        it('should handle missing tool name', async () => {
            const request: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'call-missing',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.CallTool,
                    params: {
                        arguments: {}
                    },
                    id: 4
                }
            };

            const response = await handler.handleRequest(request);

            expect(response.mcp.error).toBeDefined();
        });
    });

    describe('Error Handling', () => {
        it('should handle unknown methods', async () => {
            const request: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'unknown',
                mcp: {
                    jsonrpc: '2.0',
                    method: 'unknown/method' as any,
                    id: 1
                }
            };

            const response = await handler.handleRequest(request);

            expect(response.mcp.error).toBeDefined();
            expect(response.mcp.error.message).toContain('Unknown method');
        });
    });

    describe('Resources and Prompts', () => {
        beforeEach(async () => {
            const initRequest: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'init',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.Initialize,
                    id: 0
                }
            };
            await handler.handleRequest(initRequest);
        });

        it('should list resources (empty)', async () => {
            const request: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'res-1',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.ListResources,
                    id: 1
                }
            };

            const response = await handler.handleRequest(request);

            expect(response.mcp.result.resources).toEqual([]);
        });

        it('should list prompts (empty)', async () => {
            const request: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'prompt-1',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.ListPrompts,
                    id: 1
                }
            };

            const response = await handler.handleRequest(request);

            expect(response.mcp.result.prompts).toEqual([]);
        });

        it('should handle unimplemented resource read', async () => {
            const request: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'read-1',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.ReadResource,
                    id: 1
                }
            };

            const response = await handler.handleRequest(request);

            expect(response.mcp.error).toBeDefined();
            expect(response.mcp.error.message).toContain('not implemented');
        });
    });
});

describe('ToolRegistry', () => {
    let registry: ToolRegistry;

    beforeEach(() => {
        registry = new ToolRegistry();
    });

    describe('Registration', () => {
        it('should register a tool', () => {
            const tool: Tool = {
                name: 'test',
                description: 'Test tool',
                inputSchema: { type: 'object' }
            };

            const executor = async (): Promise<ToolCallResult> => ({
                content: [{ type: 'text', text: 'ok' }]
            });

            registry.register(tool, executor);

            expect(registry.has('test')).toBe(true);
            expect(registry.size()).toBe(1);
        });

        it('should not register duplicate tools', () => {
            const tool: Tool = {
                name: 'test',
                description: 'Test',
                inputSchema: { type: 'object' }
            };

            const executor = async (): Promise<ToolCallResult> => ({
                content: [{ type: 'text', text: 'ok' }]
            });

            registry.register(tool, executor);

            expect(() => registry.register(tool, executor)).toThrow();
        });

        it('should unregister a tool', () => {
            const tool: Tool = {
                name: 'test',
                description: 'Test',
                inputSchema: { type: 'object' }
            };

            const executor = async (): Promise<ToolCallResult> => ({
                content: [{ type: 'text', text: 'ok' }]
            });

            registry.register(tool, executor);
            expect(registry.has('test')).toBe(true);

            registry.unregister('test');
            expect(registry.has('test')).toBe(false);
        });
    });

    describe('Tool Lookup', () => {
        it('should get a tool', () => {
            const tool: Tool = {
                name: 'test',
                description: 'Test',
                inputSchema: { type: 'object' }
            };

            const executor = async (): Promise<ToolCallResult> => ({
                content: [{ type: 'text', text: 'ok' }]
            });

            registry.register(tool, executor);

            const retrieved = registry.get('test');
            expect(retrieved).toEqual(tool);
        });

        it('should return undefined for nonexistent tool', () => {
            expect(registry.get('nonexistent')).toBeUndefined();
        });

        it('should list all tools', () => {
            const tool1: Tool = {
                name: 'tool1',
                description: 'First',
                inputSchema: { type: 'object' }
            };

            const tool2: Tool = {
                name: 'tool2',
                description: 'Second',
                inputSchema: { type: 'object' }
            };

            const executor = async (): Promise<ToolCallResult> => ({
                content: [{ type: 'text', text: 'ok' }]
            });

            registry.register(tool1, executor);
            registry.register(tool2, executor);

            const tools = registry.list();
            expect(tools).toHaveLength(2);
            expect(tools.map(t => t.name)).toEqual(['tool1', 'tool2']);
        });
    });

    describe('Tool Execution', () => {
        it('should execute a tool', async () => {
            const tool: Tool = {
                name: 'add',
                description: 'Add numbers',
                inputSchema: {
                    type: 'object',
                    properties: {
                        a: { type: 'number' },
                        b: { type: 'number' }
                    }
                }
            };

            const executor = async (args: any): Promise<ToolCallResult> => ({
                content: [{ type: 'text', text: `${args.a + args.b}` }]
            });

            registry.register(tool, executor);

            const result = await registry.execute('add', { a: 2, b: 3 });

            expect(result.content[0].text).toBe('5');
        });

        it('should handle tool execution errors', async () => {
            const tool: Tool = {
                name: 'error_tool',
                description: 'Throws error',
                inputSchema: { type: 'object' }
            };

            const executor = async (): Promise<ToolCallResult> => {
                throw new Error('Tool failed');
            };

            registry.register(tool, executor);

            const result = await registry.execute('error_tool', {});

            expect(result.isError).toBe(true);
            expect(result.content[0].text).toBe('Tool failed');
        });

        it('should handle nonexistent tool execution', async () => {
            await expect(registry.execute('nonexistent', {})).rejects.toThrow();
        });
    });

    describe('Clear', () => {
        it('should clear all tools', () => {
            const tool: Tool = {
                name: 'test',
                description: 'Test',
                inputSchema: { type: 'object' }
            };

            const executor = async (): Promise<ToolCallResult> => ({
                content: [{ type: 'text', text: 'ok' }]
            });

            registry.register(tool, executor);
            expect(registry.size()).toBe(1);

            registry.clear();
            expect(registry.size()).toBe(0);
        });
    });
});
