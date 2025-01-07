const mongoosw = require('mongoose');

const songSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   id: {
         type: String,
    },
   audioFile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'AudioFile',
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