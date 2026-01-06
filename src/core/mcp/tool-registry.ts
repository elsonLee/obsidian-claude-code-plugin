/**
 * Tool Registry
 * Manages MCP tool registration and execution
 */

import { Tool, ToolCallResult } from './mcp-types';
import type { ToolExecutor } from './mcp-handler';

/**
 * Registered tool entry
 */
interface ToolEntry {
    tool: Tool;
    executor: ToolExecutor;
}

/**
 * Tool Registry implementation
 */
export class ToolRegistry {
    private tools: Map<string, ToolEntry> = new Map();

    /**
     * Register a tool
     */
    register(tool: Tool, executor: ToolExecutor): void {
        if (this.tools.has(tool.name)) {
            throw new Error(`Tool "${tool.name}" is already registered`);
        }

        this.tools.set(tool.name, { tool, executor });
    }

    /**
     * Unregister a tool
     */
    unregister(name: string): boolean {
        return this.tools.delete(name);
    }

    /**
     * Check if a tool is registered
     */
    has(name: string): boolean {
        return this.tools.has(name);
    }

    /**
     * Get a tool
     */
    get(name: string): Tool | undefined {
        const entry = this.tools.get(name);
        return entry ? entry.tool : undefined;
    }

    /**
     * List all registered tools
     */
    list(): Tool[] {
        return Array.from(this.tools.values()).map(entry => entry.tool);
    }

    /**
     * Execute a tool
     */
    async execute(name: string, args: any): Promise<ToolCallResult> {
        const entry = this.tools.get(name);

        if (!entry) {
            throw new Error(`Tool "${name}" not found`);
        }

        try {
            return await entry.executor(args);
        } catch (error) {
            return {
                content: [{
                    type: 'text',
                    text: error instanceof Error ? error.message : 'Unknown error'
                }],
                isError: true
            };
        }
    }

    /**
     * Clear all tools
     */
    clear(): void {
        this.tools.clear();
    }

    /**
     * Get the number of registered tools
     */
    size(): number {
        return this.tools.size;
    }
}
