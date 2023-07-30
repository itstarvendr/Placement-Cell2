// CourseScores.js
const mongoose = require('mongoose');

const courseScoresSchema = new mongoose.Schema({
  // Add course scores schema fields here
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  DSAFinalScore: { type: Number, required: true },
  WebDFinalScore: { type: Number, required: true },
  ReactFinalScore: { type: Number, required: true },
});

module.exports = mongoose.model('CourseScores', courseScoresSchema);
