const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create project schema and model
const projectSchema = new Schema({
    title: String,
    description: String,
    user_id: Schema.Types.ObjectId,
    location: String,
    funding: {
      indiegogo: String,
      kickstarter: String
    },
    cause: String,
    category: String,
    roles: String,
    deadline: Date,
    updated: {
      type: Date,
      default: Date.now
    }

});

const Project = mongoose.model('project', projectSchema);

module.exports = Project;
