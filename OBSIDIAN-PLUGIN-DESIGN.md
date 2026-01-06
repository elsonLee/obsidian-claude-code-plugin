# Obsidian Claude Code Plugin - 实现设计方案

## 📋 项目概述

基于已验证的 MCP Bridge 架构，实现完整的 Obsidian 插件，提供 Claude Code CLI 集成和 MCP 工具支持。

## 🏗️ 系统架构

### 整体架构图

```
┌─────────────────────────────────────────────────────────────┐
│                    Obsidian Application                      │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │           Claude Code Plugin (TypeScript)              │ │
│  │                                                         │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐ │ │
│  │  │   UI Layer   │  │ Business     │  │   Data       │ │ │
│  │  │              │  │ Logic Layer  │  │   Layer      │ │ │
│  │  │  - Chat View │  │              │  │              │ │ │
│  │  │  - Settings  │  │  - Session   │  │  - Vault     │ │ │
│  │  │  - Commands  │  │    Manager   │  │    Manager   │ │ │
│  │  └──────┬───────┘  │  - Context   │  │  - Storage   │ │ │
│  │         │          │    Provider  │  │    Manager   │ │ │
│  │         │          └──────┬───────┘  └──────┬───────┘ │ │
│  │         │                 │                   │       │ │
│  │         ▼                 ▼                   ▼       │ │
│  │  ┌──────────────────────────────────────────────────┐ │ │
│  │  │         WebSocket Client + MCP Handler            │ │ │
│  │  │                                                    │ │ │
│  │  │  ┌──────────────────┐      ┌──────────────────┐  │ │ │
│  │  │  │ WebSocket Client │      │  MCP Handler     │  │ │ │
│  │  │  │                  │      │                  │  │ │ │
│  │  │  │  - Connection    │      │  - Tool Registry │  │ │ │
│  │  │  │  - Messaging     │      │  - Request Router│  │ │ │
│  │  │  │  - Reconnect     │      │  - Response Handler│ │ │
│  │  │  └────────┬─────────┘      └────────┬─────────┘  │ │ │
│  │  └───────────┼─────────────────────────┼────────────┘ │ │
│  └──────────────┼─────────────────────────┼────────────────┘
│                 │                         │
└─────────────────┼─────────────────────────┼──────────────────┘
                  │                         │
                  │ WebSocket               │
                  ▼                         ▼
┌─────────────────────────────────────────────────────────────┐
│                  Relay Server (Port 8080)                     │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │           Multi-Client Session Manager               │  │
│  │                                                      │  │
│  │  Session: {                                         │  │
│  │    conversationId,                                 │  │
│  │    clients: Set<WebSocket>,                        │  │
│  │    messageForwarding                                │  │
│  │  }                                                  │  │
│  └────────────┬─────────────────────────┬───────────────┘  │
└───────────────┼─────────────────────────┼───────────────────┘
                │                         │
                │ Forward                 │ Forward
                ▼                         ▼
┌───────────────────────┐    ┌──────────────────────────────────┐
│   MCP Bridge          │    │   Another Client (e.g., Mobile)  │
│  (Server-v2.js)       │    │                                    │
│                       │    │  - Same conversationId           │
│  - Stdio ↔ WS         │    │  - Receive forwarded messages    │
│  - MCP Protocol        │    │                                    │
│  - Tool Execution     │    │                                    │
└───────────────────────┘    └────────────────────────────────────┘
```

## 📁 目录结构

