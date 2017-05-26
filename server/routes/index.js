const express = require('express');

let router = express.Router();

router.get('/dashboard', function(req, res, next){

  if(!req.session.user) {
    return res.status(401).send();
  }

  return res.status(200).send(req.session.user);
});

module.exports = router;
