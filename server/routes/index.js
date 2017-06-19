const express = require('express');
const bodyParser = require('body-parser');
const keys = require('../twiliokeys');

let router = express.Router();

router.get('/api', function(req, res, next){

  if(!req.session.user) {
    return res.status(401).send();
  }

 res.status(200).send(req.session.user);
 return;
});

router.post('/sendsms',function(req, res){

  var client = require('twilio')(keys.sid, keys.token);

  client.messages.create({
    to: req.body.number,
    from: '+34960160276',
    body: 'Your confirmation code to Raise is '+req.body.code
  }).then((message) => console.log(message));

  return res.status(200);
});

module.exports = router;
