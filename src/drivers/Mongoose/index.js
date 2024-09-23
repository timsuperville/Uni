const mongoose = require("mongoose");
const config = require("../../config/config");

const connect = mongoose.connect(config.mongoURI, {
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;