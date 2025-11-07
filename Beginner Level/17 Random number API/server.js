import express from 'express';

const app = express();
const port = 3000;

// Rastgele sayı üretme fonksiyonu
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// API Route: /random
app.get('/random', (req, res) => {
    const { min, max } = req.query;

    if (!min || !max) {
        return res.status(400).json({ error: 'min ve max parametreleri gereklidir.' });
    }

    const minNum = parseInt(min, 10);
    const maxNum = parseInt(max, 10);

    if (isNaN(minNum) || isNaN(maxNum)) {
        return res.status(400).json({ error: 'min ve max geçerli sayılar olmalıdır.' });
    }

    const randomNumber = generateRandomNumber(minNum, maxNum);
    res.json({ randomNumber });
});

// Sunucu başlatma
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});