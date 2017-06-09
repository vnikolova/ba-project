
const express = require('express');
const users = require('./server/routes/users');
const projects = require('./server/routes/projects');
const index = require('./server/routes/index');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const path = require('path');

//set up express app
const app = express();

const PORT = process.env.PORT || 3001;

//connect to mongoDB
mongoose.connect('mongodb://localhost/raisedb');
//override deprecated promise
mongoose.Promise = global.Promise;

//look at the body of the request, parse and push
//needs to be on top
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//add session middleware
app.use(session({
  secret: "sfghsrfjusgyjugd",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 360 * 160 * 1000
  }
}));

//add routes handlers
app.use('/api/users',users);
app.use(index);
app.use(projects);
//error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({ error: err.message });
});

//listen for requests
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
