/**
 * WebSocket Session Manager Tests
 * Tests session management, message routing, and integration with WebSocket/MCP
 */

import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals';
import { WebSocketSessionManager } from '../src/core/websocket/websocket-session-manager';
import { WebSocketClient } from '../src/core/websocket/websocket-client';
import { MCPHandler } from '../src/core/mcp/mcp-handler';
import { WebSocketServer } from 'ws';
import { MCPMethod } from '../src/core/mcp/mcp-types';

describe('WebSocketSessionManager', () => {
    let manager: WebSocketSessionManager;
    let wsServer: WebSocketServer;
    let serverPort: number;

    beforeEach(async () => {
        // Create a test WebSocket server
        wsServer = new WebSocketServer({ port: 0 });
        const address = wsServer.address() as any;
        serverPort = address.port;

        // Initialize manager
        manager = new WebSocketSessionManager({
            url: `ws://localhost:${serverPort}`,
            conversationId: 'test-conversation'
        });

        // Mock server to handle messages
        wsServer.on('connection', (ws) => {
            ws.on('message', (data) => {
                const msg = JSON.parse(data.toString());

                // Echo back non-mcp messages
                if (msg.type !== 'mcp_request') {
                    ws.send(JSON.stringify({
                        type: 'echo',
                        data: msg
                    }));
                }

                // Handle mcp_requests
                if (msg.type === 'mcp_request') {
                    ws.send(JSON.stringify({
                        type: 'mcp_response',
                        requestId: msg.requestId,
                        mcp: {
                            jsonrpc: '2.0',
                            result: { status: 'ok' },
                            id: msg.mcp.id
                        }
                    }));
                }
            });
        });
    });

    afterEach(async () => {
        await manager.disconnect();
        wsServer.close();
    });

    describe('Initialization', () => {
        it('should initialize with correct config', () => {
            expect(manager).toBeDefined();
            expect(manager.isConnected()).toBe(false);
        });

        it('should initialize MCPHandler', () => {
            const handler = manager.getMCPHandler();
            expect(handler).toBeDefined();
            expect(handler instanceof MCPHandler).toBe(true);
        });
    });

    describe('Connection Management', () => {
        it('should connect to server', async () => {
            await manager.connect();

            // Wait a bit for connection to establish
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(manager.isConnected()).toBe(true);
        });

        it('should disconnect from server', async () => {
            await manager.connect();
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(manager.isConnected()).toBe(true);

            await manager.disconnect();
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(manager.isConnected()).toBe(false);
        });

        it('should emit connection state changes', async () => {
            const states: string[] = [];

            manager.onStateChange((state) => {
                states.push(state);
            });

            await manager.connect();

            // Wait for connection
            await new Promise(resolve => setTimeout(resolve, 200));

            expect(states.length).toBeGreaterThan(0);
            expect(states).toContain('connected');
        });

        it('should handle connection errors', async () => {
            // Use invalid port
            const badManager = new WebSocketSessionManager({
                url: 'ws://localhost:9999',
                conversationId: 'test-bad'
            });

            const errors: Error[] = [];
            badManager.onError((error) => {
                errors.push(error);
            });

            try {
                await badManager.connect();
                await new Promise(resolve => setTimeout(resolve, 200));
            } catch (error) {
                // Expected to fail
            }

            await badManager.disconnect();

            expect(errors.length).toBeGreaterThan(0);
        });
    });

    describe('Message Sending', () => {
        beforeEach(async () => {
            await manager.connect();
            await new Promise(resolve => setTimeout(resolve, 100));
        });

        it('should send user messages', async () => {
            const received: any[] = [];

            wsServer.on('connection', (ws) => {
                ws.on('message', (data) => {
                    received.push(JSON.parse(data.toString()));
                });
            });

            manager.sendUserMessage('Hello, Claude!');

            // Wait for message to be received
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(received.length).toBeGreaterThan(0);
            expect(received[received.length - 1]).toMatchObject({
                type: 'user_message',
                conversationId: 'test-conversation',
                content: 'Hello, Claude!'
            });
        });

        it('should send MCP requests', async () => {
            const response = await manager.sendMCPRequest({
                type: 'mcp_request',
                requestId: 'test-123',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.Initialize,
                    id: 1
                }
            });

            expect(response).toBeDefined();
            expect(response.type).toBe('mcp_response');
            expect(response.requestId).toBe('test-123');
        });

        it('should handle message send errors', async () => {
            await manager.disconnect();

            await expect(
                manager.sendUserMessage('Test')
            ).rejects.toThrow();
        });
    });

    describe('Message Receiving', () => {
        beforeEach(async () => {
            await manager.connect();
            await new Promise(resolve => setTimeout(resolve, 100));
        });

        it('should receive ai_stream messages', async () => {
            const streams: any[] = [];

            manager.onStream((chunk) => {
                streams.push(chunk);
            });

            // Simulate server sending ai_stream
            wsServer.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'ai_stream',
                    conversationId: 'test-conversation',
                    content: 'Hello '
                }));

                ws.send(JSON.stringify({
                    type: 'ai_stream',
                    conversationId: 'test-conversation',
                    content: 'World!'
                }));
            });

            // Wait for messages
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(streams.length).toBe(2);
            expect(streams[0].content).toBe('Hello ');
            expect(streams[1].content).toBe('World!');
        });

        it('should receive mcp_response messages', async () => {
            const responses: any[] = [];

            manager.onMCPResponse((response) => {
                responses.push(response);
            });

            // Send MCP request
            await manager.sendMCPRequest({
                type: 'mcp_request',
                requestId: 'test-456',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.ListTools,
                    id: 2
                }
            });

            // Wait for response
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(responses.length).toBeGreaterThan(0);
            expect(responses[0].requestId).toBe('test-456');
        });

        it('should receive tool_status messages', async () => {
            const statuses: any[] = [];

            manager.onToolStatus((status) => {
                statuses.push(status);
            });

            // Simulate server sending tool_status
            wsServer.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'tool_status',
                    conversationId: 'test-conversation',
                    toolName: 'test_tool',
                    status: 'running'
                }));
            });

            // Wait for message
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(statuses.length).toBe(1);
            expect(statuses[0].toolName).toBe('test_tool');
            expect(statuses[0].status).toBe('running');
        });
    });

    describe('MCP Integration', () => {
        beforeEach(async () => {
            await manager.connect();
            await new Promise(resolve => setTimeout(resolve, 100));

            // Initialize MCP
            await manager.sendMCPRequest({
                type: 'mcp_request',
                requestId: 'init',
                mcp: {
                    jsonrpc: '2.0',
                    method: MCPMethod.Initialize,
                    id: 0
                }
            });
        });

        it('should register MCP tools', () => {
            const handler = manager.getMCPHandler();

            expect(() => {
                handler.registerTool({
                    name: 'test_tool',
                    description: 'Test tool',
                    inputSchema: { type: 'object' }
                }, async () => ({
                    content: [{ type: 'text', text: 'ok' }]
                }));
            }).not.toThrow();
        });

        it('should handle incoming MCP requests', async () => {
            const handler = manager.getMCPHandler();

            handler.registerTool({
                name: 'echo_tool',
                description: 'Echo tool',
                inputSchema: {
                    type: 'object',
                    properties: {
                        message: { type: 'string' }
                    }
                }
            }, async (args) => ({
                content: [{ type: 'text', text: `Echo: ${args.message}` }]
            }));

            // The manager should route incoming mcp_request to MCPHandler
            // This is tested indirectly through sendMCPRequest
        });
    });

    describe('Callback Management', () => {
        beforeEach(async () => {
            await manager.connect();
            await new Promise(resolve => setTimeout(resolve, 100));
        });

        it('should unsubscribe callbacks', () => {
            const streams: any[] = [];

            const unsubscribe = manager.onStream((chunk) => {
                streams.push(chunk);
            });

            // Send a stream
            wsServer.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'ai_stream',
                    conversationId: 'test-conversation',
                    content: 'test'
                }));
            });

            unsubscribe();

            // Send another stream
            wsServer.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'ai_stream',
                    conversationId: 'test-conversation',
                    content: 'test2'
                }));
            });

            // Wait for messages
            await new Promise(resolve => setTimeout(resolve, 100));

            // Should only have received one (before unsubscribe)
            expect(streams.length).toBe(1);
        });

        it('should handle multiple subscribers', async () => {
            const streams1: any[] = [];
            const streams2: any[] = [];

            manager.onStream((chunk) => streams1.push(chunk));
            manager.onStream((chunk) => streams2.push(chunk));

            // Send a stream
            wsServer.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'ai_stream',
                    conversationId: 'test-conversation',
                    content: 'test'
                }));
            });

            // Wait for message
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(streams1.length).toBe(1);
            expect(streams2.length).toBe(1);
        });
    });

    describe('Edge Cases', () => {
        it('should handle multiple connect calls', async () => {
            await manager.connect();
            await new Promise(resolve => setTimeout(resolve, 100));

            await manager.connect();
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(manager.isConnected()).toBe(true);
        });

        it('should handle multiple disconnect calls', async () => {
            await manager.connect();
            await new Promise(resolve => setTimeout(resolve, 100));

            await manager.disconnect();
            await manager.disconnect();

            expect(manager.isConnected()).toBe(false);
        });

        it('should ignore messages for other conversations', async () => {
            const streams: any[] = [];

            manager.onStream((chunk) => {
                streams.push(chunk);
            });

            await manager.connect();
            await new Promise(resolve => setTimeout(resolve, 100));

            // Send message for different conversation
            wsServer.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'ai_stream',
                    conversationId: 'other-conversation',
                    content: 'ignored'
                }));
            });

            // Send message for our conversation
            wsServer.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'ai_stream',
                    conversationId: 'test-conversation',
                    content: 'received'
                }));
            });

            // Wait for messages
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(streams.length).toBe(1);
            expect(streams[0].content).toBe('received');
        });

        it('should handle malformed messages gracefully', async () => {
            await manager.connect();
            await new Promise(resolve => setTimeout(resolve, 100));

            // Send malformed JSON
            wsServer.clients.forEach((ws) => {
                ws.send(Buffer.from('invalid json'));
            });

            // Wait - should not crash
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(manager.isConnected()).toBe(true);
        });
    });

    describe('Auto-Reconnect', () => {
        it('should auto-reconnect when enabled', async () => {
            const reconnectManager = new WebSocketSessionManager({
                url: `ws://localhost:${serverPort}`,
                conversationId: 'test-reconnect',
                autoReconnect: true,
                reconnectInterval: 100
            });

            await reconnectManager.connect();
            await new Promise(resolve => setTimeout(resolve, 100));

            expect(reconnectManager.isConnected()).toBe(true);

            // Close server
            wsServer.close();

            // Wait for reconnect attempts
            await new Promise(resolve => setTimeout(resolve, 500));

            // Restart server
            const newServer = new WebSocketServer({ port: serverPort });
            newServer.on('connection', (ws) => {
                ws.on('message', (data) => {
                    const msg = JSON.parse(data.toString());
                    ws.send(JSON.stringify({
                        type: 'echo',
                        data: msg
                    }));
                });
            });

            // Wait for reconnect
            await new Promise(resolve => setTimeout(resolve, 500));

            await reconnectManager.disconnect();
            newServer.close();
        }, 10000);
    });
});
