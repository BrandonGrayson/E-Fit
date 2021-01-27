const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercise: {
        type: String,
        name: String,
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number
    }
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;