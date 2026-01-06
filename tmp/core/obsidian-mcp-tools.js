"use strict";
/**
 * Obsidian MCP Tools Implementation
 *
 * Implements MCP tools for Obsidian vault access
 * Compatible with MCP protocol specification
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
exports.ObsidianMCPTools = void 0;
var obsidian_1 = require("obsidian");
var ObsidianMCPTools = /** @class */ (function () {
    function ObsidianMCPTools(app) {
        this.app = app;
        // Tool definitions and implementations
        /**
         * List all files in the vault root
         */
        this.listFilesInVaultTool = {
            name: 'list_files_in_vault',
            description: 'Lists all files and directories in the root directory of the Obsidian vault',
            inputSchema: {
                type: 'object',
                properties: {},
                required: []
            }
        };
        /**
         * List files in a specific directory
         */
        this.listFilesInDirTool = {
            name: 'list_files_in_dir',
            description: 'Lists all files and directories in a specific Obsidian directory',
            inputSchema: {
                type: 'object',
                properties: {
                    path: {
                        type: 'string',
                        description: 'Directory path relative to vault root (e.g., "Projects" or "Projects/Active")'
                    }
                },
                required: ['path']
            }
        };
        /**
         * Get file contents
         */
        this.getFileContentsTool = {
            name: 'get_file_contents',
            description: 'Return the content of a single file in the vault',
            inputSchema: {
                type: 'object',
                properties: {
                    path: {
                        type: 'string',
                        description: 'File path relative to vault root (e.g., "Projects/MyNote.md")'
                    }
                },
                required: ['path']
            }
        };
        /**
         * Search files
         */
        this.searchTool = {
            name: 'search',
            description: 'Search for documents matching a specified text query across all files in the vault',
            inputSchema: {
                type: 'object',
                properties: {
                    query: {
                        type: 'string',
                        description: 'Text to search for'
                    }
                },
                required: ['query']
            }
        };
        /**
         * Create a new file
         */
        this.createFileTool = {
            name: 'create_file',
            description: 'Create a new file in the vault with the given content',
            inputSchema: {
                type: 'object',
                properties: {
                    path: {
                        type: 'string',
                        description: 'File path where the file should be created (e.g., "Projects/NewNote.md")'
                    },
                    content: {
                        type: 'string',
                        description: 'Content to write to the file'
                    }
                },
                required: ['path', 'content']
            }
        };
        /**
         * Update an existing file
         */
        this.updateFileTool = {
            name: 'update_file',
            description: 'Update an existing file with new content',
            inputSchema: {
                type: 'object',
                properties: {
                    path: {
                        type: 'string',
                        description: 'File path to update (e.g., "Projects/MyNote.md")'
                    },
                    content: {
                        type: 'string',
                        description: 'New content for the file'
                    }
                },
                required: ['path', 'content']
            }
        };
        /**
         * Delete a file
         */
        this.deleteFileTool = {
            name: 'delete_file',
            description: 'Delete a file or directory from the vault',
            inputSchema: {
                type: 'object',
                properties: {
                    path: {
                        type: 'string',
                        description: 'File or directory path to delete'
                    }
                },
                required: ['path']
            }
        };
    }
    /**
     * Get all available tools
     */
    ObsidianMCPTools.prototype.getTools = function () {
        return [
            this.listFilesInVaultTool,
            this.listFilesInDirTool,
            this.getFileContentsTool,
            this.searchTool,
            this.createFileTool,
            this.updateFileTool,
            this.deleteFileTool,
        ];
    };
    /**
     * Execute a tool call
     */
    ObsidianMCPTools.prototype.callTool = function (name, args) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 17, , 18]);
                        _a = name;
                        switch (_a) {
                            case 'list_files_in_vault': return [3 /*break*/, 1];
                            case 'list_files_in_dir': return [3 /*break*/, 3];
                            case 'get_file_contents': return [3 /*break*/, 5];
                            case 'search': return [3 /*break*/, 7];
                            case 'create_file': return [3 /*break*/, 9];
                            case 'update_file': return [3 /*break*/, 11];
                            case 'delete_file': return [3 /*break*/, 13];
                        }
                        return [3 /*break*/, 15];
                    case 1: return [4 /*yield*/, this.listFilesInVault()];
                    case 2: return [2 /*return*/, _b.sent()];
                    case 3: return [4 /*yield*/, this.listFilesInDir(args)];
                    case 4: return [2 /*return*/, _b.sent()];
                    case 5: return [4 /*yield*/, this.getFileContents(args)];
                    case 6: return [2 /*return*/, _b.sent()];
                    case 7: return [4 /*yield*/, this.search(args)];
                    case 8: return [2 /*return*/, _b.sent()];
                    case 9: return [4 /*yield*/, this.createFile(args)];
                    case 10: return [2 /*return*/, _b.sent()];
                    case 11: return [4 /*yield*/, this.updateFile(args)];
                    case 12: return [2 /*return*/, _b.sent()];
                    case 13: return [4 /*yield*/, this.deleteFile(args)];
                    case 14: return [2 /*return*/, _b.sent()];
                    case 15: throw new Error("Unknown tool: ".concat(name));
                    case 16: return [3 /*break*/, 18];
                    case 17:
                        error_1 = _b.sent();
                        return [2 /*return*/, {
                                content: [{
                                        type: 'text',
                                        text: "Error: ".concat(error_1.message)
                                    }],
                                isError: true
                            }];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianMCPTools.prototype.listFilesInVault = function () {
        return __awaiter(this, void 0, void 0, function () {
            var files, fileList;
            return __generator(this, function (_a) {
                files = this.app.vault.getMarkdownFiles();
                fileList = files.map(function (f) { return ({
                    path: f.path,
                    name: f.basename,
                    extension: f.extension
                }); });
                return [2 /*return*/, {
                        content: [{
                                type: 'text',
                                text: JSON.stringify(fileList, null, 2)
                            }]
                    }];
            });
        });
    };
    ObsidianMCPTools.prototype.listFilesInDir = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var path, allFiles, dirFiles, fileList;
            return __generator(this, function (_a) {
                path = args.path;
                allFiles = this.app.vault.getFiles();
                dirFiles = allFiles.filter(function (f) { return f.path.startsWith(path); });
                fileList = dirFiles.map(function (f) { return ({
                    path: f.path,
                    name: f.basename,
                    extension: f.extension
                }); });
                return [2 /*return*/, {
                        content: [{
                                type: 'text',
                                text: JSON.stringify(fileList, null, 2)
                            }]
                    }];
            });
        });
    };
    ObsidianMCPTools.prototype.getFileContents = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var path, file, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = args.path;
                        file = this.app.vault.getAbstractFileByPath(path);
                        if (!file) {
                            throw new Error("File not found: ".concat(path));
                        }
                        if (!(file instanceof obsidian_1.TFile)) {
                            throw new Error("Path is not a file: ".concat(path));
                        }
                        return [4 /*yield*/, this.app.vault.read(file)];
                    case 1:
                        content = _a.sent();
                        return [2 /*return*/, {
                                content: [{
                                        type: 'text',
                                        text: content
                                    }]
                            }];
                }
            });
        });
    };
    ObsidianMCPTools.prototype.search = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var query, files, results, _i, files_1, file, content, matches, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = args.query;
                        files = this.app.vault.getMarkdownFiles();
                        results = [];
                        _i = 0, files_1 = files;
                        _a.label = 1;
                    case 1:
                        if (!(_i < files_1.length)) return [3 /*break*/, 6];
                        file = files_1[_i];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.app.vault.read(file)];
                    case 3:
                        content = _a.sent();
                        matches = (content.match(new RegExp(query, 'gi')) || []).length;
                        if (matches > 0) {
                            results.push({
                                path: file.path,
                                matches: matches
                            });
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        // Skip files that can't be read
                        console.warn("Failed to read ".concat(file.path, ":"), error_2);
                        return [3 /*break*/, 5];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, {
                            content: [{
                                    type: 'text',
                                    text: JSON.stringify(results, null, 2)
                                }]
                        }];
                }
            });
        });
    };
    ObsidianMCPTools.prototype.createFile = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var path, content, existingFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = args.path, content = args.content;
                        existingFile = this.app.vault.getAbstractFileByPath(path);
                        if (existingFile) {
                            throw new Error("File already exists: ".concat(path));
                        }
                        return [4 /*yield*/, this.app.vault.create(path, content)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                content: [{
                                        type: 'text',
                                        text: "File created successfully: ".concat(path)
                                    }]
                            }];
                }
            });
        });
    };
    ObsidianMCPTools.prototype.updateFile = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var path, content, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = args.path, content = args.content;
                        file = this.app.vault.getAbstractFileByPath(path);
                        if (!file) {
                            throw new Error("File not found: ".concat(path));
                        }
                        if (!(file instanceof obsidian_1.TFile)) {
                            throw new Error("Path is not a file: ".concat(path));
                        }
                        return [4 /*yield*/, this.app.vault.modify(file, content)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                content: [{
                                        type: 'text',
                                        text: "File updated successfully: ".concat(path)
                                    }]
                            }];
                }
            });
        });
    };
    ObsidianMCPTools.prototype.deleteFile = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var path, file;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = args.path;
                        file = this.app.vault.getAbstractFileByPath(path);
                        if (!file) {
                            throw new Error("File not found: ".concat(path));
                        }
                        return [4 /*yield*/, this.app.vault["delete"](file)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, {
                                content: [{
                                        type: 'text',
                                        text: "Deleted successfully: ".concat(path)
                                    }]
                            }];
                }
            });
        });
    };
    return ObsidianMCPTools;
}());
exports.ObsidianMCPTools = ObsidianMCPTools;
