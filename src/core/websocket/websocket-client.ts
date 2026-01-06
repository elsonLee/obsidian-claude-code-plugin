/**
 * WebSocket Client
 * Manages WebSocket connection to Relay Server with auto-reconnect
 */

import { WebSocket } from 'ws';
import {
    ConnectionState,
    WSMessage,
    WebSocketConfig,
    MessageCallback,
    ErrorCallback,
    StateChangeCallback
} from './websocket-types';

/**
 * WebSocket Client Implementation
 */
export class WebSocketClient {
    private ws: WebSocket | null = null;
    private config: WebSocketConfig;
    private state: ConnectionState = ConnectionState.DISCONNECTED;
    private messageCallbacks: Set<MessageCallback> = new Set();
    private errorCallbacks: Set<ErrorCallback> = new Set();
    private stateChangeCallbacks: Set<StateChangeCallback> = new Set();
    private reconnectTimer: NodeJS.Timeout | null = null;
    private reconnectAttempts: number = 0;
    private isManualDisconnect: boolean = false;

    constructor(config: WebSocketConfig) {
        this.config = {
            autoReconnect: true,
            reconnectInterval: 5000,
            maxRetries: 10,
            connectTimeout: 10000,
            ...config
        };
    }

    /**
     * Connect to WebSocket server
     */
    async connect(): Promise<void> {
        if (this.state === ConnectionState.CONNECTED ||
            this.state === ConnectionState.CONNECTING) {
            return;
        }

        this.isManualDisconnect = false;
        this.setState(ConnectionState.CONNECTING);

        const url = new URL(this.config.url);
        url.searchParams.set('conversationId', this.config.conversationId);

        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error(`Connection timeout after ${this.config.connectTimeout}ms`));
            }, this.config.connectTimeout);

            try {
                this.ws = new WebSocket(url.toString());

                this.ws.on('open', () => {
                    clearTimeout(timeout);
                    this.reconnectAttempts = 0;
                    this.setState(ConnectionState.CONNECTED);
                    console.log(`✅ WebSocket connected to ${this.config.url}`);
                    resolve();
                });

                this.ws.on('message', (data: Buffer) => {
                    this.handleMessage(data);
                });

                this.ws.on('error', (error: Error) => {
                    clearTimeout(timeout);
                    this.handleError(error);
                    reject(error);
                });

                this.ws.on('close', (code: number, reason: Buffer) => {
                    clearTimeout(timeout);
                    this.handleClose(code, reason.toString());
                });

            } catch (error) {
                clearTimeout(timeout);
                this.handleError(error as Error);
                reject(error);
            }
        });
    }

    /**
     * Disconnect from server
     */
    disconnect(): void {
        this.isManualDisconnect = true;

        if (this.reconnectTimer) {
            clearTimeout(this.reconnectTimer);
            this.reconnectTimer = null;
        }

        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }

        this.setState(ConnectionState.DISCONNECTED);
        console.log('🔌 WebSocket disconnected');
    }

    /**
     * Send message to server
     */
    send(message: WSMessage): void {
        if (!this.isConnected()) {
            throw new Error('Cannot send message: not connected');
        }

        try {
            const messageStr = JSON.stringify(message);
            this.ws!.send(messageStr);
            console.log(`📤 Sent: ${message.type}`);
        } catch (error) {
            console.error('❌ Failed to send message:', error);
            throw error;
        }
    }

    /**
     * Check if connected
     */
    isConnected(): boolean {
        return this.state === ConnectionState.CONNECTED &&
               this.ws !== null &&
               this.ws.readyState === WebSocket.OPEN;
    }

    /**
     * Get current connection state
     */
    getConnectionState(): ConnectionState {
        return this.state;
    }

    /**
     * Register message callback
     */
    onMessage(callback: MessageCallback): () => void {
        this.messageCallbacks.add(callback);
        return () => this.messageCallbacks.delete(callback);
    }

    /**
     * Register error callback
     */
    onError(callback: ErrorCallback): () => void {
        this.errorCallbacks.add(callback);
        return () => this.errorCallbacks.delete(callback);
    }

    /**
     * Register state change callback
     */
    onStateChange(callback: StateChangeCallback): () => void {
        this.stateChangeCallbacks.add(callback);

        // Immediately call with current state
        callback(this.state);

        return () => this.stateChangeCallbacks.delete(callback);
    }

    /**
     * Handle incoming message
     */
    private handleMessage(data: Buffer): void {
        try {
            const message: WSMessage = JSON.parse(data.toString());
            console.log(`📥 Received: ${message.type}`);

            // Notify all callbacks
            this.messageCallbacks.forEach(callback => {
                try {
                    callback(message);
                } catch (error) {
                    console.error('❌ Error in message callback:', error);
                }
            });
        } catch (error) {
            console.error('❌ Failed to parse message:', error);
        }
    }

    /**
     * Handle connection error
     */
    private handleError(error: Error): void {
        console.error('❌ WebSocket error:', error);
        this.setState(ConnectionState.ERROR);

        this.errorCallbacks.forEach(callback => {
            try {
                callback(error);
            } catch (err) {
                console.error('❌ Error in error callback:', err);
            }
        });
    }

    /**
     * Handle connection close
     */
    private handleClose(code: number, reason: string): void {
        console.log(`🔌 WebSocket closed: ${code} - ${reason}`);

        if (this.isManualDisconnect) {
            this.setState(ConnectionState.DISCONNECTED);
            return;
        }

        this.setState(ConnectionState.DISCONNECTED);

        // Auto reconnect if enabled
        if (this.config.autoReconnect! &&
            this.reconnectAttempts < (this.config.maxRetries || 10)) {
            this.scheduleReconnect();
        }
    }

    /**
     * Schedule reconnection
     */
    private scheduleReconnect(): void {
        if (this.reconnectTimer) {
            return; // Already scheduled
        }

        const delay = (this.config.reconnectInterval || 5000) *
            Math.pow(2, this.reconnectAttempts); // Exponential backoff

        console.log(`🔄 Reconnecting in ${delay}ms (attempt ${this.reconnectAttempts + 1})`);
        this.setState(ConnectionState.RECONNECTING);

        this.reconnectTimer = setTimeout(() => {
            this.reconnectTimer = null;
            this.reconnectAttempts++;
            this.connect().catch((error) => {
                console.error('❌ Reconnect failed:', error.message);
            });
        }, delay);
    }

    /**
     * Set connection state and notify listeners
     */
    private setState(newState: ConnectionState): void {
        if (this.state !== newState) {
            this.state = newState;
            console.log(`📡 State changed: ${newState}`);

            this.stateChangeCallbacks.forEach(callback => {
                try {
                    callback(newState);
                } catch (error) {
                    console.error('❌ Error in state change callback:', error);
                }
            });
        }
    }
}
