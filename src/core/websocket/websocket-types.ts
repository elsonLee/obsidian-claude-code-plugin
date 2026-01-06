/**
 * WebSocket Message Types
 * Defines all message types exchanged between Obsidian plugin and Relay Server
 */

/**
 * Connection state enum
 */
export enum ConnectionState {
    DISCONNECTED = 'disconnected',
    CONNECTING = 'connecting',
    CONNECTED = 'connected',
    RECONNECTING = 'reconnecting',
    ERROR = 'error'
}

/**
 * Base WebSocket message interface
 */
export interface WSMessage {
    type: string;
    [key: string]: any;
}

/**
 * Connection confirmation message
 */
export interface ConnectedMessage extends WSMessage {
    type: 'connected';
    conversationId: string;
    message: string;
}

/**
 * Reconnection confirmation message
 */
export interface ReconnectedMessage extends WSMessage {
    type: 'reconnected';
    conversationId: string;
    message: string;
}

/**
 * User message from Obsidian to Claude
 */
export interface UserMessage extends WSMessage {
    type: 'user_message';
    conversationId: string;
    content: string;
    context?: NoteContext;
}

/**
 * AI streaming response from Claude
 */
export interface AIStreamMessage extends WSMessage {
    type: 'ai_stream';
    conversationId: string;
    content: string;
    isStreaming: true;
}

/**
 * AI completion message
 */
export interface AIDoneMessage extends WSMessage {
    type: 'ai_done';
    conversationId: string;
    finalOutput: string;
}

/**
 * AI error message
 */
export interface AIErrorMessage extends WSMessage {
    type: 'ai_error';
    conversationId: string;
    error: string;
}

/**
 * MCP request message (tool call)
 */
export interface MCPRequestMessage extends WSMessage {
    type: 'mcp_request';
    requestId: string;
    mcp: MCPRequest;
}

/**
 * MCP response message (tool result)
 */
export interface MCPResponseMessage extends WSMessage {
    type: 'mcp_response';
    requestId: string;
    mcp: MCPResponse;
}

/**
 * MCP notification message
 */
export interface MCPNotificationMessage extends WSMessage {
    type: 'mcp_notification';
    mcp: MCPNotification;
}

/**
 * Error message from server
 */
export interface ErrorMessage extends WSMessage {
    type: 'error';
    message: string;
}

/**
 * Note context for user messages
 */
export interface NoteContext {
    currentFile?: string;
    selection?: string;
    frontmatter?: any;
    tags?: string[];
}

/**
 * MCP Request (JSON-RPC 2.0)
 */
export interface MCPRequest {
    jsonrpc: '2.0';
    id: string | number;
    method: string;
    params?: any;
}

/**
 * MCP Response (JSON-RPC 2.0)
 */
export interface MCPResponse {
    jsonrpc: '2.0';
    id: string | number;
    result?: any;
    error?: MCPError;
}

/**
 * MCP Notification (no id)
 */
export interface MCPNotification {
    jsonrpc: '2.0';
    method: string;
    params?: any;
}

/**
 * MCP Error
 */
export interface MCPError {
    code: number;
    message: string;
    data?: any;
}

/**
 * WebSocket Client Events
 */
export type WebSocketEvent =
    | { event: 'open'; data: void }
    | { event: 'message'; data: WSMessage }
    | { event: 'error'; data: Error }
    | { event: 'close'; data: { code: number; reason: string } }
    | { event: 'stateChange'; data: ConnectionState };

/**
 * WebSocket Client Configuration
 */
export interface WebSocketConfig {
    url: string;
    conversationId: string;
    autoReconnect?: boolean;
    reconnectInterval?: number;
    maxRetries?: number;
    connectTimeout?: number;
}

/**
 * Message callback type
 */
export type MessageCallback = (message: WSMessage) => void;

/**
 * Error callback type
 */
export type ErrorCallback = (error: Error) => void;

/**
 * State change callback type
 */
export type StateChangeCallback = (state: ConnectionState) => void;
