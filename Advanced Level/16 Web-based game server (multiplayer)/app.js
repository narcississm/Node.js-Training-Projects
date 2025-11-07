const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

// Basit oyun durumu saklama (örnek)
let players = {};

// Socket.io bağlantısı
io.on("connection", (socket) => {
    console.log(`Yeni oyuncu bağlandı: ${socket.id}`);

    // Yeni oyuncu ekleme
    players[socket.id] = { x: 0, y: 0 };

    // Oyuncu durumu güncelleme
    socket.on("move", (data) => {
        players[socket.id] = data;
        io.emit("playersUpdate", players);
    });

    // Oyuncu ayrılınca sil
    socket.on("disconnect", () => {
        console.log(`Oyuncu ayrıldı: ${socket.id}`);
        delete players[socket.id];
        io.emit("playersUpdate", players);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});