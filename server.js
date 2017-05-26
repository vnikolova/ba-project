
const express = require('express');
const users = require('./server/routes/users');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

//add routes handlers
app.use('/api/users',users);

//listen for requests
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
