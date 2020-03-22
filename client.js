const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:5000');

ws.on('message', function incoming(data) {
  console.log(data);
});