const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Dosyaya yazma işlemi
app.post('/write', (req, res) => {
    const content = req.body.content;

    // Dosyaya yaz
    fs.writeFile('data.txt', content, (err) => {
        if (err) {
            return res.status(500).send('Dosyaya yazılırken bir hata oluştu');
        }
        res.send('Veri başarıyla dosyaya yazıldı!');
    });
});

// Dosyayı okuma işlemi
app.get('/read', (req, res) => {
    // Dosyayı oku
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Dosya okunurken bir hata oluştu');
        }
        res.send(data);
    });
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});