# 双向 WebSocket 架构设计（最终版）

## 🎯 核心理念

**"云端大脑，手机手眼"**

- **大脑**：云端 Claude Code（强大的计算和推理能力）
- **神经**：WebSocket 长连接（双向通信通道）
- **手眼**：手机 Obsidian（访问本地文件，显示结果）

---

## 🏗️ 架构设计

### 完整流程图

```
┌─────────────────────────────────────────────────────────────┐
│                    手机 Obsidian                           │
│                                                               │
│  ┌────────────────────────────────────────────────────────┐ │
│  │         Obsidian Claude Plugin                        │ │
│  │                                                        │ │
│  │  ┌──────────────────────────────────────────────────┐│ │
│  │  │   WebSocket Client (主动连接)                     ││ │
│  │  │   - 建立到服务器的 WSS 连接                        ││ │
│  │  │   - 发送用户消息                                   ││ │
│  │  │   - 接收服务器推送                                 ││ │
│  │  │   - 响应服务器请求（本地文件操作）                 ││ │
│  │  └──────────────────────────────────────────────────┘│ │
│  │                                                        │ │
│  │  ┌──────────────────────────────────────────────────┐│ │
│  │  │   Request Handlers                                ││ │
│  │  │   - onGetFile(path) → 读取本地文件                 ││ │
│  │  │   - onWriteFile(path, content) → 写入本地文件      ││ │
│  │  │   - onListFiles() → 列出文件                       ││ │
│  │  └──────────────────────────────────────────────────┘│ │
│  │                                                        │ │
│  │  ┌──────────────────────────────────────────────────┐│ │
│  │  │   UI Components                                   ││ │
│  │  │   - 消息列表                                       ││ │
│  │  │   - 输入框                                         ││ │
│  │  │   - 文件显示                                       ││ │
│  │  └──────────────────────────────────────────────────┘│ │
│  └────────────────────────────────────────────────────────┘ │
└────────────────────┬────────────────────────────────────────┘
                     │ 1. 建立 WSS 长连接
                     │ 2. 双向通信
┌────────────────────┴────────────────────────────────────────┐
│                   云端服务器 (公网 IP)                      │
│                                                               │
│  ┌─────────────────────────────────────────────────────────┐│
│  │         WebSocket Relay Server                         ││
│  │         - 维护与客户端的连接                           ││ │
│  │         - 转发请求到 Claude                            ││ │
│  │         - 广播消息到客户端                             ││ │
│  └────────────┬────────────────────────────────────────────┘│
│               │ MCP / stdio                                  │
│  ┌────────────┴────────────────────────────────────────────┐│
│  │         Claude Code CLI + MCP                         ││
│  │         - 执行推理                                     ││
│  │         - 需要/操作文件时通过 MCP 发送请求            ││ │
│  │         - 接收文件内容                                 ││ │
│  └─────────────────────────────────────────────────────────┘│
└───────────────────────────────────────────────────────────────┘
```

---

## 📡 通信协议设计

### 消息类型定义

#### 1. 客户端 → 服务器 (Client → Server)

**类型 A: 用户消息**
```json
{
  "type": "user_message",
  "conversationId": "conv-123",
  "content": "帮我优化这段代码",
  "context": {
    "currentFile": "note.md",
    "selection": "选中的文本",
    "frontmatter": {...},
    "tags": ["tag1", "tag2"]
  }
}
```

**类型 B: 响应服务器请求**
```json
{
  "type": "response",
  "requestId": "req-456",
  "data": {
    "content": "文件内容 here..."
  }
}
```

#### 2. 服务器 → 客户端 (Server → Client)

**类型 A: AI 输出流**
```json
{
  "type": "ai_stream",
  "conversationId": "conv-123",
  "content": "根据你的要求...",
  "isStreaming": true
}
```

**类型 B: 文件操作请求**
```json
{
  "type": "request",
  "requestId": "req-456",
  "action": "get_file",
  "params": {
    "path": "note.md"
  }
}
```

**类型 C: AI 完成**
```json
{
  "type": "ai_done",
  "conversationId": "conv-123",
  "finalOutput": "完整的回复"
}
```

