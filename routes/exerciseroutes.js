// require modules
const express = require("express");
const db = require("../models");
const Workout = db.Workout

// put request 
module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        // loa
    })

    app.put("/api/workouts/:id", function (req, res) {
        // console.log("This is the req body from :id--->", req.body)
        // save the workout to variable called work
        // console.log("This is the PARAMS ID", req.params.id)
        // console.log("This is the req.body", req.body)
        // const workout = req.body
        // console.log(workout)
        // db.workout.updateOne(workout)
    });

    app.post("/api/workouts", function (req, res) {
        console.log("This is from WORKOUTS--->", req.body)
        const newWorkout = new Workout(req.body)
        console.log("New Workout-->", newWorkout)
        res.json(newWorkout)
        
        // save this to a var
    });
    // aggregate/ limit
    app.get("/api/workouts/range", function (req, res) {
        // console.log("THIS IS THE RESPONSE--->", res)
        // console.log("THIS IS THE REQUEST--->", req.body)
        // load all the workouts already inside the database
        db.Workouts.find({
            
        })
    });

}
