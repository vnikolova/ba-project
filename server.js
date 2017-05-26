
const express = require('express');
const users = require('./server/routes/users');
const bodyParser = require('body-parser');

//set up express app
const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use('/api/users',users);

//listen for requests
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
