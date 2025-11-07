const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Morgan middleware’i kullan
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Basit bir rota
app.get('/', (req, res) => {
    res.send('Ana sayfaya hoş geldiniz!');
});

app.listen(PORT, () => {
    console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`);
});