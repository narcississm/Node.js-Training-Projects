import express from 'express';
import multer from 'multer';
import path from 'path';

const app = express();
const port = 3000;

// Multer yapılandırması
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Statik dosya sunumu (HTML sayfası)
app.use(express.static('public'));

// Dosya yükleme API'si
app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Hiç dosya seçmediniz!');
    }

    // Dosya boyutunu hesaplama (byte cinsinden)
    const fileSize = req.file.size; // byte cinsinden dosya boyutu

    // Dosya boyutunu megabyte cinsine çevirme
    const fileSizeInMB = (fileSize / (1024 * 1024)).toFixed(2);

    res.send(`Dosyanız başarıyla yüklendi. Boyutu: ${fileSizeInMB} MB`);
});

// Sunucuyu başlatma
app.listen(port, () => {
    console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});