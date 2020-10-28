// Create the required custom methods at the bottom of this file

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  type: {
    type: String,
    required: "Exercise type must be selected"
  },
  name:{
    type: String,
    required: "Exercise name must be selected"
  },
  duration: {
    type: Number,
    required: "Duration must be set"
  },
  weight:  {
    Type: Number
  },
  reps:  {
    Type: Number
  },
  sets:  {
    Type: Number
  },
  distance:  {
    Type: Number
  },
});

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [exerciseSchema]
});



// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", workoutSchema);

// Export the User model
module.exports = Workout;
