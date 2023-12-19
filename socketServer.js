// socketServer.js
const http = require('http').createServer();
const io = require('socket.io')(http);

// io.on('connection', (socket) => {
//     console.log('Client connected');

//     socket.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
// });

module.exports = io;
