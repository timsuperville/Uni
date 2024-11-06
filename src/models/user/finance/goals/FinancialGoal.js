const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FinancialGoalSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   name: {
      type: String,
      required: true
   },
   description: {
      type: String
   },
   type: {
      type: String,
      required: true
   },
   targetAmount: {
      type: Number,
      required: true
   },
   currentAmount: {
      type: Number,
      default: 0
   },
   dueDate: {
      type: Date,
      required: true
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

FinancialGoalSchema.pre('save', function(next) {
   this.updatedAt = Date.now();
   next();
});

module.exports = mongoose.model('FinancialGoal', FinancialGoalSchema);