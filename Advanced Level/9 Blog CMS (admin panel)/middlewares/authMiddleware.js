const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

const protect = asyncHandler(async(req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            if (!req.user) {
                res.status(401);
                throw new Error('Yetkilendirme başarısız, kullanıcı bulunamadı');
            }
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Geçersiz token');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Token bulunamadı, yetkilendirme başarısız');
    }
});

const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(403);
        throw new Error('Yönetici yetkisi gerekli');
    }
};

const editorOrAdmin = (req, res, next) => {
    if (req.user && (req.user.role === 'admin' || req.user.role === 'editor')) {
        next();
    } else {
        res.status(403);
        throw new Error('Editör veya yönetici yetkisi gerekli');
    }
};

module.exports = { protect, adminOnly, editorOrAdmin };