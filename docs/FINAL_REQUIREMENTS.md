# Obsidian Claude Code Plugin - Final Requirements & Architecture

## 📋 Final Requirements (Final Version)

### 1. Platform
- **Primary**: Mobile Obsidian (Android/iOS)
- **Secondary**: Desktop Obsidian (for testing)

### 2. Plugin Positioning
- **Obsidian Plugin**: Read/write local vault
- **Claude Code Client**: Direct client to server's Claude Code "HTTP-like" endpoint
- **NO MCP**: No MCP libraries, pure WebSocket/HTTPS

### 3. UI Requirements

#### Left Sidebar Panel (Persistent)
```
┌─────────────────────────────┐
│  Claude                     │
├─────────────────────────────┤
│  Message List               │
│  ┌───────────────────────┐  │
│  │ User: Help me         │  │
│  │ Claude: Sure!          │  │
│  │ ...                   │  │
│  └───────────────────────┘  │
│  ┌───────────────────────┐  │
│  │ Input Box             │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

**Features**:
- ✅ Message list with auto-scroll
- ✅ Input box with send button
- ✅ Markdown/code block rendering
- ✅ Scroll to bottom button
- ✅ Clear session button
- ✅ Context menu (copy, etc.)

#### Context Integration
- ✅ Auto-attach current document/selection
- ✅ Insert result at cursor or new file
- ✅ Toggle for auto-include frontmatter, tags, etc.

### 4. Network Architecture

```
Mobile Obsidian (Plugin)
    ↓ WebSocket/HTTPS
Server (Public IP)
    ↓ Wrapper (shell2http/caddy-cgi/ws-wrapper)
Claude Code Process
```

**Requirements**:
- ✅ Server has public IP
- ✅ Plugin connects via HTTPS/WSS (WebSocket Secure)
- ✅ Zero SSH on mobile
- ✅ Zero MCP dependencies
- ✅ Server-side wrapper keeps claude process alive

### 5. Session Management

**Client-side (Plugin)**:
- ✅ Maintain "conversation ID" in storage
- ✅ Local cache for message history
- ✅ Auto-reconnect on disconnect
- ✅ Restore context after reconnection

**Server-side**:
- ✅ Keep claude process alive per session
- ✅ Route requests by conversation ID
- ✅ Handle connection/disconnection

### 6. Dependencies

**Allowed**:
- ✅ `obsidian` (Obsidian API)
- ✅ Standard WebSocket API
- ✅ Standard HTTPS (fetch API)

**NOT Allowed**:
- ❌ Any MCP libraries (@modelcontextprotocol/sdk)
- ❌ Any SSH libraries (ssh2)
- ❌ Any native modules

### 7. Configuration

```typescript
interface NetworkSettings {
    // Server connection
    serverUrl: string;              // e.g., "wss://your-server.com:8080" or "https://your-server.com:3000"
    authToken?: string;             // Optional: Bearer token
    basicAuth?: {                   // Optional: Basic auth
        username: string;
        password: string;
    };

    // Context options
    autoIncludeCurrentFile: boolean; // Auto-attach current file
    includeFrontmatter: boolean;     // Include YAML frontmatter
    includeTags: boolean;            // Include file tags
    includeVaultPath: boolean;       // Include vault path

