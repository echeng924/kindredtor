const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signUp);
router.post('/signout', AuthController.signOut);
router.get('/profile', AuthController.profile);

module.exports = router;
