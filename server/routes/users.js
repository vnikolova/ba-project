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
router.get('/', function(req, res, next){
	res.send({ type: 'GET' });
});

//add user to the db
router.post('/', function(req, res, next){

	User.create(req.body).then(function(user){
		res.send(user);
	}).catch(next); //moves on to next middleware if catches error

});

//update user in the db
router.put('/:id', function(req, res, next){
	res.send({ type: 'PUT' });
});

//delete user from the db
router.delete('/:id', function(req, res, next){
	res.send({ type: 'DELETE' });
});

module.exports = router;
