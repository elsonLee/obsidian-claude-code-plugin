"use strict";
/**
 * MCP Protocol Types
 *
 * Type definitions for Model Context Protocol (MCP)
 * Based on MCP 2025-11-25 specification
 * See: https://modelcontextprotocol.io/specification/2025-11-25/
 */
exports.__esModule = true;
exports.MCPMethod = void 0;
// MCP Method Names
var MCPMethod;
(function (MCPMethod) {
    // Initialization
    MCPMethod["Initialize"] = "initialize";
    // Resources
    MCPMethod["ListResources"] = "resources/list";
    MCPMethod["ReadResource"] = "resources/read";
    // Tools
    MCPMethod["ListTools"] = "tools/list";
    MCPMethod["CallTool"] = "tools/call";
    // Prompts
    MCPMethod["ListPrompts"] = "prompts/list";
    MCPMethod["GetPrompt"] = "prompts/get";
    // Notifications
    MCPMethod["NotificationsInitialized"] = "notifications/initialized";
    MCPMethod["NotificationsCancelled"] = "notifications/cancelled";
    // Roots
    MCPMethod["RootsList"] = "roots/list";
})(MCPMethod = exports.MCPMethod || (exports.MCPMethod = {}));
