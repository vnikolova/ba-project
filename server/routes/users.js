const express = require('express');
const validateInput = require('../shared/validations/signup');
const User = require('../../models/user');

let router = express.Router();

// router.post('/', (req, res) => {
// 	const {errors, isValid} = validateInput(req.body);
//
// 	if(isValid){
// 		res.json({ success: true });
// 	}else{
// 		res.status(400).json(errors);
// 	}
// });

//get user from the db
router.post('/login', function(req, res, next){
	User.findOne({ email: req.body.email, password: req.body.password }, function(err, user){
		if(err) {
			console.log(err);
			return res.status(500).send();
		}

		if(!user){
			return res.status(404).send();
		}
		req.session.user = user;
		return res.status(200).send();
	});
});

//add user to the db
router.post('/signup', function(req, res, next){

	User.create(req.body).then(function(user){
		req.session.user = user;
		res.status(200).send(user);
	}).catch(next); //moves on to next middleware if catches error

});

//destroy user session
router.get('/logout', function(req,res){
	req.session.destroy();
	return res.status(200).send();
});

//update user in the db
router.put('update/:id', function(req, res, next){
	User.findByIdAndUpdate({ _id: req.params.id },req.body).then(function(){
		//find the updated record
		User.findOne({ _id: req.params.id}).then(function(user){
			res.send(user);
		});

	});
});

//delete user from the db
router.delete('delete/:id', function(req, res, next){
	User.findByIdAndRemove({ _id: req.params.id }).then(function(user){
		res.send(user);
	});
});

module.exports = router;
