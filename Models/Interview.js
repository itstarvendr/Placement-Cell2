// Interview.js
const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  // Add interview schema fields here
  company: { type: String, required: true },
  date: { type: Date, required: true },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
});

module.exports = mongoose.model('Interview', interviewSchema);
