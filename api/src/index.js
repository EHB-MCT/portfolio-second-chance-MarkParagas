const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const port = process.env.PORT;
const database = process.env.DATABASE;

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Import routes
const crudRoute = require('../route/crud2');

// Use routes
app.use('/api', crudRoute);

// PORT & Should be API = http://localhost:3000/api
app.listen(port, (err) => {
  if (!err) {
    console.log(`Running on port: ${port}`);
  } else {
    console.error(err);
  }
});