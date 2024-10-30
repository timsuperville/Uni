const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   description: {
      type: String
   },
   address: {
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
   members: [{
      type: Schema.Types.ObjectId,
      ref: 'user'
   }],
   invites: [{
      type: Schema.Types.ObjectId,
      ref: 'user'
   }],
   requests: [{
      type: Schema.Types.ObjectId,
      ref: 'user'
   }],
   owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
   },
   created: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model('Home', HomeSchema);