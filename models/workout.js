const mongoose = require("mongoose");

const Schema = mongoose.Schema;


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

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  // totalDuration: {
  //   type: Number,
  //   default: $sum: [exercises.]
  // },
  exercises: [exerciseSchema]

});


// This creates our model from the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", workoutSchema);

// Export the User model
module.exports = Workout;
