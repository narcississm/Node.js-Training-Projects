// controllers/userController.js
const User = require("../models/User");

const createUser = async(req, res) => {
    try {
        const { username, email } = req.body;
        const newUser = new User({ username, email });
        await newUser.save();
        res.status(201).json({ message: "Kullanıcı oluşturuldu", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Hata oluştu", error });
    }
};

module.exports = { createUser };