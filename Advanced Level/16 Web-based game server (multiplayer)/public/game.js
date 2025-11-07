const socket = io();

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    color: "red",
    size: 20
};

const players = {};

// Gönderme hızı sınırı
let lastSend = 0;

function drawPlayer(p) {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
}

// Klavye ile hareket için
const keys = {};
window.addEventListener("keydown", (e) => { keys[e.key] = true; });
window.addEventListener("keyup", (e) => { keys[e.key] = false; });

function updatePosition() {
    if (keys["ArrowUp"]) player.y -= 5;
    if (keys["ArrowDown"]) player.y += 5;
    if (keys["ArrowLeft"]) player.x -= 5;
    if (keys["ArrowRight"]) player.x += 5;

    // Canvas sınırları
    player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
    player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));
}

function gameLoop(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    updatePosition();

    // Sadece 50ms'de bir gönder (20fps)
    if (!lastSend || timestamp - lastSend > 50) {
        socket.emit("move", { x: player.x, y: player.y, size: player.size, color: player.color });
        lastSend = timestamp;
    }

    // Tüm oyuncuları çiz
    for (const id in players) {
        const p = players[id];
        drawPlayer(p);
    }

    requestAnimationFrame(gameLoop);
}

// Sunucudan güncellemeleri dinle
socket.on("playersUpdate", (data) => {
    Object.assign(players, data);
});

requestAnimationFrame(gameLoop);