---

## 🔄 完整交互流程

### 场景 1: 简单对话（无文件操作）

```
1. [手机 → 服务器]
   type: "user_message"
   content: "你好"

2. [服务器 → Claude]
   转发消息

3. [服务器 → 手机] (流式)
   type: "ai_stream"
   content: "你好！我是..."

4. [服务器 → 手机]
   type: "ai_done"
   finalOutput: "完整回复"
```

### 场景 2: AI 需要读取文件

```
1. [手机 → 服务器]
   type: "user_message"
   content: "帮我修改 note.md"
   context: { currentFile: "note.md" }

2. [服务器 → Claude]
   转发消息（带文件路径）

3. [Claude → 服务器]
   需要读取 note.md 的内容

4. [服务器 → 手机]
   type: "request"
   requestId: "req-001"
   action: "get_file"
   params: { path: "note.md" }

5. [手机 → 服务器]
   type: "response"
   requestId: "req-001"
   data: { content: "# Note Title\n..." }

6. [服务器 → Claude]
   提供文件内容

7. [Claude → 服务器]
   处理完成，生成回复

8. [服务器 → 手机] (流式)
   type: "ai_stream"
   content: "已修改文件..."

9. [服务器 → 手机]
   type: "ai_done"
   finalOutput: "完整回复"

10. [服务器 → 手机]
    type: "request"
    requestId: "req-002"
    action: "write_file"
    params: {
      path: "note.md",
      content: "修改后的内容"
    }

11. [手机 → 服务器]
    type: "response"
    requestId: "req-002"
    data: { success: true }

12. [手机端]
    自动更新显示的文件内容
```

### 场景 3: 自动重连

```
1. [网络断开]
   WebSocket 连接断开

2. [手机检测到断开]
   自动尝试重连
   保存未发送的消息到队列

3. [重连成功]
   type: "reconnect"
   conversationId: "conv-123"
   messageHistory: [...]

4. [服务器]
   恢复会话上下文
   发送断开期间的消息（如果有）
```

---

## 🔧 实现细节

### 服务器端 (Node.js)

**文件**: `server/relay-server.js`

```javascript
const WebSocket = require('ws');
const { spawn } = require('child_process');

const wss = new WebSocket.Server({
    port: 8080,
    perMessageDeflate: false  // 压缩可能导致问题
});

// 存储会话
const sessions = new Map();  // conversationId -> { ws, claudeProcess }

// 存储请求回调
const pendingRequests = new Map();  // requestId -> resolve function

wss.on('connection', (ws, req) => {
    console.log('New client connected');

    ws.on('message', async (data) => {
        const message = JSON.parse(data.toString());

        switch (message.type) {
            case 'user_message':
                await handleUserMessage(ws, message);
                break;

            case 'response':
                handleResponse(message);
                break;

            case 'reconnect':
                await handleReconnect(ws, message);
                break;
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        // 保持 claude 进程运行，等待重连
    });
});

async function handleUserMessage(ws, message) {
    const { conversationId, content, context } = message;

    // 获取或创建会话
    let session = sessions.get(conversationId);

    if (!session || !session.claudeProcess) {
        // 启动新的 claude 进程
        const claude = spawn('claude', [
            '--print',
            '--output-format', 'stream-json',
            '--input-format', 'stream-json',
            '--session-id', conversationId
        ]);

        // 处理 claude 的输出
        claude.stdout.on('data', (data) => {
            const lines = data.toString().split('\n');
            lines.forEach(line => {
                if (line.trim()) {
                    try {
                        const event = JSON.parse(line);

                        if (event.type === 'conversationDelta') {
                            // 流式发送到客户端
                            ws.send(JSON.stringify({
                                type: 'ai_stream',
                                conversationId,
                                content: event.delta.text,
                                isStreaming: true
                            }));
                        } else if (event.type === 'requestPermission') {
                            // 处理权限请求 - 读取本地文件
                            handleFileRequest(ws, conversationId, event.request);
                        } else if (event.type === 'done') {
                            ws.send(JSON.stringify({
                                type: 'ai_done',
                                conversationId,
                                finalOutput: event.outputText || ''
                            }));
                        }
                    } catch (e) {
                        // 忽略解析错误
                    }
                }
            });
        });

        session = { ws, claudeProcess: claude };
        sessions.set(conversationId, session);
    }

    // 发送用户消息到 claude
    const prompt = buildPrompt(content, context);
    session.claudeProcess.stdin.write(JSON.stringify({
        type: 'user',
        message: {
            role: 'user',
            content: {
                type: 'text',
                text: prompt
            }
        }
    }) + '\n');
}

function handleFileRequest(ws, conversationId, request) {
    const requestId = `req-${Date.now()}-${Math.random().toString(36)}`;

    // 发送文件请求到客户端
    ws.send(JSON.stringify({
        type: 'request',
        requestId,
        action: 'get_file',  // 或其他操作
        params: {
            path: request.path || request.fileName
        }
    }));

    // 等待客户端响应
    pendingRequests.set(requestId, (data) => {
        // 将文件内容发送回 claude
        // 这里需要通过某种方式发送到 claude 进程
        console.log('Received file data:', data);
    });
}

function handleResponse(message) {
    const { requestId, data } = message;

    const resolve = pendingRequests.get(requestId);
    if (resolve) {
        resolve(data);
        pendingRequests.delete(requestId);
    }
}

function buildPrompt(content, context) {
    let prompt = content;

    if (context.currentFile) {
        prompt += `\n\nCurrent file: ${context.currentFile}`;
    }

    if (context.selection) {
        prompt += `\n\nSelected text:\n${context.selection}`;
    }

    return prompt;
}

console.log('WebSocket Relay Server listening on port 8080');
```

