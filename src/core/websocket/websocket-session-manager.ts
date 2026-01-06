/**
 * WebSocket Session Manager
 * Manages WebSocket connections and message routing for Obsidian plugin
 */

import { WebSocketClient, ConnectionState, WebSocketConfig } from './websocket-client';
import { MCPHandler, MCPWebSocketRequest, MCPWebSocketResponse } from '../mcp/mcp-handler';

/**
 * Session manager configuration
 */
export interface SessionManagerConfig extends WebSocketConfig {
    // Inherits url, conversationId, autoReconnect, etc. from WebSocketConfig
}

/**
 * Stream chunk callback
 */
export type StreamCallback = (chunk: any) => void;

/**
 * MCP Response callback
 */
export type MCPResponseCallback = (response: MCPWebSocketResponse) => void;

/**
 * Tool status callback
 */
export type ToolStatusCallback = (status: any) => void;

/**
 * State change callback
 */
export type StateChangeCallback = (state: ConnectionState) => void;

/**
 * Error callback
 */
export type ErrorCallback = (error: Error) => void;

/**
 * WebSocket Session Manager
 * Manages WebSocket connections and routes messages between UI and Relay Server
 */
export class WebSocketSessionManager {
    private wsClient: WebSocketClient;
    private mcpHandler: MCPHandler;
    private conversationId: string;
    private streamCallbacks: Set<StreamCallback> = new Set();
    private mcpResponseCallbacks: Set<MCPResponseCallback> = new Set();
    private toolStatusCallbacks: Set<ToolStatusCallback> = new Set();
    private stateChangeCallbacks: Set<StateChangeCallback> = new Set();
    private errorCallback: ErrorCallback | null = null;
    private pendingMCPRequests: Map<string, {
        resolve: (response: MCPWebSocketResponse) => void;
        reject: (error: Error) => void;
        timeout: NodeJS.Timeout;
    }> = new Map();

    constructor(config: SessionManagerConfig) {
        this.conversationId = config.conversationId;

        // Initialize WebSocket client
        this.wsClient = new WebSocketClient({
            url: config.url,
            conversationId: config.conversationId,
            autoReconnect: config.autoReconnect ?? true,
            reconnectInterval: config.reconnectInterval ?? 2000,
            maxRetries: config.maxRetries ?? 10,
            connectTimeout: config.connectTimeout ?? 10000
        });

        // Initialize MCP Handler
        this.mcpHandler = new MCPHandler({
            serverName: 'obsidian-claude-plugin',
            serverVersion: '1.0.0'
        });

        // Setup message handlers
        this.setupMessageHandlers();
    }

    /**
     * Connect to WebSocket server
     */
    async connect(): Promise<void> {
        await this.wsClient.connect();
    }

    /**
     * Disconnect from WebSocket server
     */
    async disconnect(): Promise<void> {
        this.wsClient.disconnect();

        // Clear pending requests
        this.pendingMCPRequests.forEach(({ reject, timeout }) => {
            clearTimeout(timeout);
            reject(new Error('Connection closed'));
        });
        this.pendingMCPRequests.clear();
    }

    /**
     * Check if connected
     */
    isConnected(): boolean {
        return this.wsClient.isConnected();
    }

    /**
     * Get MCP Handler
     */
    getMCPHandler(): MCPHandler {
        return this.mcpHandler;
    }

    /**
     * Send user message
     */
    sendUserMessage(content: string): void {
        if (!this.wsClient.isConnected()) {
            throw new Error('Not connected to WebSocket server');
        }

        this.wsClient.send({
            type: 'user_message',
            conversationId: this.conversationId,
            content
        });
    }

    /**
     * Send MCP request and wait for response
     */
    async sendMCPRequest(request: MCPWebSocketRequest): Promise<MCPWebSocketResponse> {
        if (!this.wsClient.isConnected()) {
            throw new Error('Not connected to WebSocket server');
        }

        return new Promise((resolve, reject) => {
            const requestId = request.requestId;

            // Set timeout
            const timeout = setTimeout(() => {
                this.pendingMCPRequests.delete(requestId);
                reject(new Error(`MCP request timeout: ${requestId}`));
            }, 30000); // 30 second timeout

            // Store pending request
            this.pendingMCPRequests.set(requestId, { resolve, reject, timeout });

            // Send request
            this.wsClient.send(request);
        });
    }

    /**
     * Register stream callback
     */
    onStream(callback: StreamCallback): () => void {
        this.streamCallbacks.add(callback);
        return () => this.streamCallbacks.delete(callback);
    }

