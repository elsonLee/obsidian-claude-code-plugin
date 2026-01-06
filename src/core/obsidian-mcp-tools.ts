/**
 * Obsidian MCP Tools Implementation
 *
 * Implements MCP tools for Obsidian vault access
 * Compatible with MCP protocol specification
 */

import { App, TFile } from 'obsidian';
import { Tool, ToolCallRequest, ToolCallResult, Resource } from './mcp-types';

export class ObsidianMCPTools {
    constructor(private app: App) {}

    /**
     * Get all available tools
     */
    getTools(): Tool[] {
        return [
            this.listFilesInVaultTool,
            this.listFilesInDirTool,
            this.getFileContentsTool,
            this.searchTool,
            this.createFileTool,
            this.updateFileTool,
            this.deleteFileTool,
        ];
    }

    /**
     * Execute a tool call
     */
    async callTool(name: string, args: any): Promise<ToolCallResult> {
        try {
            switch (name) {
                case 'list_files_in_vault':
                    return await this.listFilesInVault();
                case 'list_files_in_dir':
                    return await this.listFilesInDir(args as { path: string });
                case 'get_file_contents':
                    return await this.getFileContents(args as { path: string });
                case 'search':
                    return await this.search(args as { query: string });
                case 'create_file':
                    return await this.createFile(args as { path: string; content: string });
                case 'update_file':
                    return await this.updateFile(args as { path: string; content: string });
                case 'delete_file':
                    return await this.deleteFile(args as { path: string });
                default:
                    throw new Error(`Unknown tool: ${name}`);
            }
        } catch (error) {
            return {
                content: [{
                    type: 'text',
                    text: `Error: ${error.message}`
                }],
                isError: true
            };
        }
    }

    // Tool definitions and implementations

    /**
     * List all files in the vault root
     */
    private listFilesInVaultTool: Tool = {
        name: 'list_files_in_vault',
        description: 'Lists all files and directories in the root directory of the Obsidian vault',
        inputSchema: {
            type: 'object',
            properties: {},
            required: []
        }
    };

    private async listFilesInVault(): Promise<ToolCallResult> {
        const files = this.app.vault.getMarkdownFiles();
        const fileList = files.map(f => ({
            path: f.path,
            name: f.basename,
            extension: f.extension
        }));

        return {
            content: [{
                type: 'text',
                text: JSON.stringify(fileList, null, 2)
            }]
        };
    }

    /**
     * List files in a specific directory
     */
    private listFilesInDirTool: Tool = {
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

    private async listFilesInDir(args: { path: string }): Promise<ToolCallResult> {
        const { path } = args;

        // List all files and filter by directory prefix
        const allFiles = this.app.vault.getFiles();
        const dirFiles = allFiles.filter(f => f.path.startsWith(path));

        const fileList = dirFiles.map(f => ({
            path: f.path,
            name: f.basename,
            extension: f.extension
        }));

        return {
            content: [{
                type: 'text',
                text: JSON.stringify(fileList, null, 2)
            }]
        };
    }

    /**
     * Get file contents
     */
    private getFileContentsTool: Tool = {
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

    private async getFileContents(args: { path: string }): Promise<ToolCallResult> {
        const { path } = args;
        const file = this.app.vault.getAbstractFileByPath(path);

        if (!file) {
            throw new Error(`File not found: ${path}`);
        }

        if (!(file instanceof TFile)) {
            throw new Error(`Path is not a file: ${path}`);
        }

        const content = await this.app.vault.read(file);

        return {
            content: [{
                type: 'text',
                text: content
            }]
        };
    }

    /**
     * Search files
     */
    private searchTool: Tool = {
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

    private async search(args: { query: string }): Promise<ToolCallResult> {
        const { query } = args;

        // Simple search implementation
        const files = this.app.vault.getMarkdownFiles();
        const results: Array<{ path: string; matches: number }> = [];

        for (const file of files) {
            try {
                const content = await this.app.vault.read(file);
                const matches = (content.match(new RegExp(query, 'gi')) || []).length;

                if (matches > 0) {
                    results.push({
                        path: file.path,
                        matches
                    });
                }
            } catch (error) {
                // Skip files that can't be read
                console.warn(`Failed to read ${file.path}:`, error);
            }
        }

        return {
            content: [{
                type: 'text',
                text: JSON.stringify(results, null, 2)
            }]
        };
    }

    /**
     * Create a new file
     */
    private createFileTool: Tool = {
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

    private async createFile(args: { path: string; content: string }): Promise<ToolCallResult> {
        const { path, content } = args;

        const existingFile = this.app.vault.getAbstractFileByPath(path);
        if (existingFile) {
            throw new Error(`File already exists: ${path}`);
        }

        await this.app.vault.create(path, content);

        return {
            content: [{
                type: 'text',
                text: `File created successfully: ${path}`
            }]
        };
    }

    /**
     * Update an existing file
     */
    private updateFileTool: Tool = {
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

    private async updateFile(args: { path: string; content: string }): Promise<ToolCallResult> {
        const { path, content } = args;

        const file = this.app.vault.getAbstractFileByPath(path);
        if (!file) {
            throw new Error(`File not found: ${path}`);
        }

        if (!(file instanceof TFile)) {
            throw new Error(`Path is not a file: ${path}`);
        }

        await this.app.vault.modify(file, content);

        return {
            content: [{
                type: 'text',
                text: `File updated successfully: ${path}`
            }]
        };
    }

    /**
     * Delete a file
     */
    private deleteFileTool: Tool = {
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

    private async deleteFile(args: { path: string }): Promise<ToolCallResult> {
        const { path } = args;

        const file = this.app.vault.getAbstractFileByPath(path);
        if (!file) {
            throw new Error(`File not found: ${path}`);
        }

        await this.app.vault.delete(file);

        return {
            content: [{
                type: 'text',
                text: `Deleted successfully: ${path}`
            }]
        };
    }
}
