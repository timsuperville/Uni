const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
   firstName: {
      type: String,
      required: true
   },
   middleName: {
      type: String
   },
   lastName: {
      type: String,
      required: true
   },
   otherNames: [
      {
         type: String
      }
   ],
   dateOfBirth: {
      type: Date,
   },
   email: {
      type: String,
      unique: true
   },
   phone: {
      type: String,
      unique: true
   },
   address: {
      type: String
   },
   city: {
      type: String
   },
   state: {
      type: String
   },
   country: {
      type: String
   },
   zip: {
      type: String
   },
   createdAt: {
      type: Date,
      default: Date.now
   },
   updatedAt: {
      type: Date,
      default: Date.now
   },
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   status: {
      type: String,
      default: 'active'
   },
   deletedAt: {
      type: Date
   }

}, {
   timestamps: true
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;