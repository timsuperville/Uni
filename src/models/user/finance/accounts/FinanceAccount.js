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
   accountName: {
      type: String,
      required: true
   },
   balance: {
      type: Number,
      required: true,
      default: 0
   },
   shared: {
      type: Boolean,
      required: true,
      default: false
   },
   sharedUsers: {
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