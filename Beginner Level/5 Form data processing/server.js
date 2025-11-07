import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import validator from 'validator';

const app = express();
const PORT = 3000;

// MongoDB'ye bağlanalım
mongoose.connect('mongodb://localhost:27017/formData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const formSchema = new mongoose.Schema({
    name: String,
    email: String
});

const Form = mongoose.model('Form', formSchema);

// Body parser middleware kullanarak form verilerini alalım
app.use(bodyParser.urlencoded({ extended: true }));

// Ana sayfayı (formu) serve etme
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname });
});

// Form verilerini işlemek
app.post('/submit', async(req, res) => {
    const { name, email } = req.body;

    // Veri doğrulama
    if (!name || !email) {
        return res.status(400).send('Lütfen tüm alanları doldurun.');
    }

    // E-posta doğrulaması
    if (!validator.isEmail(email)) {
        return res.status(400).send('Geçersiz e-posta adresi.');
    }

    // MongoDB'ye veri kaydetme
    const formData = new Form({
        name,
        email
    });

    try {
        await formData.save();

        // Yönlendirme (Teşekkür Sayfası)
        res.send(`
            <h2>Form Verileri Başarıyla Alındı!</h2>
            <p>Adınız: ${name}</p>
            <p>E-posta: ${email}</p>
            <p>3 saniye sonra teşekkür sayfasına yönlendirileceksiniz...</p>
            <meta http-equiv="refresh" content="3;url=/thank-you">
        `);
    } catch (err) {
        res.status(500).send('Veri kaydedilirken bir hata oluştu.');
    }
});

// Teşekkür sayfası
app.get('/thank-you', (req, res) => {
    res.send('<h1>Teşekkür Ederiz! Formunuz başarıyla alındı.</h1>');
});

// Sunucu başlatma
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor!`);
});