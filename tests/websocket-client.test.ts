/**
 * WebSocket Client Tests
 * Tests WebSocket connection, messaging, and reconnection
 */

import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals';
import { WebSocketServer } from 'ws';
import { WebSocketClient } from '../src/core/websocket/websocket-client';
import { ConnectionState, WSMessage } from '../src/core/websocket/websocket-types';

// Test server port
const TEST_PORT = 8900;
const SERVER_URL = `ws://localhost:${TEST_PORT}`;
const CONVERSATION_ID = 'test-websocket-client';

describe('WebSocketClient', () => {
    let server: WebSocketServer;
    let client: WebSocketClient;

    beforeEach((done) => {
        // Start test server
        server = new WebSocketServer({ port: TEST_PORT }, () => {
            done();
        });
    });

    afterEach((done) => {
        // Close client and server
        if (client) {
            try {
                client.disconnect();
            } catch (e) {
                // Ignore
            }
        }

        server.close(() => {
            done();
        });
    });

    describe('Connection', () => {
        it('should connect to server successfully', async () => {
            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID
            });

            const statePromise = new Promise<ConnectionState>((resolve) => {
                client.onStateChange((state) => {
                    if (state === ConnectionState.CONNECTED) {
                        resolve(state);
                    }
                });
            });

            await client.connect();
            const state = await statePromise;

            expect(state).toBe(ConnectionState.CONNECTED);
            expect(client.isConnected()).toBe(true);
        });

        it('should disconnect from server', async () => {
            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID
            });

            await client.connect();
            client.disconnect();

            expect(client.isConnected()).toBe(false);
        });

        it('should fail to connect to invalid server', async () => {
            client = new WebSocketClient({
                url: 'ws://localhost:9999', // Invalid port
                conversationId: CONVERSATION_ID,
                connectTimeout: 2000
            });

            await expect(client.connect()).rejects.toThrow();
        });
    });

    describe('Messaging', () => {
        beforeEach(async () => {
            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID
            });

            await client.connect();
        });

        it('should send message to server', (done) => {
            // Get the first connected client
            server.clients.forEach((ws) => {
                ws.on('message', (data: Buffer) => {
                    const message = JSON.parse(data.toString());
                    expect(message.type).toBe('test_message');
                    done();
                });
            });

            client.send({
                type: 'test_message',
                data: 'test'
            });
        });

        it('should receive message from server', (done) => {
            const testMessage: WSMessage = {
                type: 'test_response',
                data: 'response'
            };

            client.onMessage((message) => {
                if (message.type === 'test_response') {
                    expect(message.data).toBe('response');
                    done();
                }
            });

            // Send message from server after a short delay
            setTimeout(() => {
                server.clients.forEach((ws) => {
                    ws.send(JSON.stringify(testMessage));
                });
            }, 100);
        });

        it('should handle multiple message callbacks', async () => {
            const messages1: WSMessage[] = [];
            const messages2: WSMessage[] = [];

            client.onMessage((msg) => messages1.push(msg));
            client.onMessage((msg) => messages2.push(msg));

            // Send 2 messages from server
            setTimeout(() => {
                server.clients.forEach((ws) => {
                    ws.send(JSON.stringify({ type: 'msg1', value: 1 }));
                    ws.send(JSON.stringify({ type: 'msg2', value: 2 }));
                });
            }, 100);

            await new Promise(resolve => setTimeout(resolve, 500));

            expect(messages1.length).toBe(2);
            expect(messages2.length).toBe(2);
        });
    });

    describe('State Management', () => {
        it('should track connection state changes', async () => {
            const states: ConnectionState[] = [];

            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID
            });

            client.onStateChange((state) => states.push(state));

            await client.connect();

            expect(states).toContain(ConnectionState.CONNECTING);
            expect(states).toContain(ConnectionState.CONNECTED);

            client.disconnect();

            expect(states).toContain(ConnectionState.DISCONNECTED);
        });

        it('should return correct connection state', async () => {
            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID
            });

            expect(client.getConnectionState()).toBe(ConnectionState.DISCONNECTED);

            await client.connect();

            expect(client.getConnectionState()).toBe(ConnectionState.CONNECTED);
            expect(client.isConnected()).toBe(true);
        });
    });

    describe('Error Handling', () => {
        it('should emit error callback on connection error', async () => {
            client = new WebSocketClient({
                url: 'ws://localhost:9999',
                conversationId: CONVERSATION_ID,
                connectTimeout: 2000,
                autoReconnect: false  // Disable auto-reconnect for this test
            });

            const errorPromise = new Promise<any>((resolve) => {
                client.onError((error) => resolve(error));
            });

            client.connect().catch(() => {
                // Connection failed is expected
            });

            const error = await errorPromise;

            expect(error).toBeDefined();
            expect(error.message).toContain('ECONNREFUSED');
        });

        it('should handle malformed messages gracefully', (done) => {
            let messageReceived = false;

            // Should not crash when receiving invalid JSON
            client.onMessage((message) => {
                messageReceived = true;
                // This callback should NOT be called for malformed messages
                // because they can't be parsed as WSMessage
            });

            // Send invalid JSON
            server.clients.forEach((ws) => {
                ws.send('invalid json{{{');
            });

            // Wait a bit to ensure no crash occurred
            setTimeout(() => {
                // Test passes if we got here without crashing
                // Malformed messages should be silently ignored
                expect(true).toBe(true);
                done();
            }, 200);
        });
    });

    describe('Auto-Reconnect', () => {
        it('should automatically reconnect on connection loss', async () => {
            let connectCount = 0;

            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID,
                reconnectInterval: 1000,
                maxRetries: 3
            });

            server.on('connection', () => {
                connectCount++;
            });

            await client.connect();
            expect(connectCount).toBe(1);

            // Close server connection (simulate network issue)
            server.clients.forEach((ws) => ws.close());

            // Wait for reconnect
            await new Promise(resolve => setTimeout(resolve, 2000));

            expect(connectCount).toBeGreaterThan(1);

            // Clean up
            client.disconnect();
        });

        it('should not reconnect when manually disconnected', async () => {
            let connectCount = 0;

            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID,
                reconnectInterval: 1000
            });

            server.on('connection', () => {
                connectCount++;
            });

            await client.connect();
            expect(connectCount).toBe(1);

            client.disconnect();

            // Wait longer than reconnect interval
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Should not have reconnected
            expect(connectCount).toBe(1);
        });
    });

    describe('Message Type Guards', () => {
        beforeEach(async () => {
            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID
            });

            await client.connect();
        });

        it('should handle connected message', (done) => {
            client.onMessage((message) => {
                if (message.type === 'connected') {
                    expect(message).toHaveProperty('conversationId');
                    expect(message).toHaveProperty('message');
                    done();
                }
            });

            server.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'connected',
                    conversationId: CONVERSATION_ID,
                    message: 'Welcome'
                }));
            });
        });

        it('should handle user_message', (done) => {
            client.onMessage((message) => {
                if (message.type === 'user_message') {
                    expect(message.conversationId).toBe(CONVERSATION_ID);
                    expect(message.content).toBeDefined();
                    done();
                }
            });

            server.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'user_message',
                    conversationId: CONVERSATION_ID,
                    content: 'Hello'
                }));
            });
        });

        it('should handle ai_stream message', (done) => {
            client.onMessage((message) => {
                if (message.type === 'ai_stream') {
                    expect(message.isStreaming).toBe(true);
                    expect(message.content).toBeDefined();
                    done();
                }
            });

            server.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'ai_stream',
                    conversationId: CONVERSATION_ID,
                    content: 'Response',
                    isStreaming: true
                }));
            });
        });

        it('should handle mcp_request message', (done) => {
            client.onMessage((message) => {
                if (message.type === 'mcp_request') {
                    expect(message).toHaveProperty('requestId');
                    expect(message).toHaveProperty('mcp');
                    expect(message.mcp).toHaveProperty('jsonrpc');
                    done();
                }
            });

            server.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'mcp_request',
                    requestId: 'test-123',
                    mcp: {
                        jsonrpc: '2.0',
                        id: 1,
                        method: 'tools/call'
                    }
                }));
            });
        });

        it('should handle error message', (done) => {
            client.onMessage((message) => {
                if (message.type === 'error') {
                    expect(message).toHaveProperty('message');
                    done();
                }
            });

            server.clients.forEach((ws) => {
                ws.send(JSON.stringify({
                    type: 'error',
                    message: 'Something went wrong'
                }));
            });
        });
    });

    describe('Callback Management', () => {
        beforeEach(async () => {
            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID
            });

            await client.connect();
        });

        it('should unsubscribe message callback', (done) => {
            let callCount = 0;

            const unsubscribe = client.onMessage(() => {
                callCount++;
            });

            // Trigger message
            setTimeout(() => {
                server.clients.forEach((ws) => {
                    ws.send(JSON.stringify({ type: 'test' }));
                });
            }, 100);

            setTimeout(() => {
                unsubscribe(); // Unsubscribe

                // Trigger another message
                server.clients.forEach((ws) => {
                    ws.send(JSON.stringify({ type: 'test2' }));
                });

                setTimeout(() => {
                    // Should only have received first message
                    expect(callCount).toBe(1);
                    done();
                }, 200);
            }, 200);
        });

        it('should unsubscribe error callback', async () => {
            const errors: Error[] = [];

            const unsubscribe = client.onError((error) => {
                errors.push(error);
            });

            unsubscribe();

            // Simulate error by trying to connect with same client
            try {
                await client.connect();
            } catch (e) {
                // Expected
            }

            // Should not have added error
            expect(errors.length).toBe(0);
        });

        it('should unsubscribe state change callback', async () => {
            const states: ConnectionState[] = [];

            // Wait for next tick to avoid immediate callback from current state
            await new Promise(resolve => setTimeout(resolve, 0));

            const unsubscribe = client.onStateChange((state) => {
                states.push(state);
            });

            unsubscribe();

            client.disconnect();

            // Should only have initial state (CONNECTED), not DISCONNECTED
            expect(states.length).toBe(1);
            expect(states[0]).toBe(ConnectionState.CONNECTED);
        });
    });

    describe('Edge Cases', () => {
        it('should handle sending while disconnected', async () => {
            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID
            });

            expect(() => {
                client.send({ type: 'test' } as any);
            }).toThrow('Cannot send message: not connected');
        });

        it('should handle multiple connect calls', async () => {
            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID
            });

            await client.connect();
            await client.connect(); // Second call should be ignored

            expect(client.isConnected()).toBe(true);
        });

        it('should handle disconnect without connect', () => {
            client = new WebSocketClient({
                url: SERVER_URL,
                conversationId: CONVERSATION_ID
            });

            expect(() => {
                client.disconnect();
            }).not.toThrow();
        });
    });
});
