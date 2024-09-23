const bcrypt = require('bcrypt');

const saltRounds = 10;

// Function to hash a password
const hashPassword = async (password) => {
   try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
   } catch (error) {
      console.error('Error hashing password:', error);
   }
};

// Function to compare a password with a hash
const comparePassword = async (password, hash) => {
   if (!password || !hash) {
      throw new Error('Password and hash are required for comparison');
   }
   try {
      const match = await bcrypt.compare(password, hash);
      return match;
   } catch (error) {
      console.error('Error comparing password:', error);
      throw error;
   }
};

module.exports = {
   hashPassword,
   comparePassword
};