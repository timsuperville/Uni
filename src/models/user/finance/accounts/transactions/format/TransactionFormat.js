const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TransactionFormatSchema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  csvDelimiter: {
    type: String,
  },
  csvHeader: {
    type: Boolean,
  },
  csvDateFormat: {
    type: String,
  },
  csvAmountIndex: {
    type: Number,
  },
  csvDescriptionIndex: {
    type: Number,
  },
  csvDateIndex: {
    type: Number,
  },
  debitIndex: {
    type: Number,
  },
  creditIndex: {
    type: Number,
  },
  csvReferenceIndex: {
    type: Number,
  },
  csvTypeIndex: {
    type: Number,
  },
  csvBalanceIndex: {
    type: Number,
  },
  csvCurrencyIndex: {
    type: Number,
  },
  csvAccountIndex: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("TransactionFormat", TransactionFormatSchema);
