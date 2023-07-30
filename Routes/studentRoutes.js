// studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// List of students route
router.get('/', studentController.getStudents);

// Add new student route
router.get('/new', (req, res) => {
  // Implement logic to render the form to add a new student
  res.render('students/new');
});

router.post('/new', studentController.addStudent);

module.exports = router;
