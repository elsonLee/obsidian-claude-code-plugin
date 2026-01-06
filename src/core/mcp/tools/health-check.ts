/**
 * Health Check Tool
 * Simple tool for testing MCP functionality
 */

import { Tool } from '../mcp-types';

export const healthCheckTool: Tool = {
    name: 'health_check',
    description: 'Check if the MCP server is running and responsive',
    inputSchema: {
        type: 'object',
        properties: {},
        required: []
    }
};

export interface HealthCheckResult {
    status: string;
    timestamp: string;
    message: string;
}

export async function healthCheckExecutor(): Promise<HealthCheckResult> {
    return {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        message: 'MCP server is running'
    };
}
