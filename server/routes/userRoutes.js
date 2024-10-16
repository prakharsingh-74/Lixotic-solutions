const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user/:id', protect, getUserProfile);
router.put('/user/:id', protect, updateUserProfile);

module.exports = router;