```
obsidian-claude-code-plugin/
├── src/
│   ├── main.ts                      # Plugin entry point
│   │
│   ├── core/                        # Core business logic
│   │   ├── types.ts                 # Shared type definitions
│   │   ├── settings.ts              # Plugin settings management
│   │   │
│   │   ├── websocket/               # WebSocket communication
│   │   │   ├── websocket-client.ts # WebSocket client implementation
│   │   │   ├── message-handler.ts   # Message routing and handling
│   │   │   └── connection-manager.ts # Connection lifecycle
│   │   │
│   │   ├── mcp/                     # MCP protocol implementation
│   │   │   ├── mcp-handler.ts       # MCP request/response handler
│   │   │   ├── mcp-types.ts         # MCP protocol types
│   │   │   ├── tool-registry.ts     # Tool registration and management
│   │   │   └── obsidian-tools/      # Obsidian tool implementations
│   │   │       ├── list-files.ts
│   │   │       ├── get-file.ts
│   │   │       ├── search.ts
│   │   │       ├── create-file.ts
│   │   │       ├── update-file.ts
│   │   │       └── health-check.ts
│   │   │
│   │   ├── session/                 # Session management
│   │   │   ├── session-manager.ts   # Session lifecycle
│   │   │   ├── context-provider.ts  # Note context extraction
│   │   │   └── history-manager.ts   # Chat history persistence
│   │   │
│   │   └── storage/                 # Data persistence
│   │       ├── storage-manager.ts   # Plugin data storage
│   │       └── vault-manager.ts     # Vault operations wrapper
│   │
│   ├── ui/                          # User interface
│   │   ├── views/
│   │   │   ├── chat-view.ts         # Main chat interface
│   │   │   └── settings-view.ts     # Settings interface
│   │   │
│   │   ├── components/              # UI components
│   │   │   ├── message-list.ts      # Chat message display
│   │   │   ├── input-box.ts         # User input
│   │   │   └── status-indicator.ts  # Connection status
│   │   │
│   │   └── renderers/               # Output rendering
│   │       ├── markdown-renderer.ts # Markdown formatting
│   │       └── code-renderer.ts     # Code block highlighting
│   │
│   └── utils/                       # Utilities
│       ├── logger.ts                # Logging utilities
│       ├── debounce.ts              # Debounce helper
│       └── constants.ts             # Constants
│
├── docs/                            # Documentation
│   ├── ARCHITECTURE.md              # Architecture overview
│   ├── MCP-PROTOCOL.md              # MCP implementation guide
│   └── API.md                       # Plugin API reference
│
├── manifest.json                    # Plugin manifest
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 核心模块设计

### 1. WebSocket Client (`src/core/websocket/websocket-client.ts`)

**职责**: 管理 WebSocket 连接，处理消息收发

**接口设计**:
```typescript
interface WebSocketClient {
    // Connection management
    connect(url: string, conversationId: string): Promise<void>;
    disconnect(): void;
    reconnect(): Promise<void>;
    isConnected(): boolean;

    // Messaging
    send(message: WSMessage): void;
    onMessage(callback: (message: WSMessage) => void): void;
    onError(callback: (error: Error) => void): void;

    // Connection state
    getConnectionState(): ConnectionState;
}
```

**关键实现**:
- 自动重连机制（指数退避）
- 心跳检测
- 消息队列（离线时缓存）
- 连接状态管理

### 2. MCP Handler (`src/core/mcp/mcp-handler.ts`)

**职责**: 处理 MCP 协议请求和响应

**接口设计**:
```typescript
interface MCPHandler {
    // Tool management
    registerTool(tool: MCPTool): void;
    unregisterTool(name: string): void;
    listTools(): MCPTool[];

    // Request handling
    handleRequest(request: MCPRequest): Promise<MCPResponse>;

    // Protocol
    initialize(): Promise<InitResponse>;
}

interface MCPTool {
    name: string;
    description: string;
    inputSchema: JSONSchema;
    execute(args: any): Promise<ToolResult>;
}
```

**关键实现**:
- 工具注册表
- 请求路由
- 响应序列化
- 错误处理

### 3. Obsidian Tools (`src/core/mcp/obsidian-tools/`)

**已实现的工具**:

1. **health_check** - 健康检查
   ```typescript
   execute(): Promise<{ connected: boolean; vault: string }>
   ```

2. **list_files_in_vault** - 列出文件
   ```typescript
   execute(args: { extensions?: string[] }): Promise<string[]>
   ```

3. **get_file_contents** - 获取文件内容
   ```typescript
   execute(args: { path: string }): Promise<string>
   ```

4. **search** - 搜索文件
   ```typescript
   execute(args: { query: string }): Promise<SearchResult[]>
   ```

5. **create_file** - 创建文件
   ```typescript
   execute(args: { path: string; content: string }): Promise<void>
   ```

6. **update_file** - 更新文件
   ```typescript
   execute(args: { path: string; content: string }): Promise<void>
   ```

### 4. Session Manager (`src/core/session/session-manager.ts`)

**职责**: 管理用户会话和上下文

**接口设计**:
```typescript
interface SessionManager {
    // Session lifecycle
    createSession(note: TFile): Session;
    getSession(note: TFile): Session | null;
    closeSession(note: TFile): void;

    // Context
    updateContext(note: TFile): void;
    getContext(note: TFile): NoteContext;

    // History
    addToHistory(note: TFile, message: ChatMessage): void;
    getHistory(note: TFile): ChatMessage[];
}

