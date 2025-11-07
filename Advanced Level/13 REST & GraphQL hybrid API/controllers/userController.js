const User = require("../models/User");

// Tüm kullanıcıları getir
exports.getUsers = async(req, res) => {
    const users = await User.find();
    res.json(users);
};

// Tek kullanıcı getir
exports.getUser = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

// Yeni kullanıcı oluştur
exports.createUser = async(req, res) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
};

// Kullanıcı güncelle
exports.updateUser = async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
};

// Kullanıcı sil
exports.deleteUser = async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "Kullanıcı silindi" });
};