const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config({ path: '../.env' });
const testPort = 3001;
const apiPort = process.env.API_PORT;
const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_DB } = process.env;
const database = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@cluster0.2nxem.mongodb.net/${MONGODB_DB}`;
app.use(express.json());

// CORS
app.use(cors());

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
const crudRoute = require('../route/crud');

// Use routes
app.use('/', crudRoute);

// API for Frontend

  app.listen(apiPort, (err) => {
    if (!err) {
      console.log(`API is running on port: ${apiPort}`);
    } else {
      console.error(err);
    }
  });


// For integration test
function startServer() {
  app.set('port', testPort);
  // Return to integration test
  return app.listen(testPort, (err) => {
    if (!err) {
      console.log(`Integration Test file is running on port: ${testPort}`);
    } else {
      console.error(err);
    }
  });
}

// Separate the functions and export them
module.exports = app;
module.exports.startServer = startServer;

if (require.main === module) {
  // If the script is run directly, start the server
  startServer();
}