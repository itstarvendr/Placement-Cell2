// Results.js
const mongoose = require('mongoose');

const resultsSchema = new mongoose.Schema({
  // Add results schema fields here
  interview: { type: mongoose.Schema.Types.ObjectId, ref: 'Interview', required: true },
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  result: { type: String, enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt'], required: true },
});

module.exports = mongoose.model('Results', resultsSchema);
