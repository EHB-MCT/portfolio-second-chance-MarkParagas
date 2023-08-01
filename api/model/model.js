const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  workout_name: {
    type: String,
    enum: [
      "Chest",
      "Biceps",
      "Triceps",
      "Shoulders",
      "Abs",
      "Back",
      "Legs",
      "Forearms",
    ],
    required: true,
  },
  duration: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 1;
      },
      message: "Duration cannot be a negative number or zero value",
    },
  },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "Exercise" }],
});

const exerciseSchema = new mongoose.Schema({
  exercise_name: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 1;
      },
      message: "Sets cannot be a negative number or zero value",
    },
  },
  reps: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return value >= 1;
      },
      message: "Reps cannot be a negative number or zero value",
    },
  },
});

module.exports = {
  Workout: mongoose.model("Workout", workoutSchema),
  Exercise: mongoose.model("Exercise", exerciseSchema),
};