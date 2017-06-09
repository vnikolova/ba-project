const Validator = require('validator');
const isEmpty = require('lodash/isEmpty');

module.exports =  function validateInput(data) {
	var errors = {};

	if(Validator.isEmpty(data.email)){
		errors.email = "This field is required";
	}
	if(!Validator.isEmail(data.email)){
		errors.email = "Email is invalid.";
	}
	if(Validator.isEmpty(data.password)){
		errors.password = "This field is required";
	}

	return {
		errors: errors,
		isValid: isEmpty(errors)
	}
}
