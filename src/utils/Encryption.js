const bcrypt = require("bcrypt");
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

module.exports = {
  hashPassword,
  comparePassword,
  generateRandomPassword
};
