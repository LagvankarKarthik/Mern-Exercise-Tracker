const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");//mongoos will help to connect to the mongodb database

//For using our environmental variable that we have as an env file
require("dotenv").config();

//Creating the express server
const app = express();
const port = process.env.PORT || 5000;

//This is the middleware
app.use(cors());
//This is for parsing to json because our server is going to send and recieve json
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//importing the files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
