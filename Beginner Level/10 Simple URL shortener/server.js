import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3000;

// Kısaltmalar için hafıza (veritabanı yerine basit bir obje kullanıyoruz)
const urlDatabase = {};

// URL kısaltma için ana sayfa
app.get('/', (req, res) => {
    res.send(`
        <h1>Basit URL Kısaltıcı</h1>
        <form action="/shorten" method="POST">
            <input type="text" name="url" placeholder="Kısaltmak istediğiniz URL" required>
            <button type="submit">Kısalt</button>
        </form>
    `);
});

// URL kısaltma işlemi
app.post('/shorten', express.urlencoded({ extended: true }), (req, res) => {
    const originalUrl = req.body.url;
    if (!originalUrl) {
        return res.status(400).send('URL girilmesi gerekmektedir.');
    }

    const shortId = uuidv4().slice(0, 8); // UUID'nin ilk 8 karakterini alıyoruz.
    urlDatabase[shortId] = originalUrl;

    res.send(`
        <h2>URL Kısaltıldı!</h2>
        <p>Orijinal URL: <a href="${originalUrl}" target="_blank">${originalUrl}</a></p>
        <p>Kısaltılmış URL: <a href="/${shortId}" target="_blank">/${shortId}</a></p>
    `);
});

// Kısaltılmış URL'yi yönlendirme
app.get('/:shortId', (req, res) => {
    const shortId = req.params.shortId;
    const originalUrl = urlDatabase[shortId];

    if (!originalUrl) {
        return res.status(404).send('Bu URL bulunamadı.');
    }

    // Kısaltılmış URL'yi orijinal URL'ye yönlendiriyoruz
    res.redirect(originalUrl);
});

// Sunucu başlatma
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor!`);
});