const encryption = require("../utils/Encryption.js");
const sessions = require('../drivers/Express-Session/index.js');
// const jwt = require("jsonwebtoken");
const Messanger = require("../utils/Messanger.js");
const UserRepository = require("../repositories/userRepository.js");

const authServices = {
  register: async (email, password) => {
    const user = await UserRepository.getUserByEmail(email);
    if (user) {
      return { message: "User already exists" };
    };
    const hashedPassword = await encryption.hashedPassword(password);
    const newUser = await UserRepository.createUser(email, hashedPassword);
    // update the user id to match user._id
    newUser.id = newUser._id;
    await UserRepository.updateUser(newUser);
    sessions.createSession(newUser);

    return newUser;
  },

  login: async (email, password) => {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      return { message: "User not found" };
    }
    console.log("user", user);
    const match = await encryption.comparePassword(password, user.password);
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
    const hashedPassword = await encryption.hashPassword(newPassword, 10);
    user.password = hashedPassword;
    await UserRepository.updateUser(user);
    console.log(newPassword);
  }
};

module.exports = authServices;
