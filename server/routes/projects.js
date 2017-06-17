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
	console.log(req.session);
	var userId = req.session.user._id;
	var data = Object.assign(req.body, {user_id: userId});
	Project.create(data).then(function(project){
    res.status(200).send();
	}).catch(next); //moves on to next middleware if catches error

});


module.exports = router;
