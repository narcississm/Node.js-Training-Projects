import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const port = 3000;

// Yükleme ayarları
const storage = multer.diskStorage({
    destination: './uploads', // Yükleme klasörünü belirliyoruz
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Dosya adını zaman damgası ve orijinal adıyla belirliyoruz
    }
});
const upload = multer({ storage });

// static file serving
app.use(express.static('public')); // public klasöründen dosya sunma

// Dosya yükleme işlemi için route
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Dosya seçilmedi!');
    }
    res.send('Dosya başarıyla yüklendi!');
});

app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});