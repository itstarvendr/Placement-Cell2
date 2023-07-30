// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Sign up route
router.get('/signup', (req, res) => {
  // Implement logic to render the sign-up page
  res.render('auth/signup');
});

router.post('/signup', authController.signUp);

// Login route
router.get('/login', (req, res) => {
  // Implement logic to render the login page
  res.render('auth/login');
});

router.post('/login', authController.login);

// Logout route
router.get('/logout', authController.logout);

module.exports = router;
