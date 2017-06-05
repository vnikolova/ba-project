const express = require('express');
const Project = require('../../models/project');

let router = express.Router();

router.get('/search', function(req, res, next){
	Project.find({}, function(err,projects){
		if(err) {
			console.log(err);
			return res.status(500).send();
		}
    res.send(projects)
		return res.status(200).send();
	}).catch(next);
});

router.post('/create', function(req, res, next){
  console.log(req.body);
	Project.create(req.body).then(function(project){
    res.status(200).send();
	}).catch(next); //moves on to next middleware if catches error

});


module.exports = router;
