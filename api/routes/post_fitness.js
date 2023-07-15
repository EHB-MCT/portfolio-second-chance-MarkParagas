const express = require("express");
const app = express.Router();
const mongoose = require("mongoose");

const session = require("../models/session");

// POST
app.post('/post', (request, response) => {

    User.find(query)
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });

    console.log(request.body);
    response.send('POST Submit')
})

module.exports = app;