const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   status: {
      type: String,
      enum: ['pending', 'in-progress', 'completed'],
      default: 'pending'
   },
   dueDate: {
      type: Date,
      required: false
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   updatedAt: {
      type: Date,
      default: Date.now
   }
});

TaskSchema.pre('save', function(next) {
   this.updatedAt = Date.now();
   next();
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;