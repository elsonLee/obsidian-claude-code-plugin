# MCP 协议研究与 Obsidian 集成分析

## 目录
1. [MCP 协议概述](#mcp-协议概述)
2. [MCP 架构](#mcp-架构)
3. [Obsidian MCP 需求分析](#obsidian-mcp-需求分析)
4. [现有实现参考](#现有实现参考)
5. [WebSocket + MCP 桥接设计](#websocket--mcp-桥接设计)

---

## MCP 协议概述

### 什么是 MCP?

**Model Context Protocol (MCP)** 是 Anthropic 在 2025 年推出的开放协议，用于标准化 LLM 应用与外部数据源和工具的集成。

**核心特性**:
- 基于 **JSON-RPC 2.0** 消息格式
- **有状态连接** (Stateful connections)
- **能力协商** (Capability negotiation)
- 类似于 Language Server Protocol (LSP) 的思想

### MCP 规范版本

- **最新规范**: 2025-11-25 (November 25, 2025)
- **前版本**: 2025-06-18 (June 18, 2025)
- **官方仓库**: https://github.com/modelcontextprotocol/modelcontextprotocol
- **官方文档**: https://modelcontextprotocol.io/specification/2025-11-25/

---

## MCP 架构

### 三个核心组件

```
┌─────────────────────────────────────────────────────┐
│                 MCP Ecosystem                       │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────┐         ┌──────────┐         ┌──────┐│
│  │   Host   │────┬────│  Client  │────┬────│Server││
│  │          │    │    │          │    │    │      ││
│  │ (LLM App)│    │    │(Connector)│    │    │(Data)││
│  └──────────┘    │    └──────────┘    │    └──────┘│
│                  │                     │             │
│           (initiates)          (manages)    (provides) │
│                                     connections        │
│                                  and messages         │
│                                      context            │
└─────────────────────────────────────────────────────┘
```

### 1. **Host (宿主应用)**
- 发起连接的 LLM 应用程序
- 例如: Claude Desktop, Cursor, VS Code + AI 插件

### 2. **Client (客户端)**
- Host 应用内的连接器
- 管理与 MCP 服务器的连接和消息
- 协调服务器之间的交互

### 3. **Server (服务器)**
- 提供上下文和能力的服务的
- 可以提供多种功能

### MCP 服务器功能

#### **服务器提供的功能**:

1. **Resources (资源)**
   - 上下文和数据
   - 供用户或 AI 模型使用
   - 例如: 文件内容、数据库记录、API 响应

2. **Prompts (提示模板)**
   - 预定义的消息和工作流
   - 供用户使用
   - 例如: "总结会议记录"、"生成报告模板"

3. **Tools (工具)**
   - AI 模型可以执行的函数
   - 例如: 文件读写、搜索、数据库查询

#### **客户端提供的功能**:

1. **Sampling (采样)**
   - 服务器发起的代理行为
   - 递归 LLM 交互
   - 允许服务器请求客户端执行 LLM 调用

2. **Roots (根)**
   - 服务器发起的 URI 或文件系统边界查询
   - 确定操作范围

3. **Elicitation (引出)**
   - 服务器发起的用户信息请求
   - 获取额外的上下文

---

## Obsidian MCP 需求分析

### Obsidian 需要暴露的核心功能

基于现有 Obsidian MCP 服务器实现，以下是关键需求：

#### **1. 文件系统访问** (最核心)

**Resources**:
- 读取笔记内容
- 列出目录结构
- 获取文件元数据

**Tools**:
- `list_files_in_vault`: 列出 vault 根目录的所有文件和文件夹
- `list_files_in_dir`: 列出特定目录的文件和文件夹
- `get_file_contents`: 返回单个文件的内容
- `patch_content`: 向现有笔记插入内容（相对于标题、块引用或 frontmatter 字段）
- `append_content`: 向新文件或现有文件追加内容
- `delete_file`: 从 vault 删除文件或目录
- `create_file`: 创建新文件

#### **2. 搜索功能** (重要)

**Tools**:
- `search`: 在 vault 的所有文件中搜索匹配指定文本查询的文档
- 支持全文搜索
- 支持正则表达式
- 返回匹配的文件路径和上下文

#### **3. 元数据访问** (增强)

**Resources**:
- 读取 frontmatter (YAML 元数据)
- 获取标签列表
- 获取链接结构
- 获取附件信息

#### **4. 实时更新** (可选)

- 监听文件变化
- 实时同步更新

### Obsidian REST API 集成

大多数 Obsidian MCP 服务器都通过 **Obsidian Local REST API** 插件实现:

**配置**:
```json
{
  "OBSIDIAN_API_KEY": "<api_key>",
  "OBSIDIAN_HOST": "127.0.0.1",
  "OBSIDIAN_PORT": "27124"
}
```

**REST API 端点**:
- `GET /vault/` - 列出文件
- `GET /vault/{path}` - 获取文件内容
- `PUT /vault/{path}` - 创建/更新文件
- `PATCH /vault/{path}` - 部分更新文件
- `DELETE /vault/{path}` - 删除文件
- `POST /search/{query}` - 搜索文件

---

## 现有实现参考

### 1. **MarkusPfundstein/mcp-obsidian** (参考实现)

**仓库**: https://github.com/MarkusPfundstein/mcp-obsidian

**实现的 Tools**:
- ✅ `list_files_in_vault`
- ✅ `list_files_in_dir`
- ✅ `get_file_contents`
- ✅ `search`
- ✅ `patch_content`
- ✅ `append_content`
- ✅ `delete_file`

**特点**:
- 使用 Obsidian REST API
- Python 实现 (使用 uv/uvx)
- 支持 Claude Desktop 配置

### 2. **其他实现**

**cyanheads/obsidian-mcp-server**:
- 知识管理 MCP 服务器
- AI 代理和开发工具交互

**marcelmarais/obsidian-mcp-server**:
- 轻量级实现
- 支持 Cursor 和 Claude

**jacksteamdev/obsidian-mcp-tools**:
- 完整源代码在 `packages/mcp-server/`
- 提供签名可执行文件

### 实现要点

**所有实现的共同点**:
1. 使用 **Obsidian Local REST API** 插件
2. 实现 **MCP Tools** (主要功能接口)
3. 提供 **Resources** (文件访问)
4. 支持 **搜索** 功能
5. 使用 **stdio** 传输 (标准 MCP 传输层)

---

## WebSocket + MCP 桥接设计

### 目标架构

```
┌─────────────────────────────────────────────────────────┐
│                 Remote Architecture                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Mobile/Remote Obsidian                    Cloud Server │
│  ┌──────────────────┐                    ┌────────────┐ │
│  │ Obsidian Plugin  │                    │   MCP      │ │
│  │                  │                    │  Server    │ │
│  │ - WebSocket      │◄────────WebSocket────►  (via      │ │
│  │   Client         │                    │   stdio)   │ │
│  │ - File Handlers  │                    │            │ │
│  └──────────────────┘                    └────────────┘ │
│           │                                      │      │
│           │   Local File Access                 │      │
│           ▼                                      ▼      │
│  ┌──────────────────┐              ┌──────────────────┐│
│  │   Local Vault    │              │  Claude Code CLI ││
│  │   (Mobile)       │              │                  ││
│  └──────────────────┘              └──────────────────┘│
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### 设计方案

#### **方案 A: MCP 服务器作为 WebSocket 客户端**

```
Obsidian Plugin (Mobile)          Cloud Server
      │                                   │
      │  1. WebSocket Connect             │
      │──────────────────────────────────►│
      │                                   │
      │  2. File Request (WebSocket)       │
      │◄──────────────────────────────────│
      │                                   │
      │  3. File Content (WebSocket)       │
      │──────────────────────────────────►│
      │                                   │
      │                                   │ 4. MCP Request (stdio)
      │                                   │────────────────────►
      │                                   │                    MCP Server
      │                                   │◄─────────────────────┤
      │  5. Result (WebSocket)             │
      │◄──────────────────────────────────│
```

**优点**:
- MCP 服务器保持原有实现
- WebSocket 只负责传输
- 职责分离清晰

**缺点**:
- 需要额外的协议转换层

#### **方案 B: MCP 协议直接映射到 WebSocket** (推荐)

```
MCP Request (JSON-RPC)          WebSocket Message (JSON)
      │                                   │
      │  {                                 │
      │    "jsonrpc": "2.0",              │  {
      │    "method": "tools/call",         │    "type": "mcp_request",
      │    "params": {                     │    "mcp": { ... }
      │      "name": "get_file",           │  }
      │      "arguments": {                │
      │        "path": "note.md"           │
      │      }                             │
      │    }                               │
      │  }                                 │
      ▼                                   ▼
```

**实现**:
- 直接将 MCP JSON-RPC 消息封装在 WebSocket 消息中
- Obsidian 插件实现 MCP 协议解析
- 云端 MCP 服务器通过 WebSocket 与插件通信

### WebSocket 消息协议扩展

#### **现有协议**:
```json
{
  "type": "user_message",
  "conversationId": "uuid",
  "content": "..."
}
```

#### **扩展协议** (添加 MCP 消息类型):
```json
{
  "type": "mcp_request",
  "requestId": "req-123",
  "mcp": {
    "jsonrpc": "2.0",
    "method": "tools/call",
    "params": {
      "name": "get_file_contents",
      "arguments": {
        "path": "note.md"
      }
    }
  }
}
```

**响应**:
```json
{
  "type": "mcp_response",
  "requestId": "req-123",
  "mcp": {
    "jsonrpc": "2.0",
    "result": {
      "content": [
        {
          "type": "text",
          "text": "# Note Content\n..."
        }
      ]
    }
  }
}
```

---

## 实现步骤

### Phase 1: MCP 协议实现 (插件端)

1. **添加 MCP 消息处理**
   - 解析 JSON-RPC 2.0 消息
   - 实现 MCP 方法调度器
   - 处理 Resources、Prompts、Tools

2. **实现 Obsidian MCP Tools**
   - `list_files_in_vault`
   - `get_file_contents`
   - `search`
   - `create_file`
   - `update_file`
   - `delete_file`

3. **实现 MCP Resources**
   - 文件作为资源
   - 目录作为资源集合
   - 支持资源订阅

### Phase 2: WebSocket 协议扩展

1. **添加 MCP 消息类型**
   - `mcp_request`
   - `mcp_response`
   - `mcp_notification`

2. **实现消息路由**
   - MCP 请求 → Obsidian 操作
   - Obsidian 事件 → MCP 通知

### Phase 3: 服务器端桥接

1. **MCP WebSocket 适配器**
   - WebSocket → stdio 转换
   - stdio → WebSocket 转换
   - 消息格式适配

2. **MCP 服务器集成**
   - 使用现有 MCP SDK
   - 或直接实现 JSON-RPC

---

## 关键技术点

### 1. **JSON-RPC 2.0**

```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": { ... },
  "id": 1
}
```

### 2. **MCP Tools 定义**

```typescript
{
  name: "get_file_contents",
  description: "Return the content of a single file",
  inputSchema: {
    type: "object",
    properties: {
      path: {
        type: "string",
        description: "File path in vault"
      }
    },
    required: ["path"]
  }
}
```

### 3. **WebSocket 封装**

```typescript
interface MCPWebSocketMessage {
  type: 'mcp_request' | 'mcp_response' | 'mcp_notification';
  requestId?: string;
  mcp: JSONRPCRequest | JSONRPCResponse;
}
```

---

## 安全考虑

### MCP 安全原则 (从规范中提取)

1. **用户同意和控制**
   - 用户必须明确同意所有数据访问和操作
   - 用户必须控制共享的数据和执行的操作

2. **数据隐私**
   - 必须获得用户明确同意才能暴露用户数据
   - 不得在未经同意的情况下传输资源数据

3. **工具安全**
   - 工具代表任意代码执行，必须谨慎对待
   - 必须获得用户明确同意才能调用任何工具

4. **LLM 采样控制**
   - 用户必须明确批准任何 LLM 采样请求
   - 用户应控制采样是否发生、发送的提示和服务器可以看到的结果

---

## 下一步行动

### 立即行动项:

1. ✅ **研究完成** - MCP 协议和 Obsidian 需求
2. ⏳ **设计 MCP WebSocket 消息格式**
3. ⏳ **实现插件端 MCP 协议解析**
4. ⏳ **实现 Obsidian MCP Tools**
5. ⏳ **实现服务器端 WebSocket → MCP 适配器**
6. ⏳ **端到端测试**

### 参考资源:

- **MCP 规范**: https://modelcontextprotocol.io/specification/2025-11-25/
- **MCP GitHub**: https://github.com/modelcontextprotocol/modelcontextprotocol
- **Obsidian REST API**: https://github.com/coddingtonbear/obsidian-local-rest-api
- **参考实现**: https://github.com/MarkusPfundstein/mcp-obsidian

---

## 总结

MCP 协议为 Obsidian 与 AI 的集成提供了标准化方式。我们的架构可以通过以下方式实现 MCP 支持：

1. **插件端**: 实现 MCP 协议解析和 Obsidian Tools
2. **WebSocket 传输**: 封装 MCP JSON-RPC 消息
3. **服务器端**: WebSocket → MCP stdio 适配器

这种设计允许:
- 移动 Obsidian 通过 WebSocket 连接云端
- 云端 MCP 服务器通过 WebSocket 与插件通信
- 完全兼容 MCP 生态系统
- 保持现有的 WebSocket 中继架构

**关键创新**: 使用 WebSocket 作为 MCP 的传输层，而不是 stdio，实现真正的远程 MCP 集成。
