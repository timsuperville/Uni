const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StemSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   duration: {
      type: Number,
      required: true
   },
   fileUrl: {
      type: String,
      required: true
   },
   trackId: {
      type: Schema.Types.ObjectId,
      ref: 'Track',
      required: true
   },
   createdAt: {
      type: Date,
      default: Date.now
   }
});

module.exports = mongoose.model('Stem', StemSchema);