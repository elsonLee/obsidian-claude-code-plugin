/**
 * MCP Integration Test
 *
 * Tests the complete MCP integration flow:
 * WebSocket Client -> MCP Handler -> Obsidian Tools -> Response
 */

import { MCPHandler } from './core/mcp-handler';
import { MCPMethod } from './core/mcp-types';

// Mock Obsidian App
class MockVault {
    private files = new Map([
        ['test.md', { path: 'test.md', basename: 'test', extension: 'md', content: '# Test Note\n\nThis is a test note.' }],
        ['projects/active.md', { path: 'projects/active.md', basename: 'active', extension: 'md', content: '# Active Project\n\nSome content here.' }],
    ]);

    getMarkdownFiles() {
        return Array.from(this.files.values()).map((f: any) => ({
            path: f.path as string,
            basename: f.basename as string,
            extension: f.extension as string
        }));
    }

    getFiles() {
        return this.getMarkdownFiles();
    }

    getAbstractFileByPath(path: string) {
        return this.files.get(path);
    }

    async read(file: any) {
        const fileData = this.files.get(file.path);
        return fileData?.content || '';
    }

    async create(path: string, content: string) {
        this.files.set(path, { path, basename: path.replace('.md', ''), extension: 'md', content });
    }

    async modify(file: any, content: string) {
        if (this.files.has(file.path)) {
            const existing = this.files.get(file.path);
            this.files.set(file.path, { ...existing, content } as any);
        }
    }

    async delete(file: any) {
        this.files.delete(file.path);
    }
}

class MockApp {
    vault = new MockVault();
}