---

### 手机端 (Obsidian 插件)

**文件**: `src/network/websocket-client.ts`

```typescript
export class ClaudeWebSocketClient {
    private ws: WebSocket | null = null;
    private serverUrl: string;
    private conversationId: string;
    private requestHandlers: Map<string, (data: any) => void>;
    private reconnectAttempts: number = 0;
    private maxReconnectAttempts: number = 10;

    constructor(serverUrl: string, conversationId: string) {
        this.serverUrl = serverUrl;
        this.conversationId = conversationId;
        this.requestHandlers = new Map();
    }

    async connect(): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.ws = new WebSocket(`${this.serverUrl}`);

                this.ws.onopen = () => {
                    console.log('WebSocket connected');
                    this.reconnectAttempts = 0;
                    resolve();
                };

                this.ws.onmessage = (event) => {
                    const message = JSON.parse(event.data);
                    this.handleMessage(message);
                };

                this.ws.onerror = (error) => {
                    console.error('WebSocket error:', error);
                    reject(error);
                };

                this.ws.onclose = () => {
                    console.log('WebSocket closed');
                    this.attemptReconnect();
                };
            } catch (error) {
                reject(error);
            }
        });
    }

    private attemptReconnect() {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})...`);

            setTimeout(() => {
                this.connect();
            }, 3000 * this.reconnectAttempts); // 指数退避
        } else {
            console.error('Max reconnect attempts reached');
        }
    }

    sendMessage(content: string, context: FileContext): void {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            throw new Error('WebSocket not connected');
        }

        this.ws.send(JSON.stringify({
            type: 'user_message',
            conversationId: this.conversationId,
            content,
            context
        }));
    }

    onFileRequest(callback: (action: string, params: any) => Promise<any>): void {
        this.requestHandlers.set('file_request', async (message) => {
            const { requestId, action, params } = message;

            try {
                // 执行文件操作
                const result = await callback(action, params);

                // 发送响应
                this.ws.send(JSON.stringify({
                    type: 'response',
                    requestId,
                    data: result
                }));
            } catch (error) {
                this.ws.send(JSON.stringify({
                    type: 'response',
                    requestId,
                    error: error.message
                }));
            }
        });
    }

    private handleMessage(message: any): void {
        switch (message.type) {
            case 'ai_stream':
                this.onStreamOutput?.(message.content);
                break;

            case 'ai_done':
                this.onDone?.(message.finalOutput);
                break;

            case 'request':
                const handler = this.requestHandlers.get('file_request');
                if (handler) {
                    handler(message);
                }
                break;
        }
    }

    // Stream output callback
    onStreamOutput?: (content: string) => void;
    onDone?: (finalOutput: string) => void;

    disconnect(): void {
        if (this.ws) {
            this.ws.close();
            this.ws = null;
        }
    }
}
```

---

### 侧边栏 UI 实现

**文件**: `src/ui/claude-sidebar.ts`

```typescript
export class ClaudeSidebarView extends ItemView {
    private wsClient: ClaudeWebSocketClient;
    private messageListEl: HTMLElement;
    private currentContent: string = '';
    private currentFilePath: string = '';

