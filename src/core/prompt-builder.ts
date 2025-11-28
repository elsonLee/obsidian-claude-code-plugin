import * as path from 'path';
import { ClaudeCodeRequest } from './claude-code-runner';

/**
 * Builds prompts for Claude Code with context and instructions
 */
export class PromptBuilder {
    /**
     * Build a complete prompt for Claude Code
     *
     * @param request The request containing note content and user prompt
     * @param sessionDir Session directory path
     * @param customSystemPrompt Optional custom system prompt
     * @param allowVaultAccess Whether vault access is enabled
     * @param bypassPermissions Whether to bypass permission requests
     * @returns Complete prompt string
     */
    static buildPrompt(
        request: ClaudeCodeRequest,
        sessionDir: string,
        customSystemPrompt?: string,
        allowVaultAccess?: boolean,
        bypassPermissions?: boolean
    ): string {
        let prompt = '';

        // Add custom system prompt if provided
        if (customSystemPrompt) {
            prompt += customSystemPrompt + '\n\n';
        }

        // Check if conversational mode
        if (request.conversationalMode) {
            prompt += this.buildConversationalModeInstructions();
            prompt += `Current note content (for reference only - DO NOT MODIFY):\n---\n${request.noteContent}\n---\n\n`;
            prompt += `USER QUESTION: ${request.userPrompt}\n\n`;
            return prompt;
        }

        // Add permission mode instructions at the top
        prompt += this.buildPermissionModeInstructions(bypassPermissions);

        // Add context-aware instructions
        prompt += this.buildContextInstructions(request, sessionDir, allowVaultAccess);

        // Tell Claude about the note.md file it should edit
        prompt += `EDITING INSTRUCTIONS:\n`;
        prompt += `- The note content is in: ${path.join(sessionDir, 'note.md')}\n`;
        prompt += `- Use the Edit or Write tool to modify the file\n`;
        prompt += `- After you make changes, confirm what you did\n\n`;

        prompt += `USER REQUEST: ${request.userPrompt}\n\n`;

        return prompt;
    }

    /**
     * Build conversational mode instructions
     */
    private static buildConversationalModeInstructions(): string {
        return `💬 CONVERSATIONAL MODE\n` +
            `You are in conversational mode. This means:\n` +
            `- DO NOT use file editing tools (Write, Edit, NotebookEdit)\n` +
            `- DO NOT modify any files\n` +
            `- You can use Read, Grep, Bash, WebSearch, and other read-only tools\n` +
            `- Focus on answering the user's question or providing information\n` +
            `- The note content is provided for context only\n` +
            `- Respond directly in your message - no file modifications needed\n\n`;
    }

    /**
     * Build permission mode instructions
     */
    private static buildPermissionModeInstructions(bypassPermissions?: boolean): string {
        if (bypassPermissions) {
            return `🔓 PERMISSION MODE: AUTONOMOUS\n` +
                `You have FULL AUTONOMY to use ALL tools without asking for permission.\n` +
                `- You can read, write, edit, and execute any files or commands\n` +
                `- You can use web search, bash commands, and any other tools freely\n` +
                `- You do NOT need to ask for user approval before taking actions\n` +
                `- Proceed directly with your tasks using whatever tools are necessary\n\n`;
        } else {
            return `🔒 PERMISSION MODE: INTERACTIVE\n` +
                `- When you need permission (according your system prompt and configuration), your response MUST include the text "REQUIRED_APPROVAL"\n`;
        }
    }

    /**
     * Build context instructions
     */
    private static buildContextInstructions(
        request: ClaudeCodeRequest,
        sessionDir: string,
        allowVaultAccess?: boolean
    ): string {
        let instructions = `You are an intelligent assistant helping to edit a markdown note in Obsidian vault. Your responses must be on the language of the user prompt\n\n`;

        instructions += `CURRENT NOTE INFORMATION:\n`;
        instructions += `- File path: ${request.notePath}\n`;
        instructions += `- File name: ${path.basename(request.notePath)}\n`;
        instructions += `- Working directory: ${sessionDir}\n`;
        instructions += `- Note file in session: note.md (local copy)\n`;

        if (allowVaultAccess && request.vaultPath) {
            instructions += `- Obsidian vault root: ${request.vaultPath}\n`;
            instructions += `- You can access ALL vault files using absolute paths: ${request.vaultPath}/filename.md\n`;
            instructions += `- To search vault files, use tools with path: ${request.vaultPath}\n`;
        }

        instructions += `\n`;

        return instructions;
    }

    /**
     * Build agent mode instructions
     */
    private static buildAgentInstructions(): string {
        return `You are a powerful AI assistant with access to tools. USE THEM ACTIVELY.\n\n` +
            `IMPORTANT - INTERPRET USER INTENT:\n` +
            `1. If the user is asking a QUESTION or requesting ANALYSIS, simply respond conversationally.\n` +
            `2. If the user wants to EDIT/MODIFY the note, use the Edit or Write tool to modify note.md, then explain what you changed.\n\n`;
    }

}
