# Server Deployment & Client Configuration Guide

This guide explains how to deploy the Relay Server and configure the Obsidian Claude Code plugin for WebSocket mode.

## Table of Contents

1. [Overview](#overview)
2. [Server Deployment](#server-deployment)
3. [Client Configuration](#client-configuration)
4. [Integration & Testing](#integration--testing)
5. [Troubleshooting](#troubleshooting)
6. [Production Considerations](#production-considerations)

---

## Overview

The Obsidian Claude Code plugin supports two communication modes:

### Stdio Mode (Default)
- Spawns `claude` CLI as a child process
- Communicates via stdin/stdout
- No server required
- Best for: Local development, single-user setups

### WebSocket Mode
- Connects to a Relay Server via WebSocket
- Real-time bidirectional communication
- Supports streaming responses and remote tool calls
- Best for: Remote deployments, multiple users, advanced workflows

**This guide focuses on WebSocket mode deployment.**

---

## Server Deployment

The Relay Server acts as a bridge between the Obsidian plugin and the Anthropic API.

### Prerequisites

- Node.js 18+ and npm
- Unix-like operating system (Linux/macOS) or Windows with WSL
- Anthropic API key
- (Optional) Docker for containerized deployment

### Option 1: Using claude-websocket-relay

#### Clone and Build

```bash
# Clone the relay server repository
git clone https://github.com/your-org/claude-websocket-relay.git
cd claude-websocket-relay

# Install dependencies
npm install

# Build the project
npm run build
```

#### Configuration

Create a `.env` file in the relay server directory:

```bash
# Anthropic API Configuration
ANTHROPIC_API_KEY=your_api_key_here

# Server Configuration
PORT=8080
HOST=0.0.0.0

# CORS Configuration (if needed)
CORS_ORIGIN=*

# Security (Optional)
ENABLE_AUTH=false
AUTH_TOKEN=your_optional_token_here

# Logging
LOG_LEVEL=info
```

#### Run the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

**Using PM2 (recommended for production):**
```bash
# Install PM2
npm install -g pm2

# Start server with PM2
pm2 start dist/server.js --name "claude-relay"

# Configure PM2 to start on system boot
pm2 startup
pm2 save
```

### Option 2: Docker Deployment

#### Dockerfile Example

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Expose port
EXPOSE 8080

# Start the server
CMD ["npm", "start"]
```

#### docker-compose.yml Example

```yaml
version: '3.8'

services:
  claude-relay:
    build: .
    container_name: claude-websocket-relay
    ports:
      - "8080:8080"
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - PORT=8080
      - HOST=0.0.0.0
      - LOG_LEVEL=info
    restart: unless-stopped
    networks:
      - claude-network

networks:
  claude-network:
    driver: bridge
```

#### Deploy with Docker

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f claude-relay

# Stop the container
docker-compose down
```

### Option 3: Cloud Deployment

#### AWS EC2 Deployment

```bash
# Launch EC2 instance (Ubuntu 22.04 recommended)
# SSH into the instance
ssh -i your-key.pem ubuntu@your-ec2-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone and setup relay server
git clone https://github.com/your-org/claude-websocket-relay.git
cd claude-websocket-relay
npm install
npm run build

# Configure environment
cp .env.example .env
nano .env  # Edit with your API key and settings

# Start with PM2
sudo npm install -g pm2
pm2 start dist/server.js --name "claude-relay"
pm2 startup
pm2 save
```

#### Configure Security Group

In AWS Console, allow inbound traffic:
- Port 8080 (TCP) from your IP address
- SSH (22) from your IP address

#### Configure Domain with SSL (Recommended)

```bash
# Install nginx
sudo apt-get install nginx

# Install certbot for SSL
sudo apt-get install certbot python3-certbot-nginx

# Obtain SSL certificate
sudo certbot --nginx -d your-domain.com

# Configure nginx reverse proxy
sudo nano /etc/nginx/sites-available/claude-relay
```

**nginx configuration:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl;
    server_name your-domain.com;

    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Client Configuration

### Obsidian Plugin Setup

#### 1. Install the Plugin

```bash
# In your Obsidian vault plugins directory
cd .obsidian/plugins/
git clone https://github.com/your-org/obsidian-claude-code-plugin.git claude-code-integration
cd claude-code-integration
npm install
npm run build
```

Or install via the Obsidian Community Plugins browser.

#### 2. Enable WebSocket Mode

Open Obsidian Settings → Claude Code Integration

**Connection Settings:**
- **Mode**: Select "WebSocket" (instead of "Stdio")
- **Server URL**: Enter your Relay Server URL
  - Local: `ws://localhost:8080`
  - Remote: `wss://your-domain.com` (if using SSL)
  - Custom: `ws://your-server-ip:8080`

**Advanced Settings:**
- **Auto-reconnect**: Enable automatic reconnection (recommended)
- **Reconnect interval**: 5000ms (5 seconds)
- **Max reconnect attempts**: 10
- **Connection timeout**: 30000ms (30 seconds)

#### 3. Configure Environment Variables (Optional)

Create a `.obsidian/plugins/claude-code-integration/.env` file:

```bash
# Relay Server Configuration
RELAY_SERVER_URL=ws://localhost:8080
RELAY_SERVER_TIMEOUT=30000

# Connection Settings
AUTO_RECONNECT=true
MAX_RECONNECT_ATTEMPTS=10
RECONNECT_INTERVAL=5000

# Feature Flags
ENABLE_STREAMING=true
ENABLE_TOOL_CALLS=true

# Logging
LOG_LEVEL=debug
```

#### 4. Verify Connection

1. Open the Claude Code view in Obsidian
2. Check the connection status indicator:
   - Gray with pulse: Connecting
   - Green: Connected
   - Red: Connection failed
3. If connected, you should see "Mode: WebSocket" displayed

---

## Integration & Testing

### Test Basic Connection

```bash
# In the plugin directory, run tests
npm test
```

### Test WebSocket Connection

1. Open Obsidian with a note loaded
2. Open the Claude Code view
3. Send a test message: "Hello, are you connected?"
4. Verify:
   - Connection status shows green
   - Response appears in real-time (streaming)
   - No errors in console (Ctrl+Shift+I for DevTools)

### Test Tool Calls

1. Send a message that requires a tool call:
   ```
   Read the current note and summarize it
   ```
2. Verify:
   - Tool call appears in the "Tool Calls" panel
   - Status updates: pending → running → completed
   - Result is displayed after completion
   - Duration is tracked

### Test Streaming Response

1. Send a message that generates a long response:
   ```
   Explain the architecture of this plugin in detail
   ```
2. Verify:
   - Response appears incrementally (word by word)
   - Status shows "Streaming..." with pulse animation
   - Changes to "Complete" when finished
   - Metadata is displayed (model, tokens, finish reason)

### Monitor Server Logs

```bash
# If using PM2
pm2 logs claude-relay

# If using Docker
docker-compose logs -f claude-relay

# If running directly
npm run dev
```

---

## Troubleshooting

### Connection Issues

#### Problem: "Connection failed" status (red indicator)

**Possible Causes:**
1. Server not running
2. Wrong server URL
3. Firewall blocking connection
4. Port not accessible

**Solutions:**
```bash
# Check if server is running
pm2 status  # or docker ps

# Check if port is accessible
netstat -tuln | grep 8080
# or
ss -tuln | grep 8080

# Test server manually
curl http://localhost:8080/health

# Check firewall
sudo ufw status
sudo ufw allow 8080/tcp
```

#### Problem: "Connection keeps dropping"

**Possible Causes:**
1. Network instability
2. Server timeout
3. Auto-reconnect disabled

**Solutions:**
- Enable auto-reconnect in plugin settings
- Increase server timeout in `.env`
- Check network stability
- Use PM2/Docker to ensure server stays running

### Tool Call Issues

#### Problem: Tools not executing

**Possible Causes:**
1. Tools not registered
2. Invalid tool arguments
3. Server-side tool handler missing

**Solutions:**
```bash
# Check server logs for tool registration errors
pm2 logs claude-relay --err

# Verify tools are registered in the plugin
# Open DevTools console and run:
app.workspace.getActiveViewOfType(ClaudeCodeView).sessionManager.getToolRegistry().listTools()
```

#### Problem: Tool calls timeout

**Possible Causes:**
1. Tool execution takes too long
2. Server not responding
3. Network latency

**Solutions:**
- Increase timeout in plugin settings
- Optimize tool execution time
- Check server performance

### Streaming Issues

#### Problem: Responses not streaming

**Possible Causes:**
1. Streaming disabled in settings
2. Server not sending stream chunks
3. Network buffering

**Solutions:**
- Verify `ENABLE_STREAMING=true` in plugin settings
- Check server logs for stream events
- Check DevTools Network tab for WebSocket frames

#### Problem: Streaming stops mid-response

**Possible Causes:**
1. Connection lost
2. Server error
3. Rate limiting

**Solutions:**
- Check connection status
- Review server logs for errors
- Verify API quota

### Performance Issues

#### Problem: Slow responses

**Possible Causes:**
1. High latency
2. Server overload
3. Large tool results

**Solutions:**
- Use geographically close server
- Scale server (more CPU/memory)
- Optimize tool execution
- Cache repeated operations

#### Problem: High memory usage

**Possible Causes:**
1. Too many concurrent connections
2. Memory leak
3. Large response history

**Solutions:**
```bash
# Monitor server memory
pm2 monit

# Restart server periodically
pm2 restart claude-relay

# Clear plugin cache
# In Obsidian: Settings → Claude Code → Clear Cache
```

---

## Production Considerations

### Security

#### 1. Enable Authentication

**Server-side (.env):**
```bash
ENABLE_AUTH=true
AUTH_TOKEN=your_secure_random_token_here
```

**Client-side configuration:**
Add the auth token to plugin settings or environment variable:
```bash
RELAY_SERVER_AUTH_TOKEN=your_secure_random_token_here
```

#### 2. Use SSL/TLS (HTTPS/WSS)

- Always use `wss://` in production
- Configure SSL certificate (Let's Encrypt recommended)
- Redirect HTTP to HTTPS
- Use valid SSL certificates (avoid self-signed in production)

#### 3. Rate Limiting

Configure rate limiting on the server:
```bash
# .env configuration
RATE_LIMIT_ENABLED=true
RATE_LIMIT_REQUESTS_PER_MINUTE=60
RATE_LIMIT_BURST=10
```

#### 4. CORS Configuration

Restrict CORS to specific origins:
```bash
# .env configuration
CORS_ORIGIN=https://your-obsidian-vault.com
```

### Scalability

#### 1. Load Balancing

Use nginx load balancer for multiple relay servers:

```nginx
upstream claude_relay_backend {
    server relay1.example.com:8080;
    server relay2.example.com:8080;
    server relay3.example.com:8080;
}

server {
    listen 443 ssl;
    server_name relay.example.com;

    location / {
        proxy_pass http://claude_relay_backend;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

#### 2. Horizontal Scaling

```bash
# Deploy multiple relay server instances
docker-compose up -d --scale claude-relay=3

# Use Redis for session sharing (if needed)
# Add Redis container to docker-compose.yml
```

#### 3. Monitoring

- Use PM2 Plus or New Relic for monitoring
- Set up alerts for server downtime
- Monitor API usage and costs
- Track WebSocket connection metrics

### Reliability

#### 1. Health Checks

Configure nginx health checks:
```nginx
location /health {
    proxy_pass http://localhost:8080/health;
    access_log off;
}
```

#### 2. Automatic Restarts

```bash
# PM2 auto-restart on failure
pm2 start dist/server.js --name "claude-relay" --max-restarts 10

# Docker restart policy
restart: always  # or restart: on-failure
```

#### 3. Logging

Configure structured logging:
```bash
# .env configuration
LOG_LEVEL=info
LOG_FORMAT=json
LOG_FILE_PATH=/var/log/claude-relay/app.log
```

Rotate logs:
```bash
# Install logrotate
sudo apt-get install logrotate

# Configure logrotate
sudo nano /etc/logrotate.d/claude-relay
```

```
/var/log/claude-relay/*.log {
    daily
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 www-data www-data
    sharedscripts
    postrotate
        pm2 reload claude-relay
    endscript
}
```

### Backup & Recovery

#### 1. Configuration Backup

```bash
# Backup server configuration
tar -czf claude-relay-config-$(date +%Y%m%d).tar.gz .env docker-compose.yml

# Backup to cloud storage
aws s3 cp claude-relay-config-$(date +%Y%m%d).tar.gz s3://your-backup-bucket/
```

#### 2. Disaster Recovery

Maintain a runbook for:
- Server restoration procedures
- Database recovery (if using database)
- DNS failover
- Emergency contact procedures

---

## Quick Reference

### Essential Commands

**Server Management:**
```bash
npm start                # Start server
npm run dev             # Start in development mode
pm2 start dist/server.js # Start with PM2
pm2 stop claude-relay    # Stop server
pm2 restart claude-relay # Restart server
pm2 logs claude-relay    # View logs
pm2 monit               # Monitor performance
```

**Docker:**
```bash
docker-compose up -d         # Start containers
docker-compose down          # Stop containers
docker-compose logs -f       # View logs
docker-compose restart       # Restart containers
docker ps                    # List running containers
```

**Testing:**
```bash
npm test                     # Run all tests
npm run test:watch          # Run tests in watch mode
npm run lint                # Lint code
npm run build               # Build for production
```

### Configuration Files

- **Server**: `.env`, `docker-compose.yml`
- **Plugin**: `.obsidian/plugins/claude-code-integration/.env`
- **Nginx**: `/etc/nginx/sites-available/claude-relay`
- **PM2**: `ecosystem.config.js`

### Default Ports

- Relay Server: `8080`
- WebSocket: `8080` (ws://) or `443` (wss:// with SSL)
- SSH: `22`
- HTTP: `80`
- HTTPS: `443`

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `ANTHROPIC_API_KEY` | Anthropic API key | - | Yes |
| `PORT` | Server port | `8080` | No |
| `HOST` | Server host | `0.0.0.0` | No |
| `CORS_ORIGIN` | CORS origin | `*` | No |
| `ENABLE_AUTH` | Enable authentication | `false` | No |
| `AUTH_TOKEN` | Auth token | - | If auth enabled |
| `LOG_LEVEL` | Logging level | `info` | No |
| `RATE_LIMIT_ENABLED` | Enable rate limiting | `false` | No |

---

## Support

For issues, questions, or contributions:
- **GitHub Issues**: https://github.com/your-org/obsidian-claude-code-plugin/issues
- **Documentation**: See `docs/` directory
- **Community**: Join our Discord/Slack community

---

**Last Updated:** 2025-01-07
**Version:** 1.0.0