interface NoteContext {
    filePath: string;
    content: string;
    frontmatter: any;
    tags: string[];
    links: Link[];
}
```

### 5. UI Components (`src/ui/`)

**Chat View** (`src/ui/views/chat-view.ts`):
- 消息列表（用户 + AI）
- 输入框
- 状态指示器
- 工具栏按钮

**Settings View** (`src/ui/views/settings-view.ts`):
- Relay Server URL 配置
- Conversation ID 管理
- 连接设置
- 调试选项

## 🔄 消息流程

### 用户消息流程

```
1. 用户输入消息
   └─> Chat View (input-box.ts)
       └─> Session Manager (create message object)

2. 构建上下文
   └─> Context Provider (extract note info)
       └─> NoteContext { content, tags, links, etc. }

3. 发送到 Relay Server
   └─> WebSocket Client (send)
       └─> WSMessage { type: 'user_message', ... }

4. Relay Server 转发
   └─> Multi-client forwarding
       └─> MCP Bridge / Other clients

5. 接收响应
   └─> WebSocket Client (onMessage)
       └─> Message Handler (route to appropriate handler)

6. 显示响应
   └─> Chat View (render message)
```

### MCP 工具调用流程

```
1. Claude Code 请求工具
   └─> MCP Bridge (stdio)
       └─> Relay Server (WebSocket)

2. Relay Server 转发
   └─> Obsidian Plugin (WebSocket)

3. MCP Handler 处理
   └─> Tool Router (route to tool)
       └─> Obsidian Tool (execute)

4. 工具执行
   └─> Vault Manager (Obsidian API)
       └─> Result

5. 返回响应
   └─> MCP Handler (format response)
       └─> WebSocket Client (send)
       └─> Relay Server (forward back)
       └─> MCP Bridge (stdio)
```

## 📝 实现计划

### Phase 1: 核心基础设施 (Week 1)

- [x] MCP Protocol 类型定义
- [ ] WebSocket Client 实现
- [ ] MCP Handler 实现
- [ ] 基础工具注册表

### Phase 2: Obsidian 工具 (Week 1-2)

- [ ] health_check 工具
- [ ] list_files_in_vault 工具
- [ ] get_file_contents 工具
- [ ] search 工具
- [ ] create_file 工具
- [ ] update_file 工具

### Phase 3: 用户界面 (Week 2)

- [ ] Chat View 布局
- [ ] 消息列表组件
- [ ] 输入框组件
- [ ] 状态指示器
- [ ] Settings View

### Phase 4: 集成与测试 (Week 3)

- [ ] Session Manager 集成
- [ ] Context Provider 实现
- [ ] 端到端测试
- [ ] 错误处理完善

### Phase 5: 优化与文档 (Week 4)

- [ ] 性能优化
- [ ] 用户体验改进
- [ ] 文档完善
- [ ] 示例和教程

## 🔗 关键依赖

```json
{
  "dependencies": {
    "@modelcontextprotocol/sdk": "^1.x",
    "obsidian": "latest",
    "ws": "^8.x"
  },
  "devDependencies": {
    "@types/node": "^20.x",
    "typescript": "^5.x",
    "obsidian-sample-plugin": "latest"
  }
}
```

## 🎯 配置示例

**Plugin Settings** (`manifest.json` + `data.json`):
```json
{
  "relayServerUrl": "ws://localhost:8080",
  "conversationId": "obsidian-claude-main",
  "autoReconnect": true,
  "reconnectInterval": 5000,
  "maxRetries": 10,
  "debugMode": false
}
```

## 📊 性能目标

- **连接建立**: < 2 秒
- **消息延迟**: < 500 ms (P95)
- **工具调用**: < 1 秒
- **UI 响应**: < 100 ms
- **内存占用**: < 50 MB

## 🔒 安全考虑

1. **Conversation ID 隔离**
   - 每个插件实例使用唯一 ID
   - 防止跨会话数据泄露

2. **文件访问控制**
   - 仅访问当前 vault
   - 遵守 Obsidian 权限模型

3. **输入验证**
   - 验证所有工具参数
   - 防止路径遍历攻击

4. **错误处理**
   - 不暴露敏感信息
   - 优雅降级

## 🧪 测试策略

### 单元测试
- WebSocket Client
- MCP Handler
- Tool implementations
- Session Manager

### 集成测试
- Relay Server 集成
- MCP Bridge 集成
- 端到端消息流

### 手动测试
- UI 交互测试
- 性能测试
- 压力测试（大数据量）

## 📚 参考资料

- [Obsidian Plugin Docs](https://docs.obsidian.md/Plugins/Getting+started/Build+a+plugin)
- [MCP Protocol Spec](https://modelcontextprotocol.io/)
- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**设计版本**: 1.0
**最后更新**: 2026-01-07
**状态**: 📝 Design Phase
