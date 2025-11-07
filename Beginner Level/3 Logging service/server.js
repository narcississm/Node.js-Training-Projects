const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3000;

// Loglama fonksiyonu
const logMessage = (message) => {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;

    fs.appendFile('logs.txt', logEntry, (err) => {
        if (err) {
            console.error('Log yazarken hata oluştu:', err);
        }
    });
};

// Basit bir loglama örneği
app.get('/', (req, res) => {
    logMessage('Ana sayfa isteği geldi');
    res.send('Ana sayfaya hoş geldiniz!');
});

// Hata mesajı loglama
app.get('/error', (req, res) => {
    const errorMessage = 'Bir hata oluştu!';
    logMessage(errorMessage);
    res.status(500).send(errorMessage);
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});