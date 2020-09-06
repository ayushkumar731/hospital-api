const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//router to registration and login the user
router.post('/register', authController.create);
router.post('/login', authController.createSession);

module.exports = router;
