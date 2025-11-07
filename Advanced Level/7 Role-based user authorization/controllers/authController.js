// controllers/authController.js
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const generateToken = (user) =>
    jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });

exports.register = async(req, res, next) => {
    try {
        const { username, password, role } = req.body;
        const user = await User.create({ username, password, role });
        res.status(201).json({
            token: generateToken(user),
        });
    } catch (err) {
        next(err);
    }
};

exports.login = async(req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.json({
            token: generateToken(user),
        });
    } catch (err) {
        next(err);
    }
};

exports.getProtected = (req, res) => {
    res.json({ message: 'Protected content', user: req.user });
};

exports.getAdmin = (req, res) => {
    res.json({ message: 'Admin content', user: req.user });
};