    // Behavior
    autoScroll: boolean;             // Auto-scroll to latest message
    streamOutput: boolean;           // Show streaming output
}
```

### 8. Target Experience

**User Flow**:
1. Open mobile Obsidian
2. Open "Claude" sidebar
3. Type message (current file auto-included)
4. See response streaming in
5. Insert result or create new file
6. Continue conversation (context maintained)

**Seamless Experience**:
- ✅ Always-on connection (auto-reconnect)
- ✅ No setup beyond server URL
- ✅ Never leave the editor
- ✅ Files sync in real-time

---

## 🏗️ Architecture Design

### Overall Architecture

```
┌─────────────────────────────────────────────────────────────┐
│              Mobile Obsidian                                │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │         Obsidian Claude Code Plugin                    │ │
│  │                                                        │ │
│  │  ┌──────────────────────────────────────────────────┐│ │
│  │  │   WebSocket Client                                ││ │
│  │  │   - Standard WebSocket API                        ││ │
│  │  │   - No external dependencies                      ││ │
│  │  └──────────────────────────────────────────────────┘│ │
│  │             ↓ WebSocket Secure (wss://)                │ │
│  │                                                        │ │
│  │  ┌──────────────────────────────────────────────────┐│ │
│  │  │   Session Manager                                ││ │
│  │  │   - Conversation ID management                   ││ │
│  │  │   - Message history cache                        ││ │
│  │  │   - Auto-reconnect logic                         ││ │
│  │  └──────────────────────────────────────────────────┘│ │
│  │                                                        │ │
│  │  ┌──────────────────────────────────────────────────┐│ │
│  │  │   UI Components                                   ││ │
│  │  │   - Sidebar view                                  ││ │
│  │  │   - Message list                                  ││ │
│  │  │   - Input box                                      ││ │
│  │  └──────────────────────────────────────────────────┘│ │
│  └────────────────────────────────────────────────────────┘ │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTPS/WSS (Internet)
┌────────────────────┴────────────────────────────────────────┐
│                   Server (Public IP)                        │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐│
│  │         HTTP/WebSocket Server                         ││
│  │         - Caddy/Nginx/ws-wrapper                      ││
│  │         - HTTPS termination                           ││
│  │         - WebSocket proxy                              ││
│  └────────────┬────────────────────────────────────────────┘│
│               ↓                                               │
│  ┌────────────┴────────────────────────────────────────────┐│
│  │         Shell2HTTP / CGI Wrapper                       ││
│  │         - HTTP → Shell command                         ││
│  │         - Stream output                                ││
│  └────────────┬────────────────────────────────────────────┘│
│               ↓ stdin/stdout                                │
│  ┌────────────┴────────────────────────────────────────────┐│
│  │         Claude Code CLI Process                       ││
│  │         - stream-json format                           ││
│  │         - Keep alive per session                      ││
│  └─────────────────────────────────────────────────────────┘│
└───────────────────────────────────────────────────────────────┘
```

---

## 🔧 Technical Implementation

### Phase 1: Server-side Wrapper (First)

#### Option A: Using ws-wrapper (Recommended)

**Installation**:
```bash
npm install -g ws-wrapper
```

**Wrapper Script**:
```bash
#!/bin/bash
# start-claude-wrapper.sh

claude --print --output-format stream-json | \
ws-wrapper --port 8080 --ssl --cert /path/to/cert.pem --key /path/to/key.pem
```

#### Option B: Using Caddy CGI

**Caddyfile**:
```
your-server.com {
    encode gzip
    header / {
        Access-Control-Allow-Origin *
        Access-Control-Allow-Methods "POST, GET, OPTIONS"
        Access-Control-Allow-Headers "Content-Type, Authorization"
    }

    handle /claude {
        root * /path/to/claude-wrapper.sh
        cgi
    }

    handle /ws {
        reverse_proxy localhost:3000
    }
}
```

#### Option C: Custom Node.js Server

```javascript
// claude-http-server.js
const { spawn } = require('child_process');
const http = require('http');
const { WebSocketServer } = require('ws');

// HTTP Server for simple requests
const server = http.createServer((req, res) => {
    if (req.url === '/health') {
        res.writeHead(200);
        res.end('OK');
        return;
    }

    // Handle claude execution
    if (req.url === '/claude' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const { prompt, filePath, fileContent, conversationId } = JSON.parse(body);

            // Spawn claude with conversation ID
            const claude = spawn('claude', [
                '--print',
                '--output-format', 'stream-json',
                '--session-id', conversationId
            ]);

            // Send prompt
            claude.stdin.write(JSON.stringify({
                type: 'user',
                message: {
                    role: 'user',
                    content: {
                        type: 'text',
                        text: `File: ${filePath}\nContent:\n${fileContent}\n\n${prompt}`
                    }
                }
            }) + '\n');

            // Stream response
            res.setHeader('Content-Type', 'text/event-stream');
            claude.stdout.on('data', (data) => {
                res.write(`data: ${data}\n\n`);
            });

            claude.on('close', () => {
                res.end();
            });
        });
    }
});

// WebSocket Server for streaming
const wss = new WebSocketServer({ server, path: '/ws' });

const sessions = new Map(); // conversationId -> claude process

