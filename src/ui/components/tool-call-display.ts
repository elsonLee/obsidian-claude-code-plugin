/**
 * Tool Call Display Component
 * Visualizes MCP tool calls with status indicators
 */

import { ToolCall, ToolCallTracker } from '../tool-call-tracker';

/**
 * Tool Call Display Component
 */
export class ToolCallDisplay {
    private container: HTMLElement;
    private tracker: ToolCallTracker;
    private toolCallElements: Map<string, HTMLElement> = new Map();
    private unsubscribe: () => void;

    constructor(container: HTMLElement, tracker: ToolCallTracker) {
        this.container = container;
        this.tracker = tracker;

        // Subscribe to tool call updates
        this.unsubscribe = this.tracker.onToolCallUpdate((call) => {
            this.updateToolCallDisplay(call);
        });

        // Initial render
        this.render();
    }

    /**
     * Destroy the component
     */
    destroy(): void {
        this.unsubscribe();
        this.toolCallElements.clear();
        this.container.empty();
    }

    /**
     * Render initial UI
     */
    private render(): void {
        this.container.empty();

        // Create header
        const header = this.container.createEl('div', {
            cls: 'claude-code-tool-call-header'
        });

        header.createEl('h3', {
            text: 'Tool Calls',
            cls: 'claude-code-tool-call-title'
        });

        // Create stats display
        const stats = this.container.createEl('div', {
            cls: 'claude-code-tool-call-stats'
        });
        this.updateStats(stats);

        // Create tool calls container
        const callsContainer = this.container.createEl('div', {
            cls: 'claude-code-tool-calls-container'
        });

        // Render existing calls
        const calls = this.tracker.getAllCalls();
        for (const call of calls) {
            this.renderToolCall(call, callsContainer);
        }

        // Update stats periodically
        setInterval(() => {
            this.updateStats(stats);
        }, 1000);
    }

    /**
     * Update statistics display
     */
    private updateStats(statsEl: HTMLElement): void {
        const stats = this.tracker.getStats();

        statsEl.empty();
        statsEl.createEl('span', {
            text: `Total: ${stats.total}`,
            cls: 'claude-code-stat-total'
        });

        if (stats.pending > 0) {
            statsEl.createEl('span', {
                text: `Pending: ${stats.pending}`,
                cls: 'claude-code-stat-pending'
            });
        }

        if (stats.running > 0) {
            statsEl.createEl('span', {
                text: `Running: ${stats.running}`,
                cls: 'claude-code-stat-running'
            });
        }

        if (stats.completed > 0) {
            statsEl.createEl('span', {
                text: `Completed: ${stats.completed}`,
                cls: 'claude-code-stat-completed'
            });
        }

        if (stats.failed > 0) {
            statsEl.createEl('span', {
                text: `Failed: ${stats.failed}`,
                cls: 'claude-code-stat-failed'
            });
        }
    }

    /**
     * Render a single tool call
     */
    private renderToolCall(call: ToolCall, container: HTMLElement): void {
        const callEl = container.createEl('div', {
            cls: `claude-code-tool-call claude-code-tool-call-${call.status}`
        });

        // Create header section (always visible)
        const header = callEl.createEl('div', {
            cls: 'claude-code-tool-call-header-section'
        });

        // Status icon
        const statusIcon = header.createEl('span', {
            cls: `claude-code-tool-call-status-icon claude-code-status-${call.status}`
        });

        // Tool name
        header.createEl('span', {
            text: call.toolName,
            cls: 'claude-code-tool-call-name'
        });

        // Duration (for active or completed calls)
        if (call.status !== 'pending') {
            const duration = this.tracker.getDuration(call.id);
            if (duration !== undefined) {
                header.createEl('span', {
                    text: this.formatDuration(duration),
                    cls: 'claude-code-tool-call-duration'
                });
            }
        }

        // Create details section (collapsible)
        const details = callEl.createEl('div', {
            cls: 'claude-code-tool-call-details'
        });

        // Arguments
        if (call.arguments && Object.keys(call.arguments).length > 0) {
            const argsSection = details.createEl('div', {
                cls: 'claude-code-tool-call-arguments'
            });
            argsSection.createEl('h4', { text: 'Arguments' });
            argsSection.createEl('pre', {
                text: JSON.stringify(call.arguments, null, 2)
            });
        }

        // Result (for completed calls)
        if (call.status === 'completed' && call.result !== undefined) {
            const resultSection = details.createEl('div', {
                cls: 'claude-code-tool-call-result'
            });
            resultSection.createEl('h4', { text: 'Result' });
            resultSection.createEl('pre', {
                text: JSON.stringify(call.result, null, 2)
            });
        }

        // Error (for failed calls)
        if (call.status === 'failed' && call.error) {
            const errorSection = details.createEl('div', {
                cls: 'claude-code-tool-call-error'
            });
            errorSection.createEl('h4', { text: 'Error' });
            errorSection.createEl('pre', { text: call.error });
        }

        // Make details collapsible
        header.addClass('clickable');
        header.addEventListener('click', (_event: MouseEvent) => {
            details.toggleClass('collapsed');
        });

        // Store element reference
        this.toolCallElements.set(call.id, callEl);
    }

