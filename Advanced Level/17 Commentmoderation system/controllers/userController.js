const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

// Kayıt ol
const registerUser = async(req, res, next) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ message: "Eksik bilgiler" });

        const userExists = await User.findOne({ username });
        if (userExists) return res.status(400).json({ message: "Kullanıcı zaten var" });

        const user = await User.create({ username, password });

        res.status(201).json({
            _id: user._id,
            username: user.username,
            role: user.role,
            token: generateToken(user._id),
        });
    } catch (error) {
        next(error);
    }
};

// Giriş yap
const loginUser = async(req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                username: user.username,
                role: user.role,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: "Geçersiz kullanıcı adı veya şifre" });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { registerUser, loginUser };