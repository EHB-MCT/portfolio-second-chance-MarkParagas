const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    date: String,
    duration: Number,
    exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }]
  });

const exerciseSchema = new mongoose.Schema({
    exercise_name: String,
    sets: Number,
    reps: Number
  });

  module.exports = {
    Workout: mongoose.model('Workout', workoutSchema),
    Exercise: mongoose.model('Exercise', exerciseSchema)
  };
  