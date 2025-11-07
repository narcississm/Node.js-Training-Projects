const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Geçici veri (bellekte tutuluyor)
let users = [
    { id: 1, name: 'Quenn' },
    { id: 2, name: 'Exe' }
];

// Tüm kullanıcıları getir
app.get('/users', (req, res) => {
    res.json(users);
});

// Belirli bir kullanıcıyı getir
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    }
    res.json(user);
});

// Yeni kullanıcı ekle
app.post('/users', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'İsim gerekli' });
    }

    const newUser = {
        id: users.length + 1,
        name: name
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

// Kullanıcı güncelle
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    }

    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'İsim gerekli' });
    }

    user.name = name;
    res.json(user);
});

// Kullanıcı sil
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    }

    const deletedUser = users.splice(userIndex, 1);
    res.json({ message: 'Kullanıcı silindi', user: deletedUser[0] });
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${port}`);
});