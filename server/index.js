'use strict';
import express from 'express';
import users from './routes/users';
import bodyParser from 'body-parser';

//and create our instances
var app = express();


const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api/users',users);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});