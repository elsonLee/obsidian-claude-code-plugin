/**
 * Tool Call Tracker
 * Tracks and manages MCP tool calls for visualization
 */

export interface ToolCall {
    id: string;
    toolName: string;
    arguments: any;
    status: 'pending' | 'running' | 'completed' | 'failed';
    startTime: number;
    endTime?: number;
    result?: any;
    error?: string;
}

export type ToolCallCallback = (call: ToolCall) => void;

/**
 * Tool Call Tracker
 * Manages tracking of MCP tool calls with state updates
 */
export class ToolCallTracker {
    private calls: Map<string, ToolCall> = new Map();
    private callbacks: Set<ToolCallCallback> = new Set();

    /**
     * Start tracking a tool call
     */
    startCall(id: string, toolName: string, args: any): ToolCall {
        const call: ToolCall = {
            id,
            toolName,
            arguments,
            status: 'pending',
            startTime: Date.now()
        };

        this.calls.set(id, call);
        this.notifyCallbacks(call);

        return call;
    }

    /**
     * Update tool call status
     */
    updateStatus(
        id: string,
        status: ToolCall['status'],
        result?: any,
        error?: string
    ): void {
        const call = this.calls.get(id);
        if (!call) {
            console.warn(`Tool call ${id} not found`);
            return;
        }

        call.status = status;

        if (status === 'completed' || status === 'failed') {
            call.endTime = Date.now();
        }

        if (result !== undefined) {
            call.result = result;
        }

        if (error !== undefined) {
            call.error = error;
        }

        this.notifyCallbacks(call);
    }

    /**
     * Get a tool call by ID
     */
    getCall(id: string): ToolCall | undefined {
        return this.calls.get(id);
    }

    /**
     * Get all tool calls
     */
    getAllCalls(): ToolCall[] {
        return Array.from(this.calls.values());
    }

    /**
     * Get active (non-completed) tool calls
     */
    getActiveCalls(): ToolCall[] {
        return this.getAllCalls().filter(
            call => call.status !== 'completed' && call.status !== 'failed'
        );
    }

    /**
     * Clear completed calls
     */
    clearCompleted(): void {
        const activeCalls = this.getActiveCalls();
        this.calls.clear();

        for (const call of activeCalls) {
            this.calls.set(call.id, call);
        }
    }

    /**
     * Clear all calls
     */
    clearAll(): void {
        this.calls.clear();
    }

    /**
     * Subscribe to tool call updates
     */
    onToolCallUpdate(callback: ToolCallCallback): () => void {
        this.callbacks.add(callback);
        return () => this.callbacks.delete(callback);
    }

    /**
     * Notify all callbacks of a tool call update
     */
    private notifyCallbacks(call: ToolCall): void {
        this.callbacks.forEach(callback => {
            try {
                callback(call);
            } catch (error) {
                console.error('Error in tool call callback:', error);
            }
        });
    }

    /**
     * Get duration of a tool call in milliseconds
     */
    getDuration(id: string): number | undefined {
        const call = this.calls.get(id);
        if (!call) {
            return undefined;
        }

        const endTime = call.endTime || Date.now();
        return endTime - call.startTime;
    }

    /**
     * Get statistics
     */
    getStats(): {
        total: number;
        pending: number;
        running: number;
        completed: number;
        failed: number;
    } {
        const calls = this.getAllCalls();

        return {
            total: calls.length,
            pending: calls.filter(c => c.status === 'pending').length,
            running: calls.filter(c => c.status === 'running').length,
            completed: calls.filter(c => c.status === 'completed').length,
            failed: calls.filter(c => c.status === 'failed').length
        };
    }
}
