const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create project schema and model
const projectSchema = new Schema({
    title: {
      type: String
    },
    text: {
      type: String
    }
});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
