/**
 * Integration Tests
 * Tests MCP Handler and Tool Registry integration
 */

import { describe, it, expect, beforeEach } from '@jest/globals';
import { MCPHandler } from '../src/core/mcp/mcp-handler';
import { MCPMethod, MCPWebSocketRequest, ToolCallResult } from '../src/core/mcp/mcp-types';
import { healthCheckTool, healthCheckExecutor, HealthCheckResult } from '../src/core/mcp/tools/health-check';

describe('MCP Integration Tests', () => {
    let handler: MCPHandler;

    beforeEach(async () => {
        handler = new MCPHandler({
            serverName: 'test-integration-server',
            serverVersion: '1.0.0'
        });

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

        // Register health_check tool
        handler.registerTool(healthCheckTool, async (args: any) => {
            const result = await healthCheckExecutor();
            return {
                content: [{
                    type: 'text',
                    text: JSON.stringify(result)
                }]
            } as ToolCallResult;
        });
    });

    describe('End-to-End MCP Flow', () => {
        it('should handle complete initialize -> list tools -> call tool flow', async () => {
            // List tools
            const listRequest: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'list',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.ListTools,
                    id: 1
                }
            };

            const listResponse = await handler.handleRequest(listRequest);

            expect(listResponse.mcp.result.tools).toHaveLength(1);
            expect(listResponse.mcp.result.tools[0].name).toBe('health_check');

            // Call tool
            const callRequest: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'call',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.CallTool,
                    params: {
                        name: 'health_check',
                        arguments: {}
                    },
                    id: 2
                }
            };

            const callResponse = await handler.handleRequest(callRequest);

            expect(callResponse.mcp.result).toBeDefined();
            expect(callResponse.mcp.result.content).toHaveLength(1);

            const result = JSON.parse(callResponse.mcp.result.content[0].text) as HealthCheckResult;
            expect(result.status).toBe('healthy');
            expect(result.message).toBe('MCP server is running');
        });
    });

    describe('Tool Registry Integration', () => {
        it('should register and execute multiple tools', async () => {
            // Register additional tools
            handler.registerTool({
                name: 'echo',
                description: 'Echo back the message',
                inputSchema: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                }
            }, async (args) => ({
                content: [{ type: 'text', text: `Echo: ${args.message}` }]
            }));

            handler.registerTool({
                name: 'add',
                description: 'Add two numbers',
                inputSchema: {
                    type: 'object',
                    properties: {
                        a: { type: 'number' },
                        b: { type: 'number' }
                    }
                }
            }, async (args) => ({
                content: [{ type: 'text', text: `${args.a + args.b}` }]
            }));

            // List tools
            const listRequest: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'list',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.ListTools,
                    id: 1
                }
            };

            const listResponse = await handler.handleRequest(listRequest);
            expect(listResponse.mcp.result.tools).toHaveLength(3);

            // Execute each tool
            const tools = listResponse.mcp.result.tools;

            for (const tool of tools) {
                const callRequest: MCPWebSocketRequest = {
                    type: 'mcp_request',
                    requestId: `call-${tool.name}`,
                    mcp: {
                        jsonrpc: '2.0',
                        method: MCPMethod.CallTool,
                        params: {
                            name: tool.name,
                            arguments: tool.name === 'echo' ? { message: 'test' }
                                       : tool.name === 'add' ? { a: 5, b: 3 }
                                       : {}
                        },
                        id: Math.random()
                    }
                };

                const response = await handler.handleRequest(callRequest);
                expect(response.mcp.result).toBeDefined();
                expect(response.mcp.result.content).toBeDefined();
            }
        });

        it('should unregister tools', async () => {
            // Register a temporary tool
            handler.registerTool({
                name: 'temp_tool',
                description: 'Temporary tool',
                inputSchema: { type: 'object' }
            }, async () => ({
                content: [{ type: 'text', text: 'temp' }]
            }));

            // List tools - should have 2 tools
            let listRequest: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'list-1',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.ListTools,
                    id: 1
                }
            };

            let listResponse = await handler.handleRequest(listRequest);
            expect(listResponse.mcp.result.tools).toHaveLength(2);

            // Unregister
            handler.unregisterTool('temp_tool');

            // List tools - should have 1 tool
            listRequest = {
                type: 'mcp_request',
                requestId: 'list-2',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.ListTools,
                    id: 2
                }
            };

            listResponse = await handler.handleRequest(listRequest);
            expect(listResponse.mcp.result.tools).toHaveLength(1);
            expect(listResponse.mcp.result.tools[0].name).toBe('health_check');
        });
    });

    describe('Error Handling', () => {
        it('should handle tool execution errors gracefully', async () => {
            // Register a tool that throws an error
            handler.registerTool({
                name: 'error_tool',
                description: 'Tool that throws error',
                inputSchema: { type: 'object' }
            }, async () => {
                throw new Error('Intentional error');
            });

            // Try to call the error tool
            const callRequest: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'call-error',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.CallTool,
                    params: {
                        name: 'error_tool',
                        arguments: {}
                    },
                    id: 1
                }
            };

            const response = await handler.handleRequest(callRequest);

            // Should return error result, not throw
            expect(response.mcp.result.isError).toBe(true);
            expect(response.mcp.result.content[0].text).toContain('Intentional error');
        });

        it('should handle invalid tool calls', async () => {
            const callRequest: MCPWebSocketRequest = {
                type: 'mcp_request',
                requestId: 'call-invalid',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.CallTool,
                    params: {
                        name: 'nonexistent_tool',
                        arguments: {}
                    },
                    id: 1
                }
            };

            const response = await handler.handleRequest(callRequest);

            expect(response.mcp.error).toBeDefined();
            expect(response.mcp.error.code).toBe(-32603);
        });
    });

    describe('Concurrent Requests', () => {
        it('should handle multiple simultaneous requests', async () => {
            const requests = [
                {
                    type: 'mcp_request',
                    requestId: 'req-1',
                    mcp: {
                        jsonrpc: '2.0',
                        method: MCPMethod.CallTool,
                        params: { name: 'health_check', arguments: {} },
                        id: 1
                    }
                },
                {
                    type: 'mcp_request',
                    requestId: 'req-2',
                    mcp: {
                        jsonrpc: '2.0',
                        method: MCPMethod.ListTools,
                        id: 2
                    }
                },
                {
                    type: 'mcp_request',
                    requestId: 'req-3',
                    mcp: {
                        jsonrpc: '2.0',
                        method: MCPMethod.CallTool,
                        params: { name: 'health_check', arguments: {} },
                        id: 3
                    }
                }
            ] as MCPWebSocketRequest[];

            // Execute all requests concurrently
            const responses = await Promise.all(
                requests.map(req => handler.handleRequest(req))
            );

            // All should succeed
            expect(responses).toHaveLength(3);
            responses.forEach(response => {
                expect(response.mcp.error).toBeUndefined();
                expect(response.mcp.result).toBeDefined();
            });

            // Check each response
            expect(responses[0].mcp.result.content).toBeDefined();
            expect(responses[1].mcp.result.tools).toBeDefined();
            expect(responses[2].mcp.result.content).toBeDefined();
        });
    });
});
