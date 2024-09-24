const sessions = require('../drivers/Express-Session/index.js');
const Encryption = require("../utils/Encryption.js");
const Messanger = require("../utils/Messanger.js");
const UserRepository = require("../repositories/userRepository.js");

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
    return user;
  },
  forgotPassword: async (email) => {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      return { error: "User not found" };
    }
      const token = Encryption.generateToken(user);
      const subject = "Password Reset";
      const text = `Click the link to reset your password: ${process.env.BASE_URL}/reset-password/${token}`;
      return Messanger.sendEmail(process.env.EMAIL, user.email, subject, text);
  },
  logout: async () => {
    sessions.destroy();
    return { message: "Logged out" };
  }
};

module.exports = authServices;
