const express = require("express");
const app = express();
app.use(express.json());

function checkSubmitPOST(data) {
  const { date, workout_name, duration, exercises } = data;

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

  // Workout POST validation
  if (
    date &&
    workout_name &&
    duration > 0 &&
    exercises &&
    listOfWorkouts.includes(workout_name) &&
    exercises.length > 0 &&
    exercises.every(
      (exercise) =>
        exercise._id &&
        exercise._id.length === 24 && // MongoDB is 24 char / 12 bytes in length (checker) &&
        checkExercisePOST(exercise) // Validate individual exercises
    )
  ) {
    return true;
  } else {
    return false; 
  }
}

function checkExercisePOST(exercise) {
  if (
    exercise.exercise_name &&
    Number.isInteger(exercise.sets) &&
    exercise.sets > 1 &&
    Number.isInteger(exercise.reps) &&
    exercise.reps > 1
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = { checkSubmitPOST, checkExercisePOST };