"use strict";
/**
 * MCP Integration Test
 *
 * Tests the complete MCP integration flow:
 * WebSocket Client -> MCP Handler -> Obsidian Tools -> Response
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var mcp_handler_1 = require("./core/mcp-handler");
var mcp_types_1 = require("./core/mcp-types");
// Mock Obsidian App
var MockVault = /** @class */ (function () {
    function MockVault() {
        this.files = new Map([
            ['test.md', { path: 'test.md', basename: 'test', extension: 'md', content: '# Test Note\n\nThis is a test note.' }],
            ['projects/active.md', { path: 'projects/active.md', basename: 'active', extension: 'md', content: '# Active Project\n\nSome content here.' }],
        ]);
    }
    MockVault.prototype.getMarkdownFiles = function () {
        return Array.from(this.files.values()).map(function (f) { return ({
            path: f.path,
            basename: f.basename,
            extension: f.extension
        }); });
    };
    MockVault.prototype.getFiles = function () {
        return this.getMarkdownFiles();
    };
    MockVault.prototype.getAbstractFileByPath = function (path) {
        return this.files.get(path);
    };
    MockVault.prototype.read = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var fileData;
            return __generator(this, function (_a) {
                fileData = this.files.get(file.path);
                return [2 /*return*/, (fileData === null || fileData === void 0 ? void 0 : fileData.content) || ''];
            });
        });
    };
    MockVault.prototype.create = function (path, content) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.files.set(path, { path: path, basename: path.replace('.md', ''), extension: 'md', content: content });
                return [2 /*return*/];
            });
        });
    };
    MockVault.prototype.modify = function (file, content) {
        return __awaiter(this, void 0, void 0, function () {
            var existing;
            return __generator(this, function (_a) {
                if (this.files.has(file.path)) {
                    existing = this.files.get(file.path);
                    this.files.set(file.path, __assign(__assign({}, existing), { content: content }));
                }
                return [2 /*return*/];
            });
        });
    };
    MockVault.prototype["delete"] = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.files["delete"](file.path);
                return [2 /*return*/];
            });
        });
    };
    return MockVault;
}());
var MockApp = /** @class */ (function () {
    function MockApp() {
        this.vault = new MockVault();
    }
    return MockApp;
}());
// Test Cases
function runTests() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
    return __awaiter(this, void 0, void 0, function () {
        var app, mcpHandler, passed, failed, initRequest, response, error_1, listToolsRequest, response, tools, toolNames, error_2, callToolRequest, response, content, files, error_3, callToolRequest, response, content, error_4, callToolRequest, response, content, results, error_5, callToolRequest, response, content, error_6, callToolRequest, response, content, error_7, listResourcesRequest, response, resources, error_8, callToolRequest, response, error_9;
        return __generator(this, function (_t) {
            switch (_t.label) {
                case 0:
                    console.log('=== MCP Integration Tests ===\n');
                    app = new MockApp();
                    mcpHandler = new mcp_handler_1.MCPHandler(app);
                    passed = 0;
                    failed = 0;
                    // Test 1: Initialize
                    console.log('Test 1: MCP Initialize');
                    _t.label = 1;
                case 1:
                    _t.trys.push([1, 3, , 4]);
                    initRequest = {
                        jsonrpc: '2.0',
                        method: mcp_types_1.MCPMethod.Initialize,
                        params: { protocolVersion: '2025-11-25', capabilities: {} },
                        id: 1
                    };
                    return [4 /*yield*/, mcpHandler.handleRequest(initRequest)];
                case 2:
                    response = _t.sent();
                    if (response.result && !response.error) {
                        console.log('✓ PASS: Initialize successful\n');
                        passed++;
                    }
                    else {
                        console.log('✗ FAIL: Initialize failed\n', response);
                        failed++;
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _t.sent();
                    console.log('✗ FAIL: Initialize threw error:', error_1.message, '\n');
                    failed++;
                    return [3 /*break*/, 4];
                case 4:
                    // Test 2: List Tools
                    console.log('Test 2: List Tools');
                    _t.label = 5;
                case 5:
                    _t.trys.push([5, 7, , 8]);
                    listToolsRequest = {
                        jsonrpc: '2.0',
                        method: mcp_types_1.MCPMethod.ListTools,
                        id: 2
                    };
                    return [4 /*yield*/, mcpHandler.handleRequest(listToolsRequest)];
                case 6:
                    response = _t.sent();
                    tools = (_a = response.result) === null || _a === void 0 ? void 0 : _a.tools;
                    if (tools && tools.length === 7) {
                        toolNames = tools.map(function (t) { return t.name; }).sort();
                        console.log('✓ PASS: Found 7 tools:', toolNames.join(', '), '\n');
                        passed++;
                    }
                    else {
                        console.log('✗ FAIL: Expected 7 tools, got', tools === null || tools === void 0 ? void 0 : tools.length, '\n');
                        failed++;
                    }
                    return [3 /*break*/, 8];
                case 7:
                    error_2 = _t.sent();
                    console.log('✗ FAIL: List tools threw error:', error_2.message, '\n');
                    failed++;
                    return [3 /*break*/, 8];
                case 8:
                    // Test 3: Call Tool - list_files_in_vault
                    console.log('Test 3: Call Tool - list_files_in_vault');
                    _t.label = 9;
                case 9:
                    _t.trys.push([9, 11, , 12]);
                    callToolRequest = {
                        jsonrpc: '2.0',
                        method: mcp_types_1.MCPMethod.CallTool,
                        params: {
                            name: 'list_files_in_vault',
                            arguments: {}
                        },
                        id: 3
                    };
                    return [4 /*yield*/, mcpHandler.handleRequest(callToolRequest)];
                case 10:
                    response = _t.sent();
                    content = (_d = (_c = (_b = response.result) === null || _b === void 0 ? void 0 : _b.content) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.text;
                    if (content) {
                        files = JSON.parse(content);
                        if (Array.isArray(files) && files.length >= 2) {
                            console.log('✓ PASS: Listed', files.length, 'files');
                            console.log('  Files:', files.map(function (f) { return f.path; }).join(', '), '\n');
                            passed++;
                        }
                        else {
                            console.log('✗ FAIL: Expected array of files\n');
                            failed++;
                        }
                    }
                    else {
                        console.log('✗ FAIL: No content in response\n', response);
                        failed++;
                    }
                    return [3 /*break*/, 12];
                case 11:
                    error_3 = _t.sent();
                    console.log('✗ FAIL: Call tool threw error:', error_3.message, '\n');
                    failed++;
                    return [3 /*break*/, 12];
                case 12:
                    // Test 4: Call Tool - get_file_contents
                    console.log('Test 4: Call Tool - get_file_contents');
                    _t.label = 13;
                case 13:
                    _t.trys.push([13, 15, , 16]);
                    callToolRequest = {
                        jsonrpc: '2.0',
                        method: mcp_types_1.MCPMethod.CallTool,
                        params: {
                            name: 'get_file_contents',
                            arguments: { path: 'test.md' }
                        },
                        id: 4
                    };
                    return [4 /*yield*/, mcpHandler.handleRequest(callToolRequest)];
                case 14:
                    response = _t.sent();
                    content = (_g = (_f = (_e = response.result) === null || _e === void 0 ? void 0 : _e.content) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.text;
                    if (content && content.includes('# Test Note')) {
                        console.log('✓ PASS: Retrieved file content');
                        console.log('  Content preview:', content.substring(0, 50), '...\n');
                        passed++;
                    }
                    else {
                        console.log('✗ FAIL: Expected file content\n', response);
                        failed++;
                    }
                    return [3 /*break*/, 16];
                case 15:
                    error_4 = _t.sent();
                    console.log('✗ FAIL: Call tool threw error:', error_4.message, '\n');
                    failed++;
                    return [3 /*break*/, 16];
                case 16:
                    // Test 5: Call Tool - search
                    console.log('Test 5: Call Tool - search');
                    _t.label = 17;
                case 17:
                    _t.trys.push([17, 19, , 20]);
                    callToolRequest = {
                        jsonrpc: '2.0',
                        method: mcp_types_1.MCPMethod.CallTool,
                        params: {
                            name: 'search',
                            arguments: { query: 'test' }
                        },
                        id: 5
                    };
                    return [4 /*yield*/, mcpHandler.handleRequest(callToolRequest)];
                case 18:
                    response = _t.sent();
                    content = (_k = (_j = (_h = response.result) === null || _h === void 0 ? void 0 : _h.content) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.text;
                    if (content) {
                        results = JSON.parse(content);
                        if (Array.isArray(results) && results.length > 0) {
                            console.log('✓ PASS: Search found', results.length, 'results');
                            console.log('  Results:', results.map(function (r) { return "".concat(r.path, " (").concat(r.matches, " matches)"); }).join(', '), '\n');
                            passed++;
                        }
                        else {
                            console.log('✗ FAIL: Expected search results\n');
                            failed++;
                        }
                    }
                    else {
                        console.log('✗ FAIL: No content in response\n', response);
                        failed++;
                    }
                    return [3 /*break*/, 20];
                case 19:
                    error_5 = _t.sent();
                    console.log('✗ FAIL: Call tool threw error:', error_5.message, '\n');
                    failed++;
                    return [3 /*break*/, 20];
                case 20:
                    // Test 6: Call Tool - create_file
                    console.log('Test 6: Call Tool - create_file');
                    _t.label = 21;
                case 21:
                    _t.trys.push([21, 23, , 24]);
                    callToolRequest = {
                        jsonrpc: '2.0',
                        method: mcp_types_1.MCPMethod.CallTool,
                        params: {
                            name: 'create_file',
                            arguments: { path: 'new-file.md', content: '# New File\n\nCreated via MCP.' }
                        },
                        id: 6
                    };
                    return [4 /*yield*/, mcpHandler.handleRequest(callToolRequest)];
                case 22:
                    response = _t.sent();
                    content = (_o = (_m = (_l = response.result) === null || _l === void 0 ? void 0 : _l.content) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.text;
                    if (content && content.includes('created successfully')) {
                        console.log('✓ PASS: File created successfully');
                        console.log('  Message:', content, '\n');
                        passed++;
                    }
                    else {
                        console.log('✗ FAIL: Expected success message\n', response);
                        failed++;
                    }
                    return [3 /*break*/, 24];
                case 23:
                    error_6 = _t.sent();
                    console.log('✗ FAIL: Call tool threw error:', error_6.message, '\n');
                    failed++;
                    return [3 /*break*/, 24];
                case 24:
                    // Test 7: Call Tool - update_file
                    console.log('Test 7: Call Tool - update_file');
                    _t.label = 25;
                case 25:
                    _t.trys.push([25, 27, , 28]);
                    callToolRequest = {
                        jsonrpc: '2.0',
                        method: mcp_types_1.MCPMethod.CallTool,
                        params: {
                            name: 'update_file',
                            arguments: { path: 'new-file.md', content: '# Updated File\n\nModified via MCP.' }
                        },
                        id: 7
                    };
                    return [4 /*yield*/, mcpHandler.handleRequest(callToolRequest)];
                case 26:
                    response = _t.sent();
                    content = (_r = (_q = (_p = response.result) === null || _p === void 0 ? void 0 : _p.content) === null || _q === void 0 ? void 0 : _q[0]) === null || _r === void 0 ? void 0 : _r.text;
                    if (content && content.includes('updated successfully')) {
                        console.log('✓ PASS: File updated successfully');
                        console.log('  Message:', content, '\n');
                        passed++;
                    }
                    else {
                        console.log('✗ FAIL: Expected success message\n', response);
                        failed++;
                    }
                    return [3 /*break*/, 28];
                case 27:
                    error_7 = _t.sent();
                    console.log('✗ FAIL: Call tool threw error:', error_7.message, '\n');
                    failed++;
                    return [3 /*break*/, 28];
                case 28:
                    // Test 8: List Resources
                    console.log('Test 8: List Resources');
                    _t.label = 29;
                case 29:
                    _t.trys.push([29, 31, , 32]);
                    listResourcesRequest = {
                        jsonrpc: '2.0',
                        method: mcp_types_1.MCPMethod.ListResources,
                        id: 8
                    };
                    return [4 /*yield*/, mcpHandler.handleRequest(listResourcesRequest)];
                case 30:
                    response = _t.sent();
                    resources = (_s = response.result) === null || _s === void 0 ? void 0 : _s.resources;
                    if (resources && resources.length >= 2) {
                        console.log('✓ PASS: Found', resources.length, 'resources');
                        console.log('  Sample:', resources[0].name, '(', resources[0].uri, ')\n');
                        passed++;
                    }
                    else {
                        console.log('✗ FAIL: Expected at least 2 resources\n');
                        failed++;
                    }
                    return [3 /*break*/, 32];
                case 31:
                    error_8 = _t.sent();
                    console.log('✗ FAIL: List resources threw error:', error_8.message, '\n');
                    failed++;
                    return [3 /*break*/, 32];
                case 32:
                    // Test 9: Error Handling - Unknown Tool
                    console.log('Test 9: Error Handling - Unknown Tool');
                    _t.label = 33;
                case 33:
                    _t.trys.push([33, 35, , 36]);
                    callToolRequest = {
                        jsonrpc: '2.0',
                        method: mcp_types_1.MCPMethod.CallTool,
                        params: {
                            name: 'unknown_tool',
                            arguments: {}
                        },
                        id: 9
                    };
                    return [4 /*yield*/, mcpHandler.handleRequest(callToolRequest)];
                case 34:
                    response = _t.sent();
                    if (response.error) {
                        console.log('✓ PASS: Correctly returned error for unknown tool');
                        console.log('  Error:', response.error.message, '\n');
                        passed++;
                    }
                    else {
                        console.log('✗ FAIL: Expected error response\n', response);
                        failed++;
                    }
                    return [3 /*break*/, 36];
                case 35:
                    error_9 = _t.sent();
                    console.log('✗ FAIL: Should not throw error, should return error response\n');
                    failed++;
                    return [3 /*break*/, 36];
                case 36:
                    // Summary
                    console.log('=== Test Summary ===');
                    console.log("Total: ".concat(passed + failed, " | Passed: ").concat(passed, " | Failed: ").concat(failed));
                    console.log("Success Rate: ".concat(((passed / (passed + failed)) * 100).toFixed(1), "%\n"));
                    if (failed === 0) {
                        console.log('🎉 All tests passed! MCP integration is working correctly.');
                    }
                    else {
                        console.log('⚠️  Some tests failed. Please review the failures above.');
                    }
                    process.exit(failed > 0 ? 1 : 0);
                    return [2 /*return*/];
            }
        });
    });
}
// Run tests
runTests()["catch"](function (error) {
    console.error('Test suite failed:', error);
    process.exit(1);
});
