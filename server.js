// 'use strict';
// import express from 'express';
// import users from './server/routes/users';
// import bodyParser from 'body-parser';

// //and create our instances
// var app = express();


// const PORT = process.env.PORT || 3001;

// app.use(bodyParser.json());

// app.use('/api/users',users);

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });


const express = require('express');
const users = require('./server/routes/users');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api/users',users);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});