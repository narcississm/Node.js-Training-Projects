import express from 'express';
import http from 'http';
import socketIo from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Sunucu kök yolu
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Kullanıcılar bağlandığında ne olacak?
io.on('connection', (socket) => {
    console.log('Bir kullanıcı bağlandı.');

    // Kullanıcıdan mesaj alınca
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Tüm kullanıcılara mesajı gönder
    });

    // Bağlantı kesildiğinde
    socket.on('disconnect', () => {
        console.log('Bir kullanıcı ayrıldı.');
    });
});

// Sunucuyu başlatma
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});