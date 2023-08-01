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
function startApiServer(apiPort) {
  app.listen(apiPort, (err) => {
    if (!err) {
      console.log(`API is running on port: ${apiPort}`);
    } else {
      console.error(err);
    }
  });
}

let testsFinished = false;

// For integration test
function startServer() {
  app.set('port', testPort);
  // Return to integration test
  const server = app.listen(testPort, (err) => {
    if (!err) {
      console.log(`Integration Test file is running on port: ${testPort}`);
    } else {
      console.error(err);
    }
  });

  // When the server is closed (i.e., integration tests are done), set the flag to true
  server.on('close', () => {
    testsFinished = true;
  });

  return server;
}

// Separate the functions and export them
module.exports = app;
module.exports.startServer = startServer;
module.exports.startApiServer = startApiServer; // Export startApiServer function

if (require.main === module) {
  // If the script is run directly, start the server for integration tests
  const integrationTestServer = startServer();

  // Example: Simulate integration tests running for 5 seconds, then close the server
  setTimeout(() => {
    integrationTestServer.close(() => {
      console.log('Integration tests are done.');
      // When integration tests are finished, start the API server
      if (testsFinished) {
        startApiServer(apiPort);
      }
    });
  }, 5000);
}