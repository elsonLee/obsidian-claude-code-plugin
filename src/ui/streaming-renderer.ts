/**
 * Streaming Renderer
 * Handles real-time rendering of AI response streams
 */

import { MarkdownRenderer as ObsidianMarkdownRenderer } from 'obsidian';
import { ClaudeCodeView } from './view';

export interface StreamChunk {
    content: string;
    isComplete: boolean;
    metadata?: {
        model?: string;
        finishReason?: string;
        usage?: {
            promptTokens: number;
            completionTokens: number;
            totalTokens: number;
        };
    };
}

export interface StreamMessage {
    type: 'ai_stream';
    conversationId: string;
    chunk: StreamChunk;
}

/**
 * Streaming Renderer
 * Manages real-time display of AI responses
 */
export class StreamingRenderer {
    private view: ClaudeCodeView;
    private container: HTMLElement;
    private currentStreamElement: HTMLElement | null = null;
    private accumulatedContent: string = '';
    private isStreaming: boolean = false;

    constructor(view: ClaudeCodeView, container: HTMLElement) {
        this.view = view;
        this.container = container;
    }

    /**
     * Start a new stream
     */
    startStream(): void {
        this.isStreaming = true;
        this.accumulatedContent = '';

        // Create stream element
        this.currentStreamElement = this.container.createEl('div', {
            cls: 'claude-code-streaming-response'
        });

        // Create header
        const header = this.currentStreamElement.createEl('div', {
            cls: 'claude-code-stream-header'
        });

        header.createEl('span', {
            text: 'AI Response',
            cls: 'claude-code-stream-title'
        });

        const statusIndicator = header.createEl('span', {
            text: 'Streaming...',
            cls: 'claude-code-stream-status streaming'
        });

        // Create content area
        const contentArea = this.currentStreamElement.createEl('div', {
            cls: 'claude-code-stream-content'
        });

        // Store reference for updates
        (this.currentStreamElement as any)._statusIndicator = statusIndicator;
        (this.currentStreamElement as any)._contentArea = contentArea;

        // Scroll to bottom
        this.scrollToBottom();
    }

    /**
     * Append a chunk of content to the stream
     */
    async appendChunk(chunk: StreamChunk): Promise<void> {
        if (!this.currentStreamElement || !this.isStreaming) {
            console.warn('No active stream to append to');
            return;
        }

        // Append content
        if (chunk.content) {
            this.accumulatedContent += chunk.content;

            // Update content area with rendered markdown
            const contentArea = (this.currentStreamElement as any)._contentArea;
            if (contentArea) {
                contentArea.empty();

                // Create temporary container for markdown rendering
                const markdownContainer = contentArea.createEl('div');
                await ObsidianMarkdownRenderer.renderMarkdown(
                    this.accumulatedContent,
                    markdownContainer,
                    '',
                    this.view
                );
            }

            // Scroll to bottom
            this.scrollToBottom();
        }

        // Check if stream is complete
        if (chunk.isComplete) {
            this.completeStream(chunk.metadata);
        }
    }

    /**
     * Complete the current stream
     */
    completeStream(metadata?: StreamChunk['metadata']): void {
        if (!this.currentStreamElement) {
            return;
        }

        this.isStreaming = false;

        // Update status indicator
        const statusIndicator = (this.currentStreamElement as any)._statusIndicator;
        if (statusIndicator) {
            statusIndicator.textContent = 'Complete';
            statusIndicator.removeClass('streaming');
            statusIndicator.addClass('complete');
        }

        // Add metadata if available
        if (metadata) {
            this.addMetadata(metadata);
        }

        // Convert to regular response element
        this.currentStreamElement.removeClass('claude-code-streaming-response');
        this.currentStreamElement.addClass('claude-code-response');

        this.currentStreamElement = null;
        this.accumulatedContent = '';
    }

    /**
     * Add metadata display (token usage, model, etc.)
     */
    private addMetadata(metadata: StreamChunk['metadata']): void {
        if (!this.currentStreamElement || !metadata) {
            return;
        }

        const metadataEl = this.currentStreamElement.createEl('div', {
            cls: 'claude-code-stream-metadata'
        });

        // Model
        if (metadata.model) {
            metadataEl.createEl('span', {
                text: `Model: ${metadata.model}`,
                cls: 'claude-code-metadata-item'
            });
        }

        // Token usage
        if (metadata.usage) {
            const tokensText = `Tokens: ${metadata.usage.promptTokens} + ${metadata.usage.completionTokens} = ${metadata.usage.totalTokens}`;
            metadataEl.createEl('span', {
                text: tokensText,
                cls: 'claude-code-metadata-item'
            });
        }

        // Finish reason
        if (metadata.finishReason) {
            metadataEl.createEl('span', {
                text: `Finished: ${metadata.finishReason}`,
                cls: 'claude-code-metadata-item'
            });
        }
    }

    /**
     * Cancel the current stream
     */
    cancelStream(): void {
        if (!this.currentStreamElement) {
            return;
        }

        this.isStreaming = false;

        const statusIndicator = (this.currentStreamElement as any)._statusIndicator;
        if (statusIndicator) {
            statusIndicator.textContent = 'Cancelled';
            statusIndicator.removeClass('streaming');
            statusIndicator.addClass('cancelled');
        }

        this.currentStreamElement = null;
        this.accumulatedContent = '';
    }

    /**
     * Check if currently streaming
     */
    isActive(): boolean {
        return this.isStreaming && this.currentStreamElement !== null;
    }

    /**
     * Get the current stream element
     */
    getCurrentElement(): HTMLElement | null {
        return this.currentStreamElement;
    }

    /**
     * Scroll the container to the bottom
     */
    private scrollToBottom(): void {
        if (this.container) {
            this.container.scrollTop = this.container.scrollHeight;
        }
    }

    /**
     * Handle incoming stream message
     */
    async handleStreamMessage(message: StreamMessage): Promise<void> {
        if (!this.isActive()) {
            // Start new stream if not active
            this.startStream();
        }

        await this.appendChunk(message.chunk);
    }

    /**
     * Clear all streams
     */
    clear(): void {
        this.isStreaming = false;
        this.currentStreamElement = null;
        this.accumulatedContent = '';
        this.container.empty();
    }
}
