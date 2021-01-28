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
        console.log("This is the PARAMS ID", req.params.id)
        // find exercise based on id
        Workout.findOne({_id: req.params.id}, (err, workout) =>{
            // push workout onto exercise
            workout.exercises.push(req.body)

            // add new exercise to db
            Workout.updateOne({_id: req.params.id}, workout, function (err, data) {
                if(err) throw err
                res.json(data)
            })
        })
    });

    app.post("/api/workouts", function (req, res) {
        console.log("This is from WORKOUTS--->", req.body)
        
        // crate a new workout
        const newWorkout = new Workout(req.body)
        // save the workout to database
        newWorkout.save(function(err){
            // err handling
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
