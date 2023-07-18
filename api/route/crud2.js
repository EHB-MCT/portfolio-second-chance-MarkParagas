const express = require('express');
const router = express.Router();
const { Workout } = require('../model/test');

// GET route
router.get('/', async (req, res) => {
  try {
    // Retrieve data from the database
    const data = await Workout.find().populate('exercises');
    // Send the retrieved data as the response
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
  }
});

// POST route
router.post('/', async (req, res) => {
  const requestData = req.body;
  const newWorkout = new Workout({
    date: requestData.date,
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

module.exports = router;
