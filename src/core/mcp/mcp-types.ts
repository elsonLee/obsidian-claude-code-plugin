/**
 * MCP Protocol Types
 *
 * Type definitions for Model Context Protocol (MCP)
 * Based on MCP 2025-11-25 specification
 * See: https://modelcontextprotocol.io/specification/2025-11-25/
 */

// JSON-RPC 2.0 Base Types
export interface JSONRPCRequest {
    jsonrpc: '2.0';
    method: string;
    params?: any;
    id?: number | string;
}

export interface JSONRPCResponse {
    jsonrpc: '2.0';
    result?: any;
    error?: JSONRPCError;
    id: number | string;
}

export interface JSONRPCError {
    code: number;
    message: string;
    data?: any;
}

// MCP Resource Types
export interface Resource {
    uri: string;
    name: string;
    description?: string;
    mimeType?: string;
}

export interface ResourceContent {
    uri: string;
    mimeType?: string;
    text?: string;
    blob?: string;
}

// MCP Tool Types
export interface Tool {
    name: string;
    description: string;
    inputSchema: {
        type: 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null';
        properties?: Record<string, {
            type: string;
            description?: string;
            enum?: any[];
            default?: any;
        }>;
        required?: string[];
        additionalProperties?: boolean;
    };
}

export interface ToolCallRequest {
    name: string;
    arguments?: Record<string, any>;
}

export interface ToolCallResult {
    content: Array<{
        type: 'text' | 'image' | 'resource';
        text?: string;
        data?: string;
        uri?: string;
        mimeType?: string;
    }>;
    isError?: boolean;
}

// MCP Prompt Types
export interface Prompt {
    name: string;
    description?: string;
    arguments?: Array<{
        name: string;
        description?: string;
        required?: boolean;
    }>;
}

export interface PromptMessage {
    role: 'user' | 'assistant';
    content: {
        type: 'text' | 'image' | 'resource';
        text?: string;
        data?: string;
        uri?: string;
    };
}

// MCP Server Capabilities
export interface ServerCapabilities {
    resources?: {
        subscribe?: boolean;
        listChanges?: boolean;
    };
    tools?: {};
    prompts?: {};
}

// MCP Client Capabilities
export interface ClientCapabilities {
    experimental?: Record<string, any>;
    sampling?: {};
    roots?: {
        listChanged?: boolean;
    };
}

// MCP Method Names
export enum MCPMethod {
    // Initialization
    Initialize = 'initialize',

    // Resources
    ListResources = 'resources/list',
    ReadResource = 'resources/read',

    // Tools
    ListTools = 'tools/list',
    CallTool = 'tools/call',

    // Prompts
    ListPrompts = 'prompts/list',
    GetPrompt = 'prompts/get',

    // Notifications
    NotificationsInitialized = 'notifications/initialized',
    NotificationsCancelled = 'notifications/cancelled',

    // Roots
    RootsList = 'roots/list',
}

// Obsidian-specific MCP Tool implementations
export interface ObsidianToolDefinitions {
    'list_files_in_vault': Tool;
    'list_files_in_dir': Tool;
    'get_file_contents': Tool;
    'search': Tool;
    'create_file': Tool;
    'update_file': Tool;
    'delete_file': Tool;
}

// MCP Request/Response Wrappers for WebSocket Transport
export interface MCPWebSocketRequest {
    type: 'mcp_request';
    requestId: string;
    mcp: JSONRPCRequest;
}

export interface MCPWebSocketResponse {
    type: 'mcp_response';
    requestId: string;
    mcp: JSONRPCResponse;
}

export interface MCPWebSocketNotification {
    type: 'mcp_notification';
    mcp: JSONRPCRequest; // Notifications don't have id
}
