const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const redis = require("redis");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
    const publisher = redis.createClient();
    const subscriber = redis.createClient();
    ws.on('message', (message) => {
        console.log(`[PUBLISHER] ${message.trim()}`);
        publisher.publish("chat", message.trim());
    });
    subscriber.on("message", function (_, message) {
        console.log(`[SUBSCRIBER] ${message.trim()}`);
        ws.send(message.trim());
    });
    subscriber.subscribe("chat");
    ws.send('Connected to websocket server');
});

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on port: ${server.address().port}`);
});