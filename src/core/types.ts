import { ClaudeCodeRequest, ClaudeCodeResponse } from './claude-code-runner';
import { ClaudeCodeRunner } from './claude-code-runner';

export const VIEW_TYPE_CLAUDE_CODE = 'claude-code-view';

// Token usage type
export interface TokenUsage {
    inputTokens?: number;
    outputTokens?: number;
    totalTokens?: number;
}

export interface SessionHistoryItem {
    prompt: string;
    timestamp: Date;
    success: boolean;
    notePath: string;
    response?: ClaudeCodeResponse;
    request?: ClaudeCodeRequest;
    outputLines?: string[];
}

export interface AgentStep {
    icon: string;
    action: string;
    target: string;
    key: string;
    startTime?: number;  // Timestamp when step started
    duration?: number;   // Duration in milliseconds
}

export interface NoteContext {
    history: SessionHistoryItem[];
    sessionId: string | null;
    currentResponse: ClaudeCodeResponse | null;
    currentRequest: ClaudeCodeRequest | null;
    outputLines: string[];
    agentSteps: AgentStep[];
    runner: ClaudeCodeRunner;
    isRunning: boolean;
    runButton?: HTMLButtonElement;
    cancelButton?: HTMLButtonElement;
    waitingForResponse?: boolean;
    selectedModel?: string;
}
