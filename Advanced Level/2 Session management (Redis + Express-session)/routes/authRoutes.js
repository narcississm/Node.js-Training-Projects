const express = require('express');
const router = express.Router();
const { login, logout, dashboard } = require('../controllers/authController');
const { isAuth } = require('../middleware/authMiddleware');

router.post('/login', login);
router.post('/logout', logout);
router.get('/dashboard', isAuth, dashboard);

module.exports = router;