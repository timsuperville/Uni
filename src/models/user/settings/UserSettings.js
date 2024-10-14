const mongoose = require('mongoose');

const UserSettingsSchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
   },
   theme: {
      type: String,
      enum: ['light', 'dark'],
      default: 'light'
   },
   notifications: {
      email: {
         type: Boolean,
         default: true
      },
      sms: {
         type: Boolean,
         default: false
      }
   },
   language: {
      type: String,
      default: 'en'
   }
}, {
   timestamps: true
});

const UserSettings = mongoose.model('UserSettings', UserSettingsSchema);

module.exports = UserSettings;