// routes/authRoutes.js
const express = require('express');
const {
    register,
    login,
    getProtected,
    getAdmin,
} = require('../controllers/authController');
const { protect, authorize } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', protect, getProtected);
router.get('/admin', protect, authorize('admin'), getAdmin);

module.exports = router;