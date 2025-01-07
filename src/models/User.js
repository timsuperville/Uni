const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: { type: String },
  username: { type: String, unique: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  avatar: { type: String, default: "/img/avatar.png" },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: "Profile", default: null },
  home: { type: mongoose.Schema.Types.ObjectId, ref: "Home", default: null },
  org: { type: mongoose.Schema.Types.ObjectId, ref: "Org", default: null },
  role: { type: String, default: "user" },
  refreshTokens: [{ token: { type: String, required: true } }],
  resetToken: { type: String },
  resetExpire: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
