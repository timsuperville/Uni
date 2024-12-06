const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FinanceAccountSchema = new Schema({
   userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   institution: {
      type: String
   },
   name: {
      type: String,
      required: true
   },
   type: {
      type: String,
      required: true
   },
   balance: {
      type: Number,
      default: 0
   },
   shared: {
      type: Boolean,
      default: false
   },
   sharedWith: {
      type: [Schema.Types.ObjectId],
      ref: 'User'
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

FinanceAccountSchema.pre('save', function(next) {
   this.updatedAt = Date.now();
   next();
});

module.exports = mongoose.model('FinanceAccount', FinanceAccountSchema);