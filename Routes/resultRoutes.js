// resultRoutes.js
const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');

// View interview students and mark result route
router.get('/:id/students', resultController.viewInterviewStudents);

router.post('/:id/students', resultController.markResult);

module.exports = router;
