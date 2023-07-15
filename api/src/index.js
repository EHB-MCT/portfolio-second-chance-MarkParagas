const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' }); // Load environment variables from .env file in the api directory

const port = process.env.PORT || 3000;
const database = process.env.DATABASE;

app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
mongoose.connect(database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema for your data
const dataSchema = new mongoose.Schema({
  date: String,
  workout: String,
  exercise: String,
  sets: Number,
  reps: Number,
  duration: Number,
}, { collection: 'sessions' });

const Data = mongoose.model('Data', dataSchema)

// GET route
app.get('/api', async (req, res) => {
  try {
    // Retrieve data from the database
    const data = await Data.find();

    // Send the retrieved data as the response
    res.json(data);
    // res.send('GET request received');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
  }
});

// POST route
app.post('/api', async (req, res) => {
  const requestData = req.body;

  // Create a new instance of the Data model
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

// PORT
// API = http://localhost:3000/api
app.listen(port, (err) => {
  if (!err) {
    console.log(`Running on port: ${port}`);
  } else {
    console.error(err);
  }
});
