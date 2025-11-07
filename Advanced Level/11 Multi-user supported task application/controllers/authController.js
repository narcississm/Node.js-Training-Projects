const User = require('../models/User');
const generateToken = require('../utils/generateToken');

const registerUser = async(req, res, next) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        return next(new Error('Kullanıcı zaten mevcut'));
    }
    const user = await User.create({ name, email, password });
    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        return next(new Error('Geçersiz kullanıcı verisi'));
    }
};

const authUser = async(req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        return next(new Error('Geçersiz e-posta veya parola'));
    }
};

module.exports = { registerUser, authUser };