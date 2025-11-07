const { Server } = require('socket.io');
let io;

exports.initSocket = (server) => {
    io = new Server(server, {
        cors: { origin: "*" }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);

        socket.on('assignTask', (task) => {
            io.emit('taskAssigned', task);
        });

        socket.on('disconnect', () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
};

exports.getIO = () => io;