wss.on('connection', (ws, req) => {
    const conversationId = new URL(req.url, 'http://localhost').searchParams.get('conversationId');

    ws.on('message', (data) => {
        const { type, prompt, filePath, fileContent } = JSON.parse(data);

        if (type === 'message') {
            // Get or create claude process for this conversation
            let claude = sessions.get(conversationId);

            if (!claude || claude.killed) {
                claude = spawn('claude', [
                    '--print',
                    '--output-format', 'stream-json',
                    '--session-id', conversationId
                ]);

                sessions.set(conversationId, claude);

                claude.on('close', () => {
                    sessions.delete(conversationId);
                });
            }

            // Send message to claude
            claude.stdin.write(JSON.stringify({
                type: 'user',
                message: {
                    role: 'user',
                    content: {
                        type: 'text',
                        text: `Current file: ${filePath}\n\n${fileContent}\n\n${prompt}`
                    }
                }
            }) + '\n');

            // Stream response back
            claude.stdout.on('data', (chunk) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({
                        type: 'data',
                        content: chunk.toString()
                    }));
                }
            });

            claude.stderr.on('data', (chunk) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({
                        type: 'error',
                        content: chunk.toString()
                    }));
                }
            });
        }
    });

    ws.on('close', () => {
        // Don't kill claude process, keep it alive for reconnection
    });
});

server.listen(3000, () => {
    console.log('Claude HTTP Server listening on port 3000');
});
```

---

### Phase 2: Plugin Implementation

#### 2.1 WebSocket Client

**File**: `src/network/websocket-client.ts`

```typescript
export class ClaudeWebSocketClient {
    private ws: WebSocket | null = null;
    private serverUrl: string;
    private conversationId: string;
    private messageHandlers: Map<string, (data: any) => void>;

    constructor(serverUrl: string, conversationId: string) {
        this.serverUrl = serverUrl;
        this.conversationId = conversationId;
        this.messageHandlers = new Map();
    }

    connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.ws = new WebSocket(`${this.serverUrl}/ws?conversationId=${this.conversationId}`);

                this.ws.onopen = () => {
                    console.log('WebSocket connected');
                    resolve();
                };

                this.ws.onmessage = (event) => {
                    const data = JSON.parse(event.data);
                    this.handleMessage(data);
                };

                this.ws.onerror = (error) => {
                    console.error('WebSocket error:', error);
                    reject(error);
                };

                this.ws.onclose = () => {
                    console.log('WebSocket closed, attempting reconnect...');
                    setTimeout(() => this.connect(), 3000); // Auto-reconnect
                };
            } catch (error) {
                reject(error);
            }
        });
    }

    sendMessage(prompt: string, filePath: string, fileContent: string): void {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            throw new Error('WebSocket not connected');
        }

        this.ws.send(JSON.stringify({
            type: 'message',
            prompt,
            filePath,
            fileContent,
            conversationId: this.conversationId
        }));
    }

    onMessage(handler: (data: any) => void): void {
        this.messageHandlers.set('default', handler);
    }

    private handleMessage(data: any): void {
        const handler = this.messageHandlers.get('default');
        if (handler) {
            handler(data);
        }
    }

    disconnect(): void {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }
}
```

#### 2.2 Session Manager

**File**: `src/core/session-manager.ts`

```typescript
export class SessionManager {
    private conversationId: string;
    private messageHistory: Message[];
    private storage: LocalStorage;

    constructor(vaultPath: string) {
        this.conversationId = this.generateConversationId();
        this.messageHistory = [];
        this.storage = new LocalStorage(vaultPath);
        this.loadHistory();
    }

