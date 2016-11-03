const express = require('express');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

router.post('/login', AuthController.login);
router.post('/signup', AuthController.signUp);
router.post('/signout', AuthController.signOut);
router.get('/profile', AuthController.profile);
router.get('/picture', AuthController.picture);

module.exports = router;
