const Workout = require("./models/workout");

module.exports = function (app) {


    //this route returns all workout data
    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(workoutData => {
                res.json(workoutData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    });

    //this route pushes an exercise to a workout's exercises array
    app.put("/api/workouts/:id", function (req, res) {
        const workoutData = req.body;
        console.log(workoutData);

        Workout.update({ _id: req.params.id }, { $push: {exercises: workoutData} }, {runValidators: true})
            .then(data => {
                console.log(data);
                res.json(data);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    });

    //this route adds a new workout entry to the db
    app.post("/api/workouts", function (req, res) {
        console.log(req.body);
        const { body } = req.body;
        console.log(body);
        const workout = new Workout(body);

        Workout.create(workout)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(501);
            });
    });

    //this route returns all workout data
    app.get("/api/workouts/range", function (req, res) {
        Workout.find()
            .then(workoutData => {
                res.json(workoutData);
            })
            .catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    });
};
