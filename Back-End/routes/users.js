const router = require("express").Router(); //we need this because we are creating a route
let User = require('../Models/user.model');

//First inpoint that handles the incoming http get requests on the /users route url
router.route("/").get((req, res) => {
  User.find() //mongoos method which gets all the users from the mongodb atlas
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Handles http post requests
router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });
    
  //SAving the new user in the database
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router; //This is the standard thing that we have to do for the router files
