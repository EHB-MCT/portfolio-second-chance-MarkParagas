const express = require('express');
const router = express.Router();
const { Workout, Exercise } = require('../model/model');

// GET workouts route
router.get('/workouts', async (req, res) => {
  try {
    // Retrieve workout data from the database
    const workouts = await Workout.find().populate('exercises');
    // Send the retrieved data as the response
    res.json(workouts);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving workouts');
  }
});

// POST workout route
router.post('/workouts', async (req, res) => {
  const requestData = req.body;
  const newWorkout = new Workout({
    date: requestData.date,
    workout_name: requestData.workout_name,
    duration: requestData.duration,
    exercises: requestData.exercises
  });

  try {
    // Save the workout to the database
    await newWorkout.save();
    res.send('Workout saved successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving workout');
  }
});

// GET exercises route
router.get('/exercises', async (req, res) => {
  try {
    // Retrieve exercise data from the database
    const exercises = await Exercise.find();
    // Send the retrieved data as the response
    res.json(exercises);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving exercises');
  }
});

// POST exercise route
router.post('/exercises', async (req, res) => {
  const requestData = req.body;
  const newExercise = new Exercise({
    exercise_name: requestData.exercise_name,
    sets: requestData.sets,
    reps: requestData.reps
  });

  try {
    // Save the exercise to the database
    const savedExercise = await newExercise.save();

    // Include the generated _id in the response
    res.status(201).json({ id: savedExercise._id, message: 'Exercise saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving exercise');
  }
});

module.exports = router;