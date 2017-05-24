const express = require('express');
const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

let router = express.Router();


function validateInput(data) {
	let errors = {};
	
	if(Validator.isEmpty(data.name)){
		errors.name = "This field is required";
	}
	if(Validator.isEmpty(data.email)){
		errors.email = "This field is required";
	}
	if(!Validator.isEmail(data.email)){
		errors.email = "Email is invalid.";
	}
	if(Validator.isEmpty(data.password)){
		errors.password = "This field is required";
	}
	if(Validator.isEmpty(data.passwordConfirmation)){
		errors.passwordConfirmation = "This field is required";
	}
	if(!Validator.equals(data.password, data.passwordConfirmation)) {
		errors.passwordConfirmation = 'Passwords must match';
	}
	return {
		errors,
		isValid: isEmpty(errors)
	}
}

router.post('/', (req, res) => {
	const {errors, isValid} = validateInput(req.body);

	if(!isValid){
		res.status(400).json(errors);
	}
});

module.exports = router;