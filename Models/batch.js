// Batch.js
const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
  // Add batch schema fields here
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model('Batch', batchSchema);
