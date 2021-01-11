const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server); // enables server side functionality of socket.io on our http server. Also adds a new root /socket.io/socket.io.js on which it sends client side library to the client

app.use('/', express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  console.log(socket.id); // every time we call io() on client side, server side log will be printed
});

server.listen(3333, () => {
  console.log('http://localhost:3333');
});
