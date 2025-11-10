import { spawn, ChildProcess } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Configuration for spawning Claude Code process
 */
export interface SpawnConfig {
    claudePath: string;
    args: string[];
    workingDir: string;
}

/**
 * Handles spawning and managing Claude Code process
 */
export class ProcessSpawner {
    /**
     * Spawn Claude Code process with enhanced environment
     *
     * @param config Spawn configuration
     * @returns Child process
     */
    static spawn(config: SpawnConfig): ChildProcess {
        // Build enhanced PATH with common tool locations
        const envPath = process.env.PATH || '';
        const pathsToAdd = [
            `${process.env.HOME}/.nvm/versions/node/v20.18.2/bin`,
            `${process.env.HOME}/.bun/bin`,
            '/usr/local/bin',
            '/usr/bin',
            '/bin'
        ].filter(p => fs.existsSync(p));

        const enhancedPath = [...new Set([...pathsToAdd, ...envPath.split(':')])].join(':');

        const options = {
            cwd: config.workingDir,
            env: {
                ...process.env,
                PATH: enhancedPath
            },
            shell: false
        };

        // Claude is a Node.js script, run it with node explicitly
        const nodePath = `${process.env.HOME}/.nvm/versions/node/v20.18.2/bin/node`;

        // Resolve claudePath to absolute path
        // If it starts with ~, expand to home directory
        // If it's not absolute, try to resolve it via PATH or make it absolute
        let resolvedClaudePath = config.claudePath;
        if (resolvedClaudePath.startsWith('~')) {
            resolvedClaudePath = resolvedClaudePath.replace('~', process.env.HOME || '');
        }

        // If it's not an absolute path, try to find it in PATH
        if (!path.isAbsolute(resolvedClaudePath)) {
            // Check if it's a command name (like "claude")
            // Try to find it in PATH
            const pathDirs = enhancedPath.split(':');
            let found = false;

            for (const dir of pathDirs) {
                const fullPath = path.join(dir, resolvedClaudePath);
                if (fs.existsSync(fullPath)) {
                    resolvedClaudePath = fullPath;
                    found = true;
                    break;
                }
            }

            // If not found in PATH and not absolute, it might be in the current directory
            // But that's unlikely for a CLI tool, so warn about it
            if (!found) {
                console.warn(`Warning: Could not find '${config.claudePath}' in PATH. Using as-is: ${resolvedClaudePath}`);
            }
        }

        const finalArgs = [resolvedClaudePath, ...config.args];

        return spawn(nodePath, finalArgs, options);
    }

    /**
     * Send stdin input to process
     *
     * @param process Child process
     * @param prompt Prompt to send
     */
    static sendInput(process: ChildProcess, prompt: string): void {
        if (process.stdin) {
            const inputMessage = {
                type: 'user',
                message: {
                    role: 'user',
                    content: prompt
                }
            };

            const jsonInput = JSON.stringify(inputMessage) + '\n';
            process.stdin.write(jsonInput);
            process.stdin.end();
        }
    }
}
