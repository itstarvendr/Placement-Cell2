// index.js
const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
  // Implement logic to render the home page
  res.render('index');
});

module.exports = router;
