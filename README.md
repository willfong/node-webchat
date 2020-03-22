# WebSocket Chat Demo

Just a proof-of-concept project to see how to use Redis Pub/Sub feature with WebSockets.


## Requirements

Redis running locally on port 6379 (default)

## Getting Started

`npm install`

## Server

`node index.js`

Server listens on port 5000


```
enlightenment ➜  node-webchat git:(master) ✗  node index.js
Server started on port: 5000
[PUBLISHER] HELLO
[SUBSCRIBER] HELLO
[PUBLISHER] 
[SUBSCRIBER] 
```

## Client

Use `websocat` for interactive:
```
enlightenment ➜  ~  websocat ws://localhost:5000
Connected to websocket server
HELLO
HELLO

^C%
enlightenment ➜  ~
```

Use `node client.js` for reader:
```
enlightenment ➜  node-webchat git:(master) ✗  node client.js
Connected to websocket server
HELLO
```
