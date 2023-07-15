const mongoose = require('mongoose');

// Data schema
const dataSchema = new mongoose.Schema(
  {
    date: String,
    workout: String,
    exercise: String,
    sets: Number,
    reps: Number,
    duration: Number,
  },
  { collection: 'sessions' }
);

module.exports = mongoose.model('Data', dataSchema);