// Test Cases
async function runTests() {
    console.log('=== MCP Integration Tests ===\n');

    const app = new MockApp() as any;
    const mcpHandler = new MCPHandler(app);

    let passed = 0;
    let failed = 0;

    // Test 1: Initialize
    console.log('Test 1: MCP Initialize');
    try {
        const initRequest = {
            jsonrpc: '2.0' as const,
            method: MCPMethod.Initialize,
            params: { protocolVersion: '2025-11-25', capabilities: {} },
            id: 1
        };

        const response = await mcpHandler.handleRequest(initRequest as any);
        if (response.result && !response.error) {
            console.log('✓ PASS: Initialize successful\n');
            passed++;
        } else {
            console.log('✗ FAIL: Initialize failed\n', response);
            failed++;
        }
    } catch (error) {
        console.log('✗ FAIL: Initialize threw error:', error.message, '\n');
        failed++;
    }

    // Test 2: List Tools
    console.log('Test 2: List Tools');
    try {
        const listToolsRequest = {
            jsonrpc: '2.0' as const,
            method: MCPMethod.ListTools,
            id: 2
        };

        const response = await mcpHandler.handleRequest(listToolsRequest as any);
        const tools = response.result?.tools;

        if (tools && tools.length === 7) {
            const toolNames = tools.map((t: any) => t.name).sort();
            console.log('✓ PASS: Found 7 tools:', toolNames.join(', '), '\n');
            passed++;
        } else {
            console.log('✗ FAIL: Expected 7 tools, got', tools?.length, '\n');
            failed++;
        }
    } catch (error) {
        console.log('✗ FAIL: List tools threw error:', error.message, '\n');
        failed++;
    }

    // Test 3: Call Tool - list_files_in_vault
    console.log('Test 3: Call Tool - list_files_in_vault');
    try {
        const callToolRequest = {
            jsonrpc: '2.0' as const,
            method: MCPMethod.CallTool,
            params: {
                name: 'list_files_in_vault',
                arguments: {}
            },
            id: 3
        };

        const response = await mcpHandler.handleRequest(callToolRequest as any);
        const content = response.result?.content?.[0]?.text;

        if (content) {
            const files = JSON.parse(content);
            if (Array.isArray(files) && files.length >= 2) {
                console.log('✓ PASS: Listed', files.length, 'files');
                console.log('  Files:', files.map((f: any) => f.path).join(', '), '\n');
                passed++;
            } else {
                console.log('✗ FAIL: Expected array of files\n');
                failed++;
            }
        } else {
            console.log('✗ FAIL: No content in response\n', response);
            failed++;
        }
    } catch (error) {
        console.log('✗ FAIL: Call tool threw error:', error.message, '\n');
        failed++;
    }

    // Test 4: Call Tool - get_file_contents
    console.log('Test 4: Call Tool - get_file_contents');
    try {
        const callToolRequest = {
            jsonrpc: '2.0' as const,
            method: MCPMethod.CallTool,
            params: {
                name: 'get_file_contents',
                arguments: { path: 'test.md' }
            },
            id: 4
        };

        const response = await mcpHandler.handleRequest(callToolRequest as any);
        const content = response.result?.content?.[0]?.text;

        if (content && content.includes('# Test Note')) {
            console.log('✓ PASS: Retrieved file content');
            console.log('  Content preview:', content.substring(0, 50), '...\n');
            passed++;
        } else {
            console.log('✗ FAIL: Expected file content\n', response);
            failed++;
        }
    } catch (error) {
        console.log('✗ FAIL: Call tool threw error:', error.message, '\n');
        failed++;
    }

    // Test 5: Call Tool - search
    console.log('Test 5: Call Tool - search');
    try {
        const callToolRequest = {
            jsonrpc: '2.0' as const,
            method: MCPMethod.CallTool,
            params: {
                name: 'search',
                arguments: { query: 'test' }
            },
            id: 5
        };

        const response = await mcpHandler.handleRequest(callToolRequest as any);
        const content = response.result?.content?.[0]?.text;

        if (content) {
            const results = JSON.parse(content);
            if (Array.isArray(results) && results.length > 0) {
                console.log('✓ PASS: Search found', results.length, 'results');
                console.log('  Results:', results.map((r: any) => `${r.path} (${r.matches} matches)`).join(', '), '\n');
                passed++;
            } else {
                console.log('✗ FAIL: Expected search results\n');
                failed++;
            }
        } else {
            console.log('✗ FAIL: No content in response\n', response);
            failed++;
        }
    } catch (error) {
        console.log('✗ FAIL: Call tool threw error:', error.message, '\n');
        failed++;
    }

    // Test 6: Call Tool - create_file
    console.log('Test 6: Call Tool - create_file');
    try {
        const callToolRequest = {
            jsonrpc: '2.0' as const,
            method: MCPMethod.CallTool,
            params: {
                name: 'create_file',
                arguments: { path: 'new-file.md', content: '# New File\n\nCreated via MCP.' }
            },
            id: 6
        };

        const response = await mcpHandler.handleRequest(callToolRequest as any);
        const content = response.result?.content?.[0]?.text;

        if (content && content.includes('created successfully')) {
            console.log('✓ PASS: File created successfully');
            console.log('  Message:', content, '\n');
            passed++;
        } else {
            console.log('✗ FAIL: Expected success message\n', response);
            failed++;
        }
    } catch (error) {
        console.log('✗ FAIL: Call tool threw error:', error.message, '\n');
        failed++;
    }

    // Test 7: Call Tool - update_file
    console.log('Test 7: Call Tool - update_file');
    try {
        const callToolRequest = {
            jsonrpc: '2.0' as const,
            method: MCPMethod.CallTool,
            params: {
                name: 'update_file',
                arguments: { path: 'new-file.md', content: '# Updated File\n\nModified via MCP.' }
            },
            id: 7
        };

        const response = await mcpHandler.handleRequest(callToolRequest as any);
        const content = response.result?.content?.[0]?.text;

        if (content && content.includes('updated successfully')) {
            console.log('✓ PASS: File updated successfully');
            console.log('  Message:', content, '\n');
            passed++;
        } else {
            console.log('✗ FAIL: Expected success message\n', response);
            failed++;
        }
    } catch (error) {
        console.log('✗ FAIL: Call tool threw error:', error.message, '\n');
        failed++;
    }

    // Test 8: List Resources
    console.log('Test 8: List Resources');
    try {
        const listResourcesRequest = {
            jsonrpc: '2.0' as const,
            method: MCPMethod.ListResources,
            id: 8
        };

        const response = await mcpHandler.handleRequest(listResourcesRequest as any);
        const resources = response.result?.resources;

        if (resources && resources.length >= 2) {
            console.log('✓ PASS: Found', resources.length, 'resources');
            console.log('  Sample:', resources[0].name, '(', resources[0].uri, ')\n');
            passed++;
        } else {
            console.log('✗ FAIL: Expected at least 2 resources\n');
            failed++;
        }
    } catch (error) {
        console.log('✗ FAIL: List resources threw error:', error.message, '\n');
        failed++;
    }

    // Test 9: Error Handling - Unknown Tool
    console.log('Test 9: Error Handling - Unknown Tool');
    try {
        const callToolRequest = {
            jsonrpc: '2.0' as const,
            method: MCPMethod.CallTool,
            params: {
                name: 'unknown_tool',
                arguments: {}
            },
            id: 9
        };

        const response = await mcpHandler.handleRequest(callToolRequest as any);

        if (response.error) {
            console.log('✓ PASS: Correctly returned error for unknown tool');
            console.log('  Error:', response.error.message, '\n');
            passed++;
        } else {
            console.log('✗ FAIL: Expected error response\n', response);
            failed++;
        }
    } catch (error) {
        console.log('✗ FAIL: Should not throw error, should return error response\n');
        failed++;
    }

    // Summary
    console.log('=== Test Summary ===');
    console.log(`Total: ${passed + failed} | Passed: ${passed} | Failed: ${failed}`);
    console.log(`Success Rate: ${((passed / (passed + failed)) * 100).toFixed(1)}%\n`);

    if (failed === 0) {
        console.log('🎉 All tests passed! MCP integration is working correctly.');
    } else {
        console.log('⚠️  Some tests failed. Please review the failures above.');
    }

    process.exit(failed > 0 ? 1 : 0);
}

// Run tests
runTests().catch(error => {
    console.error('Test suite failed:', error);
    process.exit(1);
});
