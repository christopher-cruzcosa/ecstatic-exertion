const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//this schema is specific to exerscies, and is a child schema
const exerciseSchema = new Schema({
  type: {
    type: String,
    required: "Exercise type must be selected"
  },
  name:{
    type: String,
    required: "Exercise name must be selected",
    trim: true
  },
  duration: {
    type: Number,
    required: "Duration must be set"
  },
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number
});

//this is the parent schema, which stores an array of objects based on the exercise schema above
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
