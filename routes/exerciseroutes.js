// require modules
const express = require("express");
const db = require("../models");
const Workout = db.Workout

// put request 
module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        // loa
        Workout.find({}).then(data => {
           res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
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
        newWorkout.save(function(err){
            if(err){ console.log(err)}
            res.json(newWorkout)
        })

        //or
        // Workout.create(req.body, function (err, data) {
        //     if (err) console.log(err);
        //     res.json(data)
        //   });
    });
    // aggregate/ limit
    app.get("/api/workouts/range", function (req, res) {
        // console.log("THIS IS THE RESPONSE--->", res)
        // console.log("THIS IS THE REQUEST--->", req.body)
        // load all the workouts already inside the database
        db.Workout.find({         
            
        })
    });

}
