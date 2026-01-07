# Obsidian Claude Code Plugin - Remote Mode 配置指南

## 🎯 Remote Mode (WebSocket 模式) 配置

### 方法 1: 通过 Obsidian UI 配置（推荐）

#### 步骤 1: 打开插件设置
1. 在 Obsidian 中，点击左下角的 **齿轮图标** ⚙️
2. 选择 **"第三方插件"** / **"Community Plugins"**
3. 找到 **"Claude Code Integration"** 插件
4. 点击 **"选项"** / **"Options"** 按钮

#### 步骤 2: 配置 Remote Mode
在设置页面中，找到以下选项并配置：

```
┌─────────────────────────────────────────────────────┐
│ Remote Mode Settings                                │
├─────────────────────────────────────────────────────┤
│                                                     │
│ Enable Remote Mode    [✅] 启用                      │
│                                                     │
│ Server URL          [ws://localhost:8080        ]  │
│                                                     │
│ Auth Token          [                            ]  │
│                      (可选，留空表示无需认证)         │
│                                                     │
│ Auto Reconnect      [✅] 启用自动重连               │
│                                                     │
│ Reconnect Interval  [5000                     ] ms  │
│                      (重连间隔，毫秒)                │
│                                                     │
│ Max Reconnect       [10                       ]     │
│                      (最大重连次数)                  │
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### 步骤 3: 保存设置
- 点击右上角的 **"保存"** 或 **"确认"** 按钮
- 重新加载 Obsidian（如果需要）

---

### 方法 2: 通过配置文件设置

配置文件位置：
```
<你的 Vault 路径>/.obsidian/plugins/claude-code-integration/data.json
```

配置文件内容：
```json
{
  "claudeCodePath": "",
  "autoDetectPath": true,
  "modelAlias": "",
  "customSystemPrompt": "",
  "preserveCursorPosition": true,
  "timeoutSeconds": 300,
  "autoAcceptChanges": false,
  "allowVaultAccess": true,
  "enablePermissionlessMode": false,
  "anthropicBaseUrl": "",
  "anthropicAuthToken": "",
  "anthropicModel": "",
  "anthropicSmallFastModel": "",
  "language": "en",
  "enableRemoteMode": true,
  "remoteServerUrl": "ws://localhost:8080",
  "remoteAuthToken": "",
  "remoteAutoReconnect": true,
  "remoteReconnectInterval": 5000,
  "remoteMaxReconnectAttempts": 10
}
```

---

## 🔧 配置项说明

### 必需配置

| 配置项 | 值 | 说明 |
|--------|-----|------|
| `enableRemoteMode` | `true` | 启用 Remote/WebSocket 模式 |
| `remoteServerUrl` | `ws://localhost:8080` | Relay Server 的 WebSocket URL |

### 可选配置

| 配置项 | 默认值 | 说明 |
|--------|--------|------|
| `remoteAuthToken` | `""` (空) | 认证 Token（如果服务器需要） |
| `remoteAutoReconnect` | `true` | 启用自动重连 |
| `remoteReconnectInterval` | `5000` | 重连间隔（毫秒） |
| `remoteMaxReconnectAttempts` | `10` | 最大重连次数 |

---

## ✅ 验证连接

### 1. 检查连接状态
在 Obsidian 中打开 Claude Code 视图：
- 查看 **连接状态指示器**：
  - 🟢 **绿色**: 已连接
  - 🔵 **蓝色脉冲**: 正在连接
  - 🔴 **红色**: 连接失败

### 2. 测试消息
发送一条测试消息：
```
Hello, are you connected?
```

如果成功，你应该会：
- 收到 AI 的响应
- 看到流式输出（逐字显示）
- 在 "Tool Calls" 面板看到任何工具调用

### 3. 查看日志
打开 Obsidian 开发者工具：
1. 按 `Ctrl+Shift+I` (Linux/Windows) 或 `Cmd+Option+I` (Mac)
2. 切换到 **Console** 标签
3. 查看是否有错误信息

---

## 🌐 不同的服务器 URL 配置

### 本地服务器
```
ws://localhost:8080
```

### 局域网服务器
```
ws://192.168.1.100:8080
# 或
ws://my-server.local:8080
```

### 远程服务器（带 SSL）
```
wss://relay.example.com
```

### 远程服务器（带端口）
```
wss://relay.example.com:8443
```

---

## 🔐 安全配置（可选）

### 如果服务器需要认证

#### 1. 在服务器端设置 Token
在 Relay Server 的 `.env` 文件中：
```bash
ENABLE_AUTH=true
AUTH_TOKEN=your_secure_token_here
```

#### 2. 在客户端配置 Token
在 Obsidian 插件设置中：
```
Auth Token: your_secure_token_here
```

或在配置文件中：
```json
{
  "remoteAuthToken": "your_secure_token_here"
}
```

---

## 🐛 故障排除

### 问题 1: 无法连接到服务器

**症状**: 连接状态显示红色 🔴

**解决方案**:
1. 检查服务器是否运行：
   ```bash
   pgrep -f "node src/server.js"
   netstat -tuln | grep 8080
   ```

2. 检查防火墙：
   ```bash
   sudo ufw status
   sudo ufw allow 8080/tcp
   ```

3. 检查 URL 格式：
   - 使用 `ws://` 而不是 `http://`
   - 确保端口号正确
   - 尝试使用 `127.0.0.1` 而不是 `localhost`

### 问题 2: 连接后立即断开

**解决方案**:
1. 检查服务器日志
2. 确认服务器配置正确
3. 检查是否需要认证 Token

### 问题 3: 无法看到流式响应

**解决方案**:
1. 确认浏览器支持 WebSocket
2. 检查网络连接稳定性
3. 查看 Console 中的错误信息

---

## 📊 性能优化建议

### 网络优化
- 使用局域网服务器而非公网
- 启用 WebSocket 压缩（如果支持）
- 调整重连间隔（网络不稳定时增加）

### 服务器优化
- 使用 PM2 管理进程
- 启用日志级别控制
- 配置适当的超时时间

---

## 🎉 成功连接的标志

当你成功连接后，你应该看到：

✅ **连接状态**: 绿色指示器
✅ **模式显示**: "Mode: WebSocket"
✅ **流式响应**: AI 回复逐字显示
✅ **工具调用**: 可以看到工具执行状态
✅ **实时更新**: 无延迟的交互体验

---

**最后更新**: 2025-01-07
**Relay Server 状态**: ✅ 运行中 (ws://localhost:8080)
