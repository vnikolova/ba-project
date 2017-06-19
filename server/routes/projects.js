const express = require('express');
const Project = require('../../models/project');
const State = require('../../models/state');
const User = require('../../models/user');

let router = express.Router();

// router.get('/search', function(req, res, next){
// 	Project.find({}, function(err,projects){
// 		if(err) {
// 			console.log(err);
// 			return res.status(500).send();
// 		}
//     res.send(projects)
// 		return res.status(200).send();
// 	}).catch(next);
// });

router.get('/search', function(req, res, next){

	Project.find({}, function(err,projects){
		if(err) {
			return res.status(500).send();
		}
		res.send(projects);
		return;
	});
});

router.post('/create', function(req, res, next){
	var userId = req.session.user._id;
	var data = Object.assign(req.body, {user_id: userId});
	Project.create(data).then(function(project){
		var stateData = {
			project_id: project._id,
			user_id: userId,
			owned: true
		}
		//create status
		State.create(stateData).then(function(project){
			res.status(200).send();
		})
    res.status(200).send();
		return;
	});//moves on to next middleware if catches error

});

//get project by user id
router.get('/projects/:user_id', function(req,res,next){
	Project.find({user_id: req.params.user_id}, function(err,projects){
		if(err) {
			return res.status(500).send();
		}
		res.send(projects);
		// return res.status(200).send();
	}).catch(next);;
});

//get project by project id
router.get('/project/:id', function(req,res,next){
	Project.findOne({_id: req.params.id}, function(err,project){
		if(err) {
			return res.status(500).send();
		}
		res.send(project);
		return;
	}).catch(next);
});

module.exports = router;
