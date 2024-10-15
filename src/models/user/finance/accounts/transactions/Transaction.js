const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  account: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FinanceAccount",
    required: true,
  },
  type: { type: String, enum: ["debit", "credit"], required: true },
  amount: { type: Number },
  category: { type: String },
  date: { type: Date, default: Date.now },
  description: { type: String },
});

module.exports = mongoose.model("Transaction", transactionSchema);
