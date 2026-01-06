/**
 * WebSocket Relay Client Types
 *
 * Defines the protocol for communication with the remote Claude relay server
 */

export interface WebSocketClientConfig {
    serverUrl: string;
    authToken?: string;
    conversationId: string;
    autoReconnect: boolean;
    reconnectInterval: number;
    maxReconnectAttempts: number;
}

export interface WebSocketMessage {
    type: string;
    [key: string]: any;
}

// Client → Server messages
export interface UserMessage extends WebSocketMessage {
    type: 'user_message';
    conversationId: string;
    content: string;
    context: {
        currentFile?: string;
        selection?: string;
        frontmatter?: Record<string, any>;
        tags?: string[];
    };
}

export interface ResponseMessage extends WebSocketMessage {
    type: 'response';
    requestId: string;
    data?: any;
    error?: string;
}

export interface PingMessage extends WebSocketMessage {
    type: 'ping';
}

// Server → Client messages
export interface ConnectedMessage extends WebSocketMessage {
    type: 'connected';
    conversationId: string;
    message: string;
}

export interface ReconnectedMessage extends WebSocketMessage {
    type: 'reconnected';
    conversationId: string;
    message: string;
}

export interface AIStreamMessage extends WebSocketMessage {
    type: 'ai_stream';
    conversationId: string;
    content: string;
    isStreaming: boolean;
}

export interface AIDoneMessage extends WebSocketMessage {
    type: 'ai_done';
    conversationId: string;
    finalOutput?: string;
}

export interface RequestMessage extends WebSocketMessage {
    type: 'request';
    requestId: string;
    conversationId: string;
    action: 'get_file' | 'edit_file' | 'tool_use' | string;
    params: Record<string, any>;
}

export interface ErrorMessage extends WebSocketMessage {
    type: 'error';
    message: string;
}

export interface AIErrorMessage extends WebSocketMessage {
    type: 'ai_error';
    conversationId: string;
    error: string;
}

// MCP over WebSocket messages
export interface MCPRequestMessage extends WebSocketMessage {
    type: 'mcp_request';
    requestId: string;
    mcp: any; // JSONRPCRequest
}

export interface MCPResponseMessage extends WebSocketMessage {
    type: 'mcp_response';
    requestId: string;
    mcp: any; // JSONRPCResponse
}

export interface MCPNotificationMessage extends WebSocketMessage {
    type: 'mcp_notification';
    mcp: any; // JSONRPCRequest (no id)
}

export type ServerMessage =
    | ConnectedMessage
    | ReconnectedMessage
    | AIStreamMessage
    | AIDoneMessage
    | RequestMessage
    | ErrorMessage
    | AIErrorMessage
    | MCPRequestMessage
    | MCPResponseMessage
    | MCPNotificationMessage;

export type ClientMessage = UserMessage | ResponseMessage | PingMessage | MCPRequestMessage | MCPResponseMessage | MCPNotificationMessage;

export interface ConnectionState {
    isConnected: boolean;
    isConnecting: boolean;
    isReconnecting: boolean;
    conversationId: string;
    reconnectAttempts: number;
    lastError?: string;
}

export interface MessageHandler {
    onConnected?: (msg: ConnectedMessage) => void;
    onReconnected?: (msg: ReconnectedMessage) => void;
    onAIStream?: (msg: AIStreamMessage) => void;
    onAIDone?: (msg: AIDoneMessage) => void;
    onRequest?: (msg: RequestMessage) => void;
    onError?: (msg: ErrorMessage) => void;
    onAIError?: (msg: AIErrorMessage) => void;
    onMCPRequest?: (msg: MCPRequestMessage) => void;
    onMCPResponse?: (msg: MCPResponseMessage) => void;
    onMCPNotification?: (msg: MCPNotificationMessage) => void;
}
