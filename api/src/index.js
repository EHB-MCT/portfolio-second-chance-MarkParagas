const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors'); 
require('dotenv').config({ path: '../.env' });
const port = process.env.API_PORT;
//const port = 3001;
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

// For integration test
function startServer() {
  app.set('port', port); // Add this line to set the port value
  // Return to integration test
  return app.listen(port, (err) => {
    if (!err) {
      console.log(`Running on port: ${port}`);
      console.log(MONGODB_DB)
    } else {
      console.error(err);
    }
  });
}

if (require.main === module) {
  startServer();
}

module.exports = app;
module.exports.startServer = startServer;