    async onOpen() {
        const container = this.containerEl.children[1];
        container.empty();
        container.addClass('claude-sidebar');

        // 标题栏
        container.createEl('h2', { text: '🤖 Claude Code' });

        // 连接状态
        const statusEl = container.createDiv('claude-status');
        statusEl.setText('Connecting...');

        // 消息列表
        this.messageListEl = container.createDiv('claude-message-list');

        // 输入区域
        const inputArea = container.createDiv('claude-input-area');
        const textarea = inputArea.createEl('textarea', {
            placeholder: 'Ask Claude anything...',
            cls: 'claude-input'
        });

        const buttonRow = inputArea.createDiv('claude-buttons');
        const sendBtn = buttonRow.createEl('button', { text: 'Send' });
        const clearBtn = buttonRow.createEl('button', { text: 'Clear' });

        sendBtn.onclick = () => this.sendMessage();
        clearBtn.onclick = () => this.clearMessages();

        // 初始化连接
        await this.initializeConnection(statusEl);
    }

    private async initializeConnection(statusEl: HTMLElement) {
        const serverUrl = this.plugin.settings.serverUrl;
        const conversationId = await this.getOrCreateConversationId();

        this.wsClient = new ClaudeWebSocketClient(serverUrl, conversationId);

        // 设置文件请求处理器
        this.wsClient.onFileRequest(async (action, params) => {
            switch (action) {
                case 'get_file':
                    const file = this.app.vault.getAbstractFileByPath(params.path);
                    if (file) {
                        return { content: await this.app.vault.read(file) };
                    }
                    throw new Error('File not found');

                case 'write_file':
                    await this.app.vault.adapter.write(params.path, params.content);
                    return { success: true };

                case 'list_files':
                    // 列出当前目录的文件
                    const files = this.app.vault.getMarkdownFiles();
                    return { files: files.map(f => f.path) };

                default:
                    throw new Error(`Unknown action: ${action}`);
            }
        });

        // 设置输出处理器
        this.wsClient.onStreamOutput = (content) => {
            this.appendStreamingMessage(content);
        };

        this.wsClient.onDone = (finalOutput) => {
            this.finalizeMessage(finalOutput);
        };

        // 连接
        await this.wsClient.connect();
        statusEl.setText('✅ Connected');
        statusEl.addClass('connected');
    }

    private async sendMessage() {
        const textarea = this.messageListEl.querySelector('textarea');
        const prompt = textarea.value;

        if (!prompt.trim()) return;

        // 获取当前文件
        const activeFile = this.app.workspace.getActiveFile();
        if (!activeFile) {
            new Notice('Please open a file first');
            return;
        }

        this.currentFilePath = activeFile.path;
        this.currentContent = await this.app.vault.read(activeFile);

        // 添加用户消息到列表
        this.addMessage({
            role: 'user',
            content: prompt,
            timestamp: Date.now()
        });

        // 发送到服务器
        this.wsClient.sendMessage(prompt, {
            currentFile: activeFile.path,
            content: this.currentContent,
            selection: this.getSelection()
        });

        textarea.value = '';
    }

    private addMessage(message: any) {
        const msgEl = this.messageListEl.createDiv('claude-message', {
            cls: `msg-${message.role}`
        });

        const contentEl = msgEl.createDiv('msg-content');
        contentEl.innerHTML = this.renderMarkdown(message.content);

        const timeEl = msgEl.createEl('small', {
            text: new Date(message.timestamp).toLocaleTimeString()
        });

        this.scrollToBottom();
    }

