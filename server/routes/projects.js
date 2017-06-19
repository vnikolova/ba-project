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

router.get('/search/:category*?', function(req, res, next){
	var data = req.params.category ? { category: req.params.category} : {};

	Project.find(data, function(err,projects){
		if(err) {
			return res.status(500).send();
		}
		// var results = projects;
		// for (project of results) {
		// 	User.findOne({_id: project.user_id},function(err, data){
		// 		project.user = data.name;
		// 		console.log(project);
		// 	});
		// }

		res.send(projects);
		return res.status(200).send();
	}).catch(next);
	// });
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
	}).catch(next); //moves on to next middleware if catches error

});

router.get('/projects/:id', function(res,req,next){

	// State.find({}, function(err,projects){
	// 	if(err) {
	// 		return res.status(500).send();
	// 	}
	// 	res.send(projects);
	// 	return res.status(200).send();

		// projects.each(function (error, project){
		// 	Project.findOne({_id: project._id}, function(err, data){
		// 		results.push(data);
		// 	});
	});
// });

module.exports = router;
