const path = require("path");


//these are the routes to the static html pages
module.exports = function (app) {
    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/", "exercise.html"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/", "stats.html"));
    });

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "./public/", "index.html"));
    });
};