// externalJobsRoutes.js
const express = require('express');
const router = express.Router();
const externalJobsController = require('../controllers/externalJobsController');

// External jobs list route
router.get('/', externalJobsController.fetchExternalJobs);

module.exports = router;
