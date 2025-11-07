const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Statik dosyaları sunmak için (örn: index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Form verisini işlemek için (JSON ve URL encoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Örnek GET isteği
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Merhaba Dünya!' });
});

// Örnek POST (form gönderimi)
app.post('/api/form', (req, res) => {
    const formData = req.body;
    console.log('Form verisi alındı:', formData);
    res.json({ message: 'Form başarıyla alındı.', data: formData });
});

app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});