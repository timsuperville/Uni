const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const config = require("../config");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};
const comparePassword = async (password, hash) => {
  if (!password || !hash) {
    throw new Error('Password and hash are required for comparison');
 }
 
 try {
    const isMatch = await bcrypt.compare(password, hash);
    return isMatch;
 } catch (err) {
    console.error('Error comparing passwords:', err);
    throw err;
 }
};
const generateRandomPassword = async () => {
  const randomPassword = crypto.randomBytes(4).toString("hex");
  return randomPassword;
};
const generateToken = async (payload) => {
  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" });
  return token;
};
const verifyToken = async (token, user) => {
  const payload = jwt.verify(token, config.jwtSecret);
  if (payload.email !== user.email) {
    return false;
  }
  return true;
};
const generatePasswordResetToken = async (payload) => {
  const token = jwt.sign(payload, config.jwtSecret, { expiresIn: "1h" });
  return token;
};
const verifyPasswordResetToken = async (token) => {
  const payload = jwt.verify(token, config.jwtSecret);
  return payload;
};

module.exports = {
  hashPassword,
  comparePassword,
  generateRandomPassword,
  generateToken,
  verifyToken,
  generatePasswordResetToken,
  verifyPasswordResetToken,
};
