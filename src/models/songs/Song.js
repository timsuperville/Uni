const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
   id: {
         type: String,
    },
   name: {
      type: String,
      required: true,
   },
   artist: {
      type: String,
      required: true,
   },
   album: {
      type: String,
   },
   lyrics: {
      type: String,
   },
   notes: {
      type: String,
   },
   group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Group',
      default: null,
   },
   createdAt: {
      type: Date,
      default: Date.now,
   },
   updatedAt: {
      type: Date,
      default: Date.now,
   }
});

module.exports = mongoose.model('Song', songSchema);