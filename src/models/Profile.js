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
   email: {
      type: String
   },
   phone: {
      type: String
   },
   mobile: {
      type: String
   },
   website: {
      type: String
   },
   address: {
      type: String
   },
   street: {
      type: String
   },
   city: {
      type: String
   },
   region: {
      type: String
   },
   country: {
      type: String
   },
   postcode: {
      type: String
   },
   bio: {
      type: String
   },
   maritalstatus: {
      type: String
   },

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
   },
   youtube: {
      type: String
   },
   pinterest: {
      type: String
   },
   google: {
      type: String
   },
   github: {
      type: String
   },
   bitbucket: {
      type: String
   },
   date: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model('Profile', ProfileSchema);