    /**
     * Update tool call display when state changes
     */
    private updateToolCallDisplay(call: ToolCall): void {
        const existingEl = this.toolCallElements.get(call.id);

        if (!existingEl) {
            // New call, render it
            const container = this.container.querySelector('.claude-code-tool-calls-container');
            if (container) {
                this.renderToolCall(call, container as HTMLElement);
            }
            return;
        }

        // Update existing element
        existingEl.className = `claude-code-tool-call claude-code-tool-call-${call.status}`;

        // Update status icon
        const statusIcon = existingEl.querySelector('.claude-code-tool-call-status-icon');
        if (statusIcon) {
            statusIcon.className = `claude-code-tool-call-status-icon claude-code-status-${call.status}`;
        }

        // Update duration
        const durationEl = existingEl.querySelector('.claude-code-tool-call-duration');
        if (durationEl && call.status !== 'pending') {
            const duration = this.tracker.getDuration(call.id);
            if (duration !== undefined) {
                (durationEl as HTMLElement).textContent = this.formatDuration(duration);
            }
        }

        // Update details section
        const details = existingEl.querySelector('.claude-code-tool-call-details');
        if (details) {
            // Remove old result/error sections
            const oldResult = details.querySelector('.claude-code-tool-call-result');
            const oldError = details.querySelector('.claude-code-tool-call-error');
            if (oldResult) oldResult.remove();
            if (oldError) oldError.remove();

            // Add new result/error if applicable
            if (call.status === 'completed' && call.result !== undefined) {
                const resultSection = details.createEl('div', {
                    cls: 'claude-code-tool-call-result'
                });
                resultSection.createEl('h4', { text: 'Result' });
                resultSection.createEl('pre', {
                    text: JSON.stringify(call.result, null, 2)
                });
            }

            if (call.status === 'failed' && call.error) {
                const errorSection = details.createEl('div', {
                    cls: 'claude-code-tool-call-error'
                });
                errorSection.createEl('h4', { text: 'Error' });
                errorSection.createEl('pre', { text: call.error });
            }
        }
    }

    /**
     * Format duration in human-readable format
     */
    private formatDuration(ms: number): string {
        if (ms < 1000) {
            return `${ms}ms`;
        } else if (ms < 60000) {
            return `${(ms / 1000).toFixed(1)}s`;
        } else {
            const minutes = Math.floor(ms / 60000);
            const seconds = Math.floor((ms % 60000) / 1000);
            return `${minutes}m ${seconds}s`;
        }
    }

    /**
     * Clear completed calls from display
     */
    clearCompleted(): void {
        const container = this.container.querySelector('.claude-code-tool-calls-container');
        if (!container) return;

        const completedCalls = this.tracker.getAllCalls().filter(
            call => call.status === 'completed' || call.status === 'failed'
        );

        for (const call of completedCalls) {
            const el = this.toolCallElements.get(call.id);
            if (el) {
                el.remove();
                this.toolCallElements.delete(call.id);
            }
        }

        this.tracker.clearCompleted();
    }

    /**
     * Clear all calls from display
     */
    clearAll(): void {
        this.toolCallElements.clear();
        this.tracker.clearAll();
        this.render();
    }
}
