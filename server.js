               // set up server connection

// require modules
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const db = require("./models")


const app = express();

app.use(logger("dev"));

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// connect to mongoose db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/workout', { 
useNewUrlParser: true,    
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false 
});

// port
const PORT = process.env.PORT || 3000;

// require routes
require("./routes/htmlroutes.js")(app);
require("./routes/exerciseroutes.js")(app);

// set up port
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });