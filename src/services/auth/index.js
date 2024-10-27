const config = require('../../config');
const Encryption = require("../../utils/Encryption.js");
const Messanger = require("../messanger");
const UserRepository = require("../../repositories/user/index.js");

const authServices = {
  register: async (email, password) => {
    const user = await UserRepository.getUserByEmail(email);
    if (user) {
      return { error: "User already exists" };
    };
    const hash = await Encryption.hashPassword(password);
    const newUser = await UserRepository.createUser(email, hash);
    // update the user id to match user._id
    newUser.id = newUser._id;
    await UserRepository.updateUser(newUser);
    return newUser;
  },
  login: async (email, password) => {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      return { error: "User not found" };
    }
    const match = await Encryption.comparePassword(password, user.password);
    if (!match) {
      return { error: "Invalid password" };
    }
    if (!user.id) {
      user.id = user._id;
      await UserRepository.updateUser(user);
    }
    return user;
  },
  forgotPassword: async (email) => {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      return { error: "User not found" };
    }
      const token = Encryption.generatePasswordResetToken({ email });
      user.resetToken = token;
      user.resetExpire = Date.now() + 3600000; // 1 hour
      await UserRepository.updateUser(user);
      const resetLink = `${config.appUrl}/auth/reset-password/${token}`;
      await Messanger.sendPasswordResetEmail(email, resetLink);
      
  },
  resetPassword: async (email, token, password) => {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      return { error: "User not found" };
    }
    const valid = Encryption.verifyToken(token, user);
    if (!valid) {
      return { error: "Invalid or expired token" };
    }
    const hash = await Encryption.hashPassword(password);
    user.password = hash;
    await UserRepository.updateUser(user);
    return user;
  }
};

module.exports = authServices;
