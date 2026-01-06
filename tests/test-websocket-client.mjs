#!/usr/bin/env node

/**
 * WebSocket Client Test
 *
 * Tests the Obsidian plugin's WebSocket client implementation
 */

import { WebSocket } from 'ws';
import { randomUUID } from 'crypto';

const SERVER_URL = 'ws://localhost:8080';
const CONVERSATION_ID = randomUUID();

console.log('🧪 Testing WebSocket Client Implementation');
console.log(`📡 Server: ${SERVER_URL}`);
console.log(`📝 Conversation ID: ${CONVERSATION_ID}\n`);

let testPassed = 0;
let testFailed = 0;

function log(message, type = 'info') {
    const colors = {
        info: '\x1b[36m',    // Cyan
        success: '\x1b[32m', // Green
        error: '\x1b[31m',   // Red
        warning: '\x1b[33m', // Yellow
        reset: '\x1b[0m'
    };
    const color = colors[type] || colors.info;
    console.log(`${color}${message}${colors.reset}`);
}

function testCase(name, fn) {
    console.log(`\n📋 Test: ${name}`);
    fn()
        .then(() => {
            testPassed++;
            log(`✅ PASSED: ${name}`, 'success');
        })
        .catch((error) => {
            testFailed++;
            log(`❌ FAILED: ${name}`, 'error');
            log(`   Error: ${error.message}`, 'error');
        });
}

// Test 1: Connection establishment
async function testConnection() {
    return new Promise((resolve, reject) => {
        const url = new URL(SERVER_URL);
        url.searchParams.set('conversationId', CONVERSATION_ID);

        const ws = new WebSocket(url.toString());
        let connected = false;
        let timeout = setTimeout(() => {
            if (!connected) {
                ws.close();
                reject(new Error('Connection timeout'));
            }
        }, 5000);

        ws.on('open', () => {
            log('WebSocket connected', 'success');
            connected = true;
            clearTimeout(timeout);
            ws.close();
            resolve();
        });

        ws.on('error', (error) => {
            clearTimeout(timeout);
            reject(error);
        });
    });
}

// Test 2: Receive connected message
async function testConnectedMessage() {
    return new Promise((resolve, reject) => {
        const url = new URL(SERVER_URL);
        url.searchParams.set('conversationId', CONVERSATION_ID);

        const ws = new WebSocket(url.toString());
        let timeout = setTimeout(() => {
            ws.close();
            reject(new Error('Did not receive connected message'));
        }, 5000);

        ws.on('message', (data) => {
            try {
                const message = JSON.parse(data.toString());
                if (message.type === 'connected') {
                    log(`Received: ${message.type}`, 'success');
                    log(`Message: ${message.message}`, 'info');
                    clearTimeout(timeout);
                    ws.close();
                    resolve();
                }
            } catch (error) {
                // Ignore parse errors
            }
        });

        ws.on('error', (error) => {
            clearTimeout(timeout);
            reject(error);
        });
    });
}

// Test 3: Send ping and receive pong
async function testPingPong() {
    return new Promise((resolve, reject) => {
        const url = new URL(SERVER_URL);
        url.searchParams.set('conversationId', CONVERSATION_ID);

        const ws = new WebSocket(url.toString());
        let pongReceived = false;
        let timeout = setTimeout(() => {
            if (!pongReceived) {
                ws.close();
                reject(new Error('Did not receive pong'));
            }
        }, 5000);

        ws.on('open', () => {
            ws.send(JSON.stringify({ type: 'ping' }));
            log('Sent ping', 'info');
        });

        ws.on('message', (data) => {
            try {
                const message = JSON.parse(data.toString());
                if (message.type === 'pong') {
                    pongReceived = true;
                    log('Received pong', 'success');
                    clearTimeout(timeout);
                    ws.close();
                    resolve();
                }
            } catch (error) {
                // Ignore parse errors
            }
        });

        ws.on('error', (error) => {
            clearTimeout(timeout);
            reject(error);
        });
    });
}

// Test 4: Send user message
async function testSendMessage() {
    return new Promise((resolve, reject) => {
        const url = new URL(SERVER_URL);
        url.searchParams.set('conversationId', CONVERSATION_ID);

        const ws = new WebSocket(url.toString());
        let messageSent = false;
        let timeout = setTimeout(() => {
            if (!messageSent) {
                ws.close();
                reject(new Error('Failed to send message'));
            }
        }, 5000);

        ws.on('open', () => {
            const message = {
                type: 'user_message',
                conversationId: CONVERSATION_ID,
                content: 'Hello from test client!',
                context: {
                    currentFile: 'test.md',
                    selection: 'test selection'
                }
            };

            ws.send(JSON.stringify(message));
            log('Sent user_message', 'success');
            messageSent = true;
            clearTimeout(timeout);
            ws.close();
            resolve();
        });

        ws.on('error', (error) => {
            clearTimeout(timeout);
            reject(error);
        });
    });
}

// Test 5: Reconnection
async function testReconnection() {
    return new Promise((resolve, reject) => {
        const url = new URL(SERVER_URL);
        url.searchParams.set('conversationId', CONVERSATION_ID);

        const ws1 = new WebSocket(url.toString());
        let reconnected = false;
        let timeout = setTimeout(() => {
            if (!reconnected) {
                ws1.close();
                reject(new Error('Reconnection failed'));
            }
        }, 8000);

        ws1.on('open', () => {
            log('First connection established', 'success');
            // Close first connection
            setTimeout(() => {
                log('Closing first connection...', 'info');
                ws1.close();

                // Reconnect with same conversation ID
                setTimeout(() => {
                    const ws2 = new WebSocket(url.toString());

                    ws2.on('open', () => {
                        log('Reconnected successfully', 'success');
                    });

                    ws2.on('message', (data) => {
                        try {
                            const message = JSON.parse(data.toString());
                            if (message.type === 'reconnected') {
                                log(`Received: ${message.type}`, 'success');
                                log(`Message: ${message.message}`, 'info');
                                reconnected = true;
                                clearTimeout(timeout);
                                ws2.close();
                                resolve();
                            }
                        } catch (error) {
                            // Ignore parse errors
                        }
                    });

                    ws2.on('error', (error) => {
                        clearTimeout(timeout);
                        reject(error);
                    });
                }, 500);
            }, 500);
        });

        ws1.on('error', (error) => {
            clearTimeout(timeout);
            reject(error);
        });
    });
}

// Run all tests
async function runAllTests() {
    log('Starting WebSocket client tests...\n', 'info');

    await testCase('Connection establishment', testConnection);
    await testCase('Receive connected message', testConnectedMessage);
    await testCase('Ping/pong communication', testPingPong);
    await testCase('Send user message', testSendMessage);
    await testCase('Reconnection support', testReconnection);

    // Summary
    console.log('\n' + '='.repeat(50));
    console.log('📊 Test Summary');
    console.log('='.repeat(50));
    log(`✅ Passed: ${testPassed}`, 'success');
    log(`❌ Failed: ${testFailed}`, testFailed > 0 ? 'error' : 'info');
    log(`📈 Total: ${testPassed + testFailed}`, 'info');

    if (testFailed === 0) {
        log('\n🎉 All tests passed!', 'success');
        process.exit(0);
    } else {
        log('\n⚠️  Some tests failed', 'warning');
        process.exit(1);
    }
}

// Run tests
runAllTests().catch((error) => {
    log(`\n💥 Test suite failed: ${error.message}`, 'error');
    console.error(error);
    process.exit(1);
});
