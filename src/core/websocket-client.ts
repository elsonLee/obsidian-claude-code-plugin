/**
 * WebSocket Relay Client
 *
 * Manages WebSocket connection to remote Claude relay server
 * Handles bidirectional communication for remote Claude Code execution
 */

import { Notice } from 'obsidian';
import { App } from 'obsidian';
import {
    WebSocketClientConfig,
    ClientMessage,
    ServerMessage,
    ConnectionState,
    MessageHandler
} from './websocket-types';
import { MCPHandler } from './mcp-handler';

export class WebSocketClient {
    private config: WebSocketClientConfig;
    private ws: WebSocket | null = null;
    private state: ConnectionState;
    private handlers: MessageHandler = {};
    private reconnectTimeout: NodeJS.Timeout | null = null;
    private pendingRequests: Map<string, {
        resolve: (value: any) => void;
        reject: (error: Error) => void;
        timestamp: number;
    }> = new Map();
    private mcpHandler: MCPHandler | null = null;

    constructor(config: WebSocketClientConfig, app?: App) {
        this.config = config;
        this.state = {
            isConnected: false,
            isConnecting: false,
            isReconnecting: false,
            conversationId: config.conversationId,
            reconnectAttempts: 0
        };

        // Initialize MCP handler if app is provided
        if (app) {
            this.mcpHandler = new MCPHandler(app);
        }
    }

    /**
     * Register message handlers
     */
    onMessage(handler: MessageHandler): void {
        this.handlers = { ...this.handlers, ...handler };
    }

    /**
     * Get current connection state
     */
    getState(): ConnectionState {
        return { ...this.state };
    }

