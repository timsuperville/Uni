const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
   user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   },
   firstname: {
      type: String
   },
   middlename: {
      type: String
   },
   othernames: {
      type: [String]
   },
   maidenname: {
      type: String
   },
   lastname: {
      type: String
   },
   maritalstatus: {
      type: String
   },
   bio: {
      type: String
   },
   website: {
      type: String
   },
   location: {
      type: String
   },
   social: {
      twitter: {
         type: String
      },
      facebook: {
         type: String
      },
      linkedin: {
         type: String
      },
      instagram: {
         type: String
      }
   },
   date: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model('Profile', ProfileSchema);