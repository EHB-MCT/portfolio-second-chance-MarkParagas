const mongoose = require("mongoose");

const { Schema } = mongoose;

const sessionSchema = new Schema({
    workout: String,
    exercise: String,
    sets: Int,
    reps: Int,
    duration: Int,
});

module.exports = mongoose.model("Session", sessionSchema);