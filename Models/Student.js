// Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  // Add student schema fields here
  name: { type: String, required: true },
  college: { type: String, required: true },
  status: { type: String, enum: ['placed', 'not_placed'], required: true },
});

module.exports = mongoose.model('Student', studentSchema);
