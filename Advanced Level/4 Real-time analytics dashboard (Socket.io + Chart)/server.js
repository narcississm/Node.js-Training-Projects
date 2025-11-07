const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Yeni kullanıcı bağlandı:', socket.id);

    // Periyodik olarak rastgele veri gönder (örnek için)
    const sendDataInterval = setInterval(() => {
        const analyticsData = {
            usersOnline: Math.floor(Math.random() * 100) + 1,
            pageViews: Math.floor(Math.random() * 500) + 100,
            clicks: Math.floor(Math.random() * 300) + 50,
        };
        socket.emit('analytics-update', analyticsData);
    }, 2000);

    socket.on('disconnect', () => {
        console.log('Kullanıcı ayrıldı:', socket.id);
        clearInterval(sendDataInterval);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});