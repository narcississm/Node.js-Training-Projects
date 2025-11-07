import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// JSON verisi okunacak dosya yolu
const filePath = path.join(__dirname, 'data', 'people.json');

// Ana route: Tüm kişileri JSON olarak döndür
app.get('/people', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Dosya okunamadı:', err);
            return res.status(500).send('Sunucu hatası');
        }

        try {
            const people = JSON.parse(data);
            res.json(people);
        } catch (parseErr) {
            console.error('JSON parse hatası:', parseErr);
            res.status(500).send('Veri hatalı');
        }
    });
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port}/people adresinde çalışıyor`);
});