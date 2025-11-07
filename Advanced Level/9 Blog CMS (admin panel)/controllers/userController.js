const asyncHandler = require('express-async-handler');
const User = require('../models/User');

// Tüm kullanıcıları al (admin only)
const getAllUsers = asyncHandler(async(req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
});

// Profil bilgilerini al (kendi kullanıcısı)
const getProfile = asyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id).select('-password');
    if (user) {
        res.json(user);
    } else {
        res.status(404);
        throw new Error('Kullanıcı bulunamadı');
    }
});

module.exports = { getAllUsers, getProfile };