    private generateConversationId(): string {
        return `conv-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    async saveMessage(message: Message): Promise<void> {
        this.messageHistory.push(message);
        await this.storage.setItem('messages', JSON.stringify(this.messageHistory));
    }

    async loadHistory(): Promise<void> {
        const data = await this.storage.getItem('messages');
        if (data) {
            this.messageHistory = JSON.parse(data);
        }
    }

    getConversationId(): string {
        return this.conversationId;
    }

    getHistory(): Message[] {
        return this.messageHistory;
    }

    clearHistory(): void {
        this.messageHistory = [];
        this.storage.setItem('messages', JSON.stringify([]));
    }
}
```

#### 2.3 Sidebar UI

**File**: `src/ui/sidebar-view.ts`

```typescript
export class ClaudeSidebarView extends ItemView {
    private wsClient: ClaudeWebSocketClient;
    private sessionManager: SessionManager;
    private messageListEl: HTMLElement;
    private inputEl: HTMLTextAreaElement;
    private sendBtnEl: HTMLButtonElement;

    async onOpen() {
        const container = this.containerEl.children[1];
        container.empty();
        container.addClass('claude-sidebar');

        // Header
        container.createEl('h2', { text: 'Claude Code' });

        // Message list
        this.messageListEl = container.createDiv('claude-message-list');

        // Input area
        const inputArea = container.createDiv('claude-input-area');

        this.inputEl = inputArea.createEl('textarea', {
            placeholder: 'Ask Claude anything...',
            cls: 'claude-input'
        });

        const buttonRow = inputArea.createDiv('claude-button-row');

        this.sendBtnEl = buttonRow.createEl('button', {
            text: 'Send',
            cls: 'claude-send-btn'
        });

        const clearBtnEl = buttonRow.createEl('button', {
            text: 'Clear',
            cls: 'claude-clear-btn'
        });

        const scrollBtnEl = buttonRow.createEl('button', {
            text: '↓ Scroll',
            cls: 'claude-scroll-btn'
        });

        // Event handlers
        this.sendBtnEl.onclick = () => this.sendMessage();
        clearBtnEl.onclick = () => this.clearSession();
        scrollBtnEl.onclick = () => this.scrollToBottom();

        // Initialize connection
        this.initializeConnection();

        // Load history
        this.renderMessages();
    }

    private async initializeConnection() {
        const serverUrl = this.plugin.settings.serverUrl;
        this.sessionManager = new SessionManager(this.plugin.app.vault.adapter.basePath);

        this.wsClient = new ClaudeWebSocketClient(
            serverUrl,
            this.sessionManager.getConversationId()
        );

        await this.wsClient.connect();

        this.wsClient.onMessage((data) => {
            this.handleServerMessage(data);
        });
    }

    private async sendMessage() {
        const prompt = this.inputEl.value;
        if (!prompt.trim()) return;

        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
            new Notice('Please open a file first');
            return;
        }

        const fileContent = await this.app.vault.read(activeFile);

        // Add user message
        await this.addMessage({
            role: 'user',
            content: prompt,
            timestamp: Date.now()
        });

        // Send to server
        this.wsClient.sendMessage(prompt, activeFile.path, fileContent);

        this.inputEl.value = '';
    }

    private handleServerMessage(data: any) {
        if (data.type === 'data') {
            // Parse stream-json and update UI
            this.appendStreamingContent(data.content);
        } else if (data.type === 'done') {
            // Finalize message
            this.finalizeMessage(data.content);
        }
    }

    private async addMessage(message: Message) {
        await this.sessionManager.saveMessage(message);
        this.renderMessages();
    }

    private renderMessages() {
        const messages = this.sessionManager.getHistory();

        this.messageListEl.empty();
        messages.forEach(msg => {
            const msgEl = this.messageListEl.createDiv('claude-message');
            msgEl.addClass(`msg-${msg.role}`);

            const contentEl = msgEl.createDiv('msg-content');
            contentEl.innerHTML = this.renderMarkdown(msg.content);

            const timeEl = msgEl.createEl('small', {
                text: new Date(msg.timestamp).toLocaleTimeString()
            });
        });

        this.scrollToBottom();
    }

    private renderMarkdown(content: string): string {
        // Simple markdown rendering
        return content
            .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    }

    private scrollToBottom() {
        this.messageListEl.scrollTop = this.messageListEl.scrollHeight;
    }

    private clearSession() {
        this.sessionManager.clearHistory();
        this.renderMessages();
    }
}
```

---

## 📱 Implementation Plan

### Phase 1: Server-side (Day 1-2)
- [ ] Create HTTP/WebSocket wrapper for Claude CLI
- [ ] Test wrapper with manual requests
- [ ] Deploy to server with public IP
- [ ] Configure HTTPS (Caddy/Let's Encrypt)

### Phase 2: Plugin Core (Day 2-3)
- [ ] Implement WebSocket client
- [ ] Implement session manager
- [ ] Add network settings to configuration
- [ ] Test connection

### Phase 3: UI Components (Day 3-4)
- [ ] Create sidebar view
- [ ] Implement message list
- [ ] Add input box
- [ ] Add buttons (send, clear, scroll)
- [ ] Style with CSS

### Phase 4: Integration (Day 4-5)
- [ ] Integrate file context
- [ ] Implement streaming output
- [ ] Add auto-reconnect
- [ ] Test on mobile

### Phase 5: Polish (Day 5-6)
- [ ] Error handling
- [ ] Loading states
- [ ] Offline handling
- [ ] Performance optimization
- [ ] Documentation

---

## ✅ Success Criteria

- [ ] Works on mobile Obsidian (Android/iOS)
- [ ] Zero SSH/MCP dependencies
- [ ] Auto-reconnects on disconnect
- [ ] Preserves conversation context
- [ ] Includes current file as context
- [ ] Can insert result or create new file
- [ ] Smooth streaming output
- [ ] Clean, intuitive UI

---

**Document Version**: 1.0 (Final)
**Date**: 2026-01-06
**Status**: Ready for Implementation
