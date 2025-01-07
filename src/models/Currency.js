const mongoose = require('mongoose');

const currencySchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      trim: true
   },
   code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true
   },
   symbol: {
      type: String,
      required: true,
      trim: true
   },
   exchangeRate: {
      type: Number
   }
}, {
   timestamps: true
});

const Currency = mongoose.model('Currency', currencySchema);

module.exports = Currency;