const bcrypt = require("bcrypt");
const sessions = require('../drivers/Express-Session/index.js');
// const jwt = require("jsonwebtoken");
const Mailer = require("../utils/Messanger.js");
const UserRepository = require("../repositories/userRepository.js");

const authServices = {
  register: async (email, password) => {
    const user = await UserRepository.getUserByEmail(email);
    if (user) {
      return { message: "User already exists" };
    };
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserRepository.createUser(email, hashedPassword);
    // update the user id to match user._id
    newUser.id = newUser._id;
    await UserRepository.updateUser(newUser);
    sessions.createSession(newUser);

    return newUser;
  },

  login: async (email, password) => {
    const user = UserRepository.getUserByEmail(email);
    if (!user) {
      return { message: "User not found" };
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return { message: "Invalid password" };
    }
    sessions.createSession(user);
    return user;
  },
  
  logout: async () => {
    sessions.destroy();
    return { message: "Logged out" };
  },

  forgotPassword: async (email) => {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      return null;
    }
    const newPassword = Math.random().toString(36).slice(-8);
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await UserRepository.updatePassword(user.id, hashedPassword);
    await Mailer.sendEmail(email, "Password Reset", `Your new password is: ${newPassword}`);
    return
  }
};

module.exports = authServices;
