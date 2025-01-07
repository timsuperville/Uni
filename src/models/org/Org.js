const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrgSchema = new Schema({
   name: {
      type: String,
      required: true,
      trim: true
   },
   description: {
      type: String,
      trim: true
   },
   icon: {
      type: String,
      trim: true
   },
   logo: {
      type: String,
      trim: true
   },
   address: {
      type: String,
      required: true,
      trim: true
   },
   phone: {
      type: String,
      required: true,
      trim: true
   },
   email: {
      type: String,
      required: true,
      trim: true,
      unique: true
   },
   website: {
      type: String,
      trim: true
   },
   admin: [
      {
         type: Schema.Types.ObjectId,
         ref: 'User'
      }
   ],
   createdAt: {
      type: Date,
      default: Date.now
   },
   updatedAt: {
      type: Date,
      default: Date.now
   }
});

OrgSchema.pre('save', function(next) {
   this.updatedAt = Date.now();
   next();
});

module.exports = mongoose.model('Org', OrgSchema);