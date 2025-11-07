import express from 'express';
import low from 'lowdb';
import { JSONFile } from 'lowdb';

const app = express();
const PORT = 3000;

// Veritabanı için ayarlar
const adapter = new JSONFile('db.json');
const db = low(adapter);

// Başlangıç verisi
db.defaults({ users: [] }).write();

// JSON verilerini işleme için middleware
app.use(express.json());

// GET: Kullanıcıları Listeleme
app.get('/users', (req, res) => {
    const users = db.get('users').value();
    res.json(users);
});

// POST: Yeni Kullanıcı Ekleme
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required!' });
    }

    const newUser = { id: Date.now(), name, email };
    db.get('users').push(newUser).write();

    res.status(201).json(newUser);
});

// PUT: Kullanıcı Güncelleme
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required!' });
    }

    const userIndex = db.get('users').findIndex({ id: Number(id) }).value();
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found!' });
    }

    db.get('users').find({ id: Number(id) }).assign({ name, email }).write();
    res.json(db.get('users').find({ id: Number(id) }).value());
});

// DELETE: Kullanıcı Silme
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    const userIndex = db.get('users').findIndex({ id: Number(id) }).value();
    if (userIndex === -1) {
        return res.status(404).json({ message: 'User not found!' });
    }

    db.get('users').remove({ id: Number(id) }).write();
    res.status(204).send();
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});