import { ClaudeCodeResponse } from './claude-code-runner';
import { ResponseContentExtractor } from './streaming/response-content-extractor';

/**
 * Parsed stream output from Claude Code
 */
export interface ParsedOutput {
    assistantText: string;
    tokenUsage?: {
        inputTokens?: number;
        outputTokens?: number;
        totalTokens?: number;
    };
}

/**
 * Parses Claude Code output and builds responses
 */
export class ResponseParser {
    /**
     * Parse JSON output lines from Claude Code
     *
     * @param outputLines Array of JSON output lines
     * @returns Parsed output with assistant text and token usage
     */
    static parseOutput(outputLines: string[]): ParsedOutput {
        let assistantText = '';
        let tokenUsage: any = undefined;

        for (const line of outputLines) {
            try {
                const event = JSON.parse(line);

                // Collect text from streaming events (real-time deltas)
                if (event.type === 'stream_event') {
                    if (event.event_type === 'content_block_delta') {
                        if (event.delta?.type === 'text_delta' && event.delta.text) {
                            assistantText += event.delta.text;
                        }
                    }
                }

                // Also collect from complete assistant messages (fallback)
                if (event.type === 'assistant') {
                    if (event.message?.content) {
                        for (const block of event.message.content) {
                            if (block.type === 'text') {
                                assistantText += block.text + '\n';
                            }
                        }
                    }
                }

                // Get token usage from result event
                if (event.type === 'result') {
                    if (event.usage) {
                        tokenUsage = {
                            inputTokens: event.usage.input_tokens || 0,
                            outputTokens: event.usage.output_tokens || 0,
                            totalTokens: (event.usage.input_tokens || 0) + (event.usage.output_tokens || 0)
                        };
                    }
                }
            } catch (e) {
                // Skip invalid JSON lines
            }
        }

        return {
            assistantText: assistantText.trim(),
            tokenUsage
        };
    }

    /**
     * Build error response
     *
     * @param error Error message
     * @param outputLines Output lines (if any)
     * @returns Error response
     */
    static buildErrorResponse(error: string, outputLines: string[] = []): ClaudeCodeResponse {
        return {
            success: false,
            error,
            output: outputLines
        };
    }
}