    /**
     * Connect to relay server
     */
    connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.state.isConnected || this.state.isConnecting) {
                resolve();
                return;
            }

            this.state.isConnecting = true;

            try {
                // Build WebSocket URL with conversationId
                const url = new URL(this.config.serverUrl);
                url.searchParams.set('conversationId', this.config.conversationId);

                console.log(`[WebSocket] Connecting to ${url.toString()}`);

                this.ws = new WebSocket(url.toString());

                this.ws.onopen = () => {
                    console.log('[WebSocket] Connected');
                    this.state.isConnected = true;
                    this.state.isConnecting = false;
                    this.state.isReconnecting = false;
                    this.state.reconnectAttempts = 0;
                    this.state.lastError = undefined;

                    if (this.reconnectTimeout) {
                        clearTimeout(this.reconnectTimeout);
                        this.reconnectTimeout = null;
                    }

                    resolve();
                };

                this.ws.onmessage = async (event) => {
                    await this.handleMessage(event.data);
                };

                this.ws.onerror = (error) => {
                    console.error('[WebSocket] Error:', error);
                    this.state.lastError = 'WebSocket connection error';
                };

                this.ws.onclose = (event) => {
                    console.log(`[WebSocket] Closed: ${event.code} - ${event.reason}`);
                    this.state.isConnected = false;
                    this.state.isConnecting = false;

                    // Attempt reconnection if enabled
                    if (this.config.autoReconnect && !event.wasClean) {
                        this.scheduleReconnect();
                    }
                };

            } catch (error) {
                this.state.isConnecting = false;
                this.state.lastError = String(error);
                reject(error);
            }
        });
    }

    /**
     * Disconnect from server
     */
    disconnect(): void {
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }

        if (this.ws) {
            this.ws.close(1000, 'Client disconnect');
            this.ws = null;
        }

        this.state.isConnected = false;
        this.state.isConnecting = false;
        this.state.isReconnecting = false;
    }

    /**
     * Send user message to server
     */
    async sendUserMessage(content: string, context: any = {}): Promise<void> {
        const message: ClientMessage = {
            type: 'user_message',
            conversationId: this.config.conversationId,
            content,
            context
        };

        this.send(message);
    }

    /**
     * Send ping to server
     */
    ping(): void {
        this.send({ type: 'ping' });
    }

    /**
     * Send message to server
     */
    private send(message: ClientMessage): void {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            throw new Error('WebSocket is not connected');
        }

        const json = JSON.stringify(message);
        this.ws.send(json);
        console.log(`[WebSocket] Sent: ${(message as any).type}`);
    }

    /**
     * Handle incoming message from server
     */
    private async handleMessage(data: string): Promise<void> {
        try {
            const message: ServerMessage = JSON.parse(data);
            console.log(`[WebSocket] Received: ${message.type}`);

            switch (message.type) {
                case 'connected':
                    this.handlers.onConnected?.(message);
                    break;

                case 'reconnected':
                    this.handlers.onReconnected?.(message);
                    break;

                case 'ai_stream':
                    this.handlers.onAIStream?.(message);
                    break;

                case 'ai_done':
                    this.handlers.onAIDone?.(message);
                    break;

                case 'request':
                    await this.handleRequest(message);
                    break;

                case 'error':
                    this.handlers.onError?.(message);
                    new Notice(`WebSocket Error: ${message.message}`);
                    break;

                case 'ai_error':
                    this.handlers.onAIError?.(message);
                    new Notice(`Claude Error: ${message.error}`);
                    break;

                case 'mcp_request':
                    await this.handleMCPRequest(message);
                    break;

                case 'mcp_response':
                    this.handlers.onMCPResponse?.(message);
                    break;

                case 'mcp_notification':
                    this.handlers.onMCPNotification?.(message);
                    break;

                default:
                    // Type assertion for unknown message types
                    const unknown = message as { type: string };
                    console.warn(`[WebSocket] Unknown message type: ${unknown.type}`);
            }

        } catch (error) {
            console.error('[WebSocket] Failed to parse message:', error);
        }
    }

    /**
     * Handle file request from server
     */
    private async handleRequest(message: any): Promise<void> {
        const { requestId, action, params } = message;

        console.log(`[WebSocket] Server request: ${action}`, params);

        // Notify handler - handler should call sendResponse
        this.handlers.onRequest?.(message);
    }

    /**
     * Handle MCP request from server
     */
    private async handleMCPRequest(message: any): Promise<void> {
        const { requestId, mcp } = message;

        console.log(`[WebSocket] MCP request: ${mcp.method}`);

        if (!this.mcpHandler) {
            console.warn('[WebSocket] MCP handler not initialized');
            this.sendMCPResponse(requestId, {
                jsonrpc: '2.0',
                error: {
                    code: -32600,
                    message: 'MCP handler not initialized'
                },
                id: mcp.id
            });
            return;
        }

        try {
            // Handle MCP request
            const response = await this.mcpHandler.handleRequest(mcp);

            // Send response back
            this.sendMCPResponse(requestId, response);

        } catch (error) {
            console.error('[WebSocket] MCP request error:', error);

            this.sendMCPResponse(requestId, {
                jsonrpc: '2.0',
                error: {
                    code: -32603,
                    message: error.message,
                    data: error.stack
                },
                id: mcp.id
            });
        }
    }

    /**
     * Send response to server request
     */
    sendResponse(requestId: string, data?: any, error?: string): void {
        const message: ClientMessage = {
            type: 'response',
            requestId,
            data,
            error
        };

        this.send(message);
    }

    /**
     * Send MCP request to server
     */
    sendMCPRequest(mcpRequest: any): void {
        const message: ClientMessage = {
            type: 'mcp_request',
            requestId: `mcp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            mcp: mcpRequest
        };

        this.send(message);
    }

    /**
     * Send MCP response to server
     */
    sendMCPResponse(requestId: string, mcpResponse: any): void {
        const message: ClientMessage = {
            type: 'mcp_response',
            requestId,
            mcp: mcpResponse
        };

        this.send(message);
    }

    /**
     * Send MCP notification to server
     */
    sendMCPNotification(mcpNotification: any): void {
        const message: ClientMessage = {
            type: 'mcp_notification',
            mcp: mcpNotification
        };

        this.send(message);
    }

    /**
     * Schedule reconnection attempt
     */
    private scheduleReconnect(): void {
        if (this.state.isReconnecting) {
            return;
        }

        if (this.state.reconnectAttempts >= this.config.maxReconnectAttempts) {
            console.error('[WebSocket] Max reconnection attempts reached');
            new Notice('Failed to reconnect to server after multiple attempts');
            return;
        }

        this.state.isReconnecting = true;
        this.state.reconnectAttempts++;

        // Exponential backoff
        const delay = Math.min(
            this.config.reconnectInterval * Math.pow(2, this.state.reconnectAttempts - 1),
            30000 // Max 30 seconds
        );

        console.log(`[WebSocket] Scheduling reconnect in ${delay}ms (attempt ${this.state.reconnectAttempts})`);

        this.reconnectTimeout = setTimeout(() => {
            console.log('[WebSocket] Attempting to reconnect...');
            this.connect().catch((error) => {
                console.error('[WebSocket] Reconnection failed:', error);
                this.scheduleReconnect();
            });
        }, delay);
    }
}
