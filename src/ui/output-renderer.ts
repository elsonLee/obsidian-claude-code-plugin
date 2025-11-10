/**
 * Output Renderer - Handles rendering of output and markdown content
 */

import { MarkdownRenderer, Component } from 'obsidian';
import { AgentStep } from '../core/types';
import { AgentActivityParser } from './parsers/agent-activity-parser';

export class OutputRenderer {
    private outputArea: HTMLDivElement;
    private component: Component;
    private notePath: string;
    private currentStreamingElement: HTMLDivElement | null = null;

    constructor(outputArea: HTMLDivElement, component: Component, notePath: string) {
        this.outputArea = outputArea;
        this.component = component;
        this.notePath = notePath;
        this.currentStreamingElement = null;
    }

    /**
     * Update the note path for markdown rendering
     */
    setNotePath(notePath: string): void {
        this.notePath = notePath;
    }

    /**
     * Append a line of output
     */
    appendLine(text: string, isMarkdown: boolean = false): void {
        const line = this.outputArea.createEl('div', { cls: 'claude-code-output-line' });

        if (isMarkdown) {
            line.classList.add('markdown-rendered');
            try {
                MarkdownRenderer.renderMarkdown(text, line, this.notePath, this.component as any);
            } catch (e) {
                console.error('[MARKDOWN RENDER ERROR]', e);
                line.textContent = text;
            }
        } else {
            line.textContent = text;
        }

        // Auto-scroll to bottom
        this.outputArea.scrollTop = this.outputArea.scrollHeight;
    }

    /**
     * Append streaming text (accumulates in the same element)
     */
    appendStreamingText(text: string): void {
        // Create new streaming element if needed
        if (!this.currentStreamingElement) {
            this.currentStreamingElement = this.outputArea.createEl('div', {
                cls: 'claude-code-output-line claude-code-streaming'
            });
        }

        // Wrap each chunk in a span with fade-in animation
        const textSpan = this.currentStreamingElement.createEl('span', {
            cls: 'streaming-text-chunk',
            text: text
        });

        // Auto-scroll to bottom
        this.outputArea.scrollTop = this.outputArea.scrollHeight;
    }

    /**
     * Finish the current streaming block
     */
    finishStreamingBlock(): void {
        this.currentStreamingElement = null;
    }

    /**
     * Clear all output
     */
    clear(): void {
        this.outputArea.empty();
    }

    /**
     * Parse and extract agent activity from output text
     */
    static parseAgentActivity(text: string): AgentStep | null {
        return AgentActivityParser.parseAgentActivity(text);
    }
}
