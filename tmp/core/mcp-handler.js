"use strict";
/**
 * MCP Protocol Handler
 *
 * Handles MCP (Model Context Protocol) requests and responses
 * Integrates with Obsidian MCP tools
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MCPHandler = void 0;
var mcp_types_1 = require("./mcp-types");
var obsidian_mcp_tools_1 = require("./obsidian-mcp-tools");
var MCPHandler = /** @class */ (function () {
    function MCPHandler(app) {
        this.app = app;
        this.tools = new obsidian_mcp_tools_1.ObsidianMCPTools(app);
        this.serverCapabilities = {
            tools: {},
            resources: {}
        };
    }
    /**
     * Handle an MCP request
     */
    MCPHandler.prototype.handleRequest = function (request) {
        return __awaiter(this, void 0, void 0, function () {
            var method, params, id, result, _a, error_1, mcpError;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        method = request.method, params = request.params, id = request.id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 16, , 17]);
                        result = void 0;
                        _a = method;
                        switch (_a) {
                            case mcp_types_1.MCPMethod.Initialize: return [3 /*break*/, 2];
                            case mcp_types_1.MCPMethod.ListTools: return [3 /*break*/, 4];
                            case mcp_types_1.MCPMethod.CallTool: return [3 /*break*/, 6];
                            case mcp_types_1.MCPMethod.ListResources: return [3 /*break*/, 8];
                            case mcp_types_1.MCPMethod.ReadResource: return [3 /*break*/, 10];
                            case mcp_types_1.MCPMethod.ListPrompts: return [3 /*break*/, 12];
                        }
                        return [3 /*break*/, 14];
                    case 2: return [4 /*yield*/, this.initialize(params)];
                    case 3:
                        result = _b.sent();
                        return [3 /*break*/, 15];
                    case 4: return [4 /*yield*/, this.listTools()];
                    case 5:
                        result = _b.sent();
                        return [3 /*break*/, 15];
                    case 6: return [4 /*yield*/, this.callTool(params)];
                    case 7:
                        result = _b.sent();
                        return [3 /*break*/, 15];
                    case 8: return [4 /*yield*/, this.listResources()];
                    case 9:
                        result = _b.sent();
                        return [3 /*break*/, 15];
                    case 10: return [4 /*yield*/, this.readResource(params)];
                    case 11:
                        result = _b.sent();
                        return [3 /*break*/, 15];
                    case 12: return [4 /*yield*/, this.listPrompts()];
                    case 13:
                        result = _b.sent();
                        return [3 /*break*/, 15];
                    case 14: throw new Error("Unknown MCP method: ".concat(method));
                    case 15: return [2 /*return*/, {
                            jsonrpc: '2.0',
                            result: result,
                            id: id
                        }];
                    case 16:
                        error_1 = _b.sent();
                        mcpError = {
                            code: -32603,
                            message: error_1.message,
                            data: error_1.stack
                        };
                        return [2 /*return*/, {
                                jsonrpc: '2.0',
                                error: mcpError,
                                id: id
                            }];
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Initialize MCP session
     */
    MCPHandler.prototype.initialize = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('[MCP] Initializing with params:', params);
                // Return server capabilities
                return [2 /*return*/, this.serverCapabilities];
            });
        });
    };
    /**
     * List available tools
     */
    MCPHandler.prototype.listTools = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tools;
            return __generator(this, function (_a) {
                tools = this.tools.getTools();
                console.log("[MCP] Listing ".concat(tools.length, " tools"));
                return [2 /*return*/, { tools: tools }];
            });
        });
    };
    /**
     * Call a tool
     */
    MCPHandler.prototype.callTool = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var name, args, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = params.name, args = params.arguments;
                        console.log("[MCP] Calling tool: ".concat(name), args);
                        return [4 /*yield*/, this.tools.callTool(name, args)];
                    case 1:
                        result = _a.sent();
                        if (result.isError) {
                            throw new Error(result.content[0].text);
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * List resources (files in the vault)
     */
    MCPHandler.prototype.listResources = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files, resources;
            return __generator(this, function (_a) {
                files = this.app.vault.getMarkdownFiles();
                resources = files.map(function (f) { return ({
                    uri: "file://".concat(f.path),
                    name: f.basename,
                    description: f.path,
                    mimeType: 'text/markdown'
                }); });
                console.log("[MCP] Listing ".concat(resources.length, " resources"));
                return [2 /*return*/, { resources: resources }];
            });
        });
    };
    /**
     * Read a resource (file content)
     */
    MCPHandler.prototype.readResource = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var uri, path, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = params.uri;
                        path = uri.replace('file://', '');
                        console.log("[MCP] Reading resource: ".concat(path));
                        return [4 /*yield*/, this.tools.callTool('get_file_contents', { path: path })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, {
                                contents: [{
                                        uri: uri,
                                        mimeType: 'text/markdown',
                                        text: result.content[0].text
                                    }]
                            }];
                }
            });
        });
    };
    /**
     * List prompts
     */
    MCPHandler.prototype.listPrompts = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // Obsidian doesn't have predefined prompts in this implementation
                return [2 /*return*/, { prompts: [] }];
            });
        });
    };
    return MCPHandler;
}());
exports.MCPHandler = MCPHandler;
