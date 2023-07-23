const express = require("express");
const app = express();
app.use(express.json());

function checkSubmitPOST(data) {
  const { date, workout_name, exercises } = data;

  let listOfWorkouts = [
    "Chest",
    "Biceps",
    "Triceps",
    "Shoulders",
    "Abs",
    "Back",
    "Legs",
    "Forearms",
  ];

  if (
    date &&
    workout_name &&
    exercises &&
    listOfWorkouts.includes(workout_name) &&
    exercises.length > 0 &&
    exercises.every(
      (exercise) =>
        exercise._id &&
        exercise._id.length === 24 && // MongoDB is 24 char / 12 bytes in length (checker) &&
        exercise.exercise_name &&
        Number.isInteger(exercise.sets) && exercise.sets >= 0 &&
        Number.isInteger(exercise.reps) && exercise.reps >= 0
    )
  ) {
    return true; // Data submit & Successful
  } else {
    return false; // Get data errors
  }
}

module.exports = { checkSubmitPOST };
