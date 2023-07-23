const express = require('express');
const router = express.Router();
const { Workout, Exercise } = require('../model/model');

// ----------------------------------------------------------- GET workouts route
router.get('/workouts', async (req, res) => {
  try {
    const workouts = await Workout.find().populate('exercises');
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
    await newWorkout.save();
    res.send('Workout saved successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving workout');
  }
});

// UPDATE workout route
router.put('/workouts/:id', async (req, res) => {
  const workoutId = req.params.id;
  const requestData = req.body;
  try {
    const workout = await Workout.findByIdAndUpdate(
      workoutId,
      {
        $set: {
          date: requestData.date,
          workout_name: requestData.workout_name,
          duration: requestData.duration,
          exercises: requestData.exercises
        }
      },
      { new: true }
    );
    res.json(workout);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating workout');
  }
});

// DELETE workout route
router.delete('/workouts/:id', async (req, res) => {
  const workoutId = req.params.id;
  try {
    await Workout.findByIdAndRemove(workoutId);
    res.send('Workout deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting workout');
  }
});

// ----------------------------------------------------------- GET exercises route
router.get('/exercises', async (req, res) => {
  try {
    const exercises = await Exercise.find();
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
    const savedExercise = await newExercise.save();
    res.status(201).json({ id: savedExercise._id, message: 'Exercise saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving exercise');
  }
});

// UPDATE exercise route
router.put('/exercises/:id', async (req, res) => {
  const exerciseId = req.params.id;
  const requestData = req.body;
  try {
    const exercise = await Exercise.findByIdAndUpdate(
      exerciseId,
      {
        $set: {
          exercise_name: requestData.exercise_name,
          sets: requestData.sets,
          reps: requestData.reps
        }
      },
      { new: true }
    );
    res.json(exercise);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating exercise');
  }
});

// DELETE exercise route
router.delete('/exercises/:id', async (req, res) => {
  const exerciseId = req.params.id;
  try {
    await Exercise.findByIdAndRemove(exerciseId);
    res.send('Exercise deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting exercise');
  }
});

module.exports = router;

// Note Update and Delete cannot be used due id is different in mongodb (_id an objectId)