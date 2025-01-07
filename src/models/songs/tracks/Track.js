const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trackSchema = new Schema({
   title: {
      type: String,
      required: true
   },
   artist: {
      type: String,
      required: true
   },
   album: {
      type: String,
      required: true
   },
   duration: {
      type: Number,
      required: true
   },
   releaseDate: {
      type: Date,
      required: true
   },
   filePath: {
      type: String,
      required: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;