const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');
const { join } = require('./users');

const PORT = process.env.PORT || 3000;

const app = express();

const server = http.createServer(app);
const io = socketIo(server);
const formatMsg = require('./messageFormat')

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
    console.log('New connection...')

    //Welcomes the current user
    socket.emit('message', formatMsg('ChatBot', 'Welcome to ChatApp!!'))

    //Notifies other users in the chat
    socket.broadcast.emit('message', formatMsg('ChatBot', 'A user has joined the chat'));

    //runs when a user disconnects
    socket.on('disconnect', () => {
        io.emit('message', formatMsg('ChatBot', 'A user has left the Chat'))
    });

    //listens for chat message
    socket.on('chatMessage', (msg) => {
        io.emit('message', formatMsg(msg.username, msg.text))
    })
})

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));