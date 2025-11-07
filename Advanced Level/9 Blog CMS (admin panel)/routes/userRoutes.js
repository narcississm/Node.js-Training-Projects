const express = require('express');
const router = express.Router();
const { getAllUsers, getProfile } = require('../controllers/userController');
const { protect, adminOnly } = require('../middlewares/authMiddleware');

router.route('/').get(protect, adminOnly, getAllUsers);
router.route('/profile').get(protect, getProfile);

module.exports = router;