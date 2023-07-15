const express = require('express');
const router = express.Router();
const Data = require('../model/schema');

// GET route
router.get('/', async (req, res) => {
  try {
    // Retrieve data from the database
    const data = await Data.find();
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
  const newData = new Data(requestData);

  try {
    // Save the data to the database
    await newData.save();
    res.send('Data saved successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving data');
  }
});

module.exports = router;