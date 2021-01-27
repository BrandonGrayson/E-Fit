// set up server connection

// require modules
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const db = require("./models")


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true })


const PORT = process.env.PORT || 3000;

// require routes
require("./routes/htmlroutes")(app)


// create the table for database



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });