const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create project schema and model
const stateSchema = new Schema({
    project_id: Schema.Types.ObjectId,
    user_id: Schema.Types.ObjectId,
    owned: Boolean,
    applied: Boolean,
    dateCreated: Date
});

const State = mongoose.model('project', projectSchema);

module.exports = State;
