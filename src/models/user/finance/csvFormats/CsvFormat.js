const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CsvFormatSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  institution: {
    type: String,
  },
  csvHeader: {
    type: Boolean,
  },
  format: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CsvFormat", CsvFormatSchema);