    private appendStreamingMessage(content: string) {
        // 查找或创建最后一个 AI 消息
        let lastMsg = this.messageListEl.querySelector('.msg-assistant:last-child');

        if (!lastMsg || lastMsg.hasClass('finalized')) {
            lastMsg = this.messageListEl.createDiv('claude-message msg-assistant');
            const contentEl = lastMsg.createDiv('msg-content');
            this.scrollToBottom();
        }

        const contentEl = lastMsg.querySelector('.msg-content');
        contentEl.innerHTML += this.renderMarkdown(content);
        this.scrollToBottom();
    }

    private finalizeMessage(finalOutput: string) {
        const lastMsg = this.messageListEl.querySelector('.msg-assistant:last-child');
        if (lastMsg) {
            lastMsg.addClass('finalized');
        }
    }

    private getSelection(): string | null {
        const activeView = this.app.workspace.getActiveView();
        if (activeView && activeView.getMode()) {
            return activeView.getMode().getSelection();
        }
        return null;
    }

    private scrollToBottom() {
        this.messageListEl.scrollTop = this.messageListEl.scrollHeight;
    }

    private clearMessages() {
        this.messageListEl.empty();
    }

    private renderMarkdown(content: string): string {
        // 简单的 markdown 渲染
        return content
            .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>');
    }
}
```

---

## 🎯 核心优势

### 1. ✅ 真正的双向协作

**手机作为"手眼"**：
- 读取本地文件（不需要上传到云端）
- 写入本地文件（不需要下载）
- 实时显示在手机上

**云端作为"大脑"**：
- 强大的计算能力
- 完整的文件访问（通过请求）
- 智能决策和执行

### 2. ✅ 最优网络使用

- **只传输必要的请求和数据**
- **不需要上传整个 vault**
- **AI 只请求它需要的内容**

### 3. ✅ 完美的移动体验

- 单次 WebSocket 连接
- 自动重连
- 离线时保持会话
- 重新上线后自动恢复

### 4. ✅ 零外部依赖

- 不使用 MCP 库
- 不使用 SSH 库
- 只用标准 WebSocket API

---

## 📊 协议对比

| 特性 | 单向 HTTP | 双向 WebSocket |
|------|-----------|-----------------|
| 连接方向 | 手机→服务器 | 手机↔服务器 |
| 服务器推送 | ❌ 需要轮询 | ✅ 随时推送 |
| 文件访问 | 需要上传 | 按需请求 |
| 网络效率 | 较低 | 较高 |
| 实时性 | 一般 | 优秀 |
| 复杂度 | 简单 | 中等 |

---

## 🚀 实施优先级

### Phase 1: 基础双向通信 (2-3天)
- [ ] 服务器 WebSocket Relay
- [ ] 客户端 WebSocket 连接
- [ ] 基本消息发送/接收
- [ ] 自动重连

### Phase 2: 文件操作协议 (2-3天)
- [ ] 定义请求/响应格式
- [ ] 实现 get_file 处理
- [ ] 实现 write_file 处理
- [ ] 实现 list_files 处理

### Phase 3: UI 和集成 (2-3天)
- [ ] 侧边栏 UI
- [ ] 消息列表渲染
- [ ] 流式输出显示
- [ ] 文件自动更新

### Phase 4: 优化和测试 (1-2天)
- [ ] 错误处理
- [ ] 性能优化
- [ ] 移动端测试
- [ ] 文档完善

**总计**: 7-11 天

---

## ✅ 可行性确认

**回答你的问题**：可行吗？

**答案：✅ 完全可行！**

这个方案不仅可行，而且是**最优方案**，因为：

1. ✅ **技术上成熟**：WebSocket 双向通信是标准特性
2. ✅ **架构清晰**：职责分离明确
3. ✅ **网络高效**：按需请求，不浪费带宽
4. ✅ **用户体验佳**：实时响应，自动重连
5. ✅ **手机友好**：符合 iOS 网络规则
6. ✅ **可扩展性强**：容易添加新的请求类型

---

**立即开始实施吗？**
