// interviewRoutes.js
const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');

// List of interviews route
router.get('/', interviewController.getInterviews);

// Create new interview route
router.get('/new', (req, res) => {
  // Implement logic to render the form to create a new interview
  res.render('interviews/new');
});

router.post('/new', interviewController.createInterview);

// Allocate student to interview route
router.get('/:id/allocate', (req, res) => {
  // Implement logic to render the page to allocate students to an interview
  res.render('interviews/allocate');
});

router.post('/:id/allocate', interviewController.allocateStudentToInterview);

module.exports = router;
