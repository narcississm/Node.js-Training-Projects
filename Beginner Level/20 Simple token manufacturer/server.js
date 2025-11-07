import express from 'express';
import crypto from 'crypto'; // Token oluşturmak için crypto modülünü kullanacağız

const app = express();
const port = 3000;

// Token üretme fonksiyonu
function generateToken() {
    return crypto.randomBytes(16).toString('hex'); // 16 byte'lık rastgele bir token
}

// Token üretici route
app.get('/generate-token', (req, res) => {
    const token = generateToken();
    res.json({ token });
});

// Basit bir ana sayfa
app.get('/', (req, res) => {
    res.send('<h1>Basit Token Üretici</h1><a href="/generate-token">Token Al</a>');
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});