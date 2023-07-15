const express = require('express')
const mongoose = require("mongoose");
const port = process.env.PORT || 5555;
const cors = require("cors");
const app = express();


const mongodb = `mongodb+srv://markparagas:test@cluster0.2nxem.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});


app.use(cors());

// GET
app.get('/', (request, response) => {
    let testResponse = {
        workout: 'Arms',
        exercise: 'Push-ups',
        sets: 5,
        reps: 20,
        duration: 30,
    }
    response.send(testResponse)
})

// POST
app.post('/', (request, response) => {

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


app.listen(port, (err) => {
    if(!err) {
        console.log(`Running on port: ${port}`);
    } else {
        console.error(err)
    }
})