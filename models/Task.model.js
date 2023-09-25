// models/Task.model.js

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: String,
  project: { type: Schema.Types.ObjectId, ref: 'Project' } // only 1 project (not an array)
});

module.exports = model('Task', taskSchema);