    /**
     * Register MCP response callback
     */
    onMCPResponse(callback: MCPResponseCallback): () => void {
        this.mcpResponseCallbacks.add(callback);
        return () => this.mcpResponseCallbacks.delete(callback);
    }

    /**
     * Register tool status callback
     */
    onToolStatus(callback: ToolStatusCallback): () => void {
        this.toolStatusCallbacks.add(callback);
        return () => this.toolStatusCallbacks.delete(callback);
    }

    /**
     * Register state change callback
     */
    onStateChange(callback: StateChangeCallback): () => void {
        this.stateChangeCallbacks.add(callback);

        // Immediately call with current state
        callback(this.wsClient.getState());

        return () => this.stateChangeCallbacks.delete(callback);
    }

    /**
     * Register error callback
     */
    onError(callback: ErrorCallback): () => void {
        this.errorCallback = callback;
        return () => { this.errorCallback = null; };
    }

    /**
     * Setup message handlers from WebSocket client
     */
    private setupMessageHandlers(): void {
        // Handle incoming messages
        this.wsClient.onMessage((message: any) => {
            this.handleIncomingMessage(message);
        });

        // Handle state changes
        this.wsClient.onStateChange((state) => {
            this.stateChangeCallbacks.forEach(callback => {
                try {
                    callback(state);
                } catch (error) {
                    console.error('Error in state change callback:', error);
                }
            });
        });

        // Handle errors
        this.wsClient.onError((error) => {
            if (this.errorCallback) {
                try {
                    this.errorCallback(error);
                } catch (err) {
                    console.error('Error in error callback:', err);
                }
            }
        });
    }

    /**
     * Handle incoming message from WebSocket
     */
    private handleIncomingMessage(message: any): void {
        const { type, conversationId } = message;

        // Filter messages for other conversations
        if (conversationId && conversationId !== this.conversationId) {
            return;
        }

        switch (type) {
            case 'ai_stream':
                this.handleAIStream(message);
                break;

            case 'mcp_response':
                this.handleMCPResponse(message);
                break;

            case 'mcp_request':
                this.handleMCPRequest(message);
                break;

            case 'tool_status':
                this.handleToolStatus(message);
                break;

            default:
                console.warn('Unknown message type:', type);
        }
    }

    /**
     * Handle AI stream chunk
     */
    private handleAIStream(message: any): void {
        this.streamCallbacks.forEach(callback => {
            try {
                callback(message);
            } catch (error) {
                console.error('Error in stream callback:', error);
            }
        });
    }

    /**
     * Handle MCP response
     */
    private handleMCPResponse(response: MCPWebSocketResponse): void {
        const { requestId } = response;

        // Check if this is a response to a pending request
        const pending = this.pendingMCPRequests.get(requestId);
        if (pending) {
            clearTimeout(pending.timeout);
            this.pendingMCPRequests.delete(requestId);
            pending.resolve(response);
        }

        // Notify all callbacks
        this.mcpResponseCallbacks.forEach(callback => {
            try {
                callback(response);
            } catch (error) {
                console.error('Error in MCP response callback:', error);
            }
        });
    }

    /**
     * Handle incoming MCP request (tool call from server)
     */
    private async handleMCPRequest(request: MCPWebSocketRequest): Promise<void> {
        try {
            // Process through MCP handler
            const response = await this.mcpHandler.handleRequest(request);

            // Send response back
            if (this.wsClient.isConnected()) {
                this.wsClient.send(response);
            }
        } catch (error) {
            console.error('Error handling MCP request:', error);

            // Send error response
            const errorResponse: MCPWebSocketResponse = {
                type: 'mcp_response',
                requestId: request.requestId,
                mcp: {
                    jsonrpc: '2.0',
                    error: {
                        code: -32603,
                        message: error instanceof Error ? error.message : 'Internal error'
                    },
                    id: request.mcp.id
                }
            };

            if (this.wsClient.isConnected()) {
                this.wsClient.send(errorResponse);
            }
        }
    }

    /**
     * Handle tool status update
     */
    private handleToolStatus(status: any): void {
        this.toolStatusCallbacks.forEach(callback => {
            try {
                callback(status);
            } catch (error) {
                console.error('Error in tool status callback:', error);
            }
        });
    }

    /**
     * Register an MCP tool
     */
    registerTool(tool: any, executor: any): void {
        this.mcpHandler.registerTool(tool, executor);
    }

    /**
     * Unregister an MCP tool
     */
    unregisterTool(name: string): void {
        this.mcpHandler.unregisterTool(name);
    }
}
