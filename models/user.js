const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create user schema and model
const userSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Name field is required']
    },
    email: {
      type: String,
      required: [true, 'Email is required']
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    },
    dob: Date,
    country: String,
    location : String,
    job: String,
    interests: [String],
    phoneNumber: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
