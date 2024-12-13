const config = require("../../config");
const jwt = require("./jwt");
const Encryption = require("../../utils/Encryption.js");
const Messanger = require("../messanger");
const UserRepository = require("../../repositories/user/index.js");

const authServices = {
  register: async (username, email, password) => {
    const userWithUsername = await UserRepository.getUserByUsername(username);
    if (userWithUsername) {
      return { error: "Username already exists" };
    }
    const userWithEmail = await UserRepository.getUserByEmail(email);
    if (userWithEmail) {
      return { error: "Email already exists" };
    }
    // hash the password
    const hashedPassword = await Encryption.hashPassword(password);
    // create the user
    const newUser = await UserRepository.createUser(
      username,
      email,
      hashedPassword
    );
    // update the user id to match user._id
    newUser.id = newUser._id;
    const updatedUser = await UserRepository.updateUser(newUser);
    updatedUser.password = undefined;
    // return the user
    return updatedUser;
  },

  login: async (username, password) => {
    // find the user by username or email
    let user = await UserRepository.getUserByUsername(username);
    if (!user) {
      user = await UserRepository.getUserByEmail(username);
      if (!user) {
        return { error: "User not found" };
      }
    }
    // compare the password
    const match = await Encryption.comparePassword(password, user.password);
    if (!match) {
      return { error: "Invalid password" };
    }
    // update the user id to match user._id
    if (!user.id) {
      user.id = user._id;
      await UserRepository.updateUser(user);
    }
    // generate a token
    user.token = await jwt.generateToken({ id: user.id });
    user.password = undefined;
    return user;
  },

  forgotPassword: async (email) => {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      return { error: "User not found" };
    }
    const token = await jwt.generatePasswordResetToken({ email });
    user.resetToken = token;
    user.resetExpire = Date.now() + 3600000; // 1 hour
    await UserRepository.updateUser(user._id, user);
    const resetLink = `${config.clientUrl}/reset-password?email=${email}&token${token}`;
    const mailerResponse = await Messanger.sendPasswordResetEmail(
      email,
      resetLink
    );
    return { message: mailerResponse, resetLink };
  },

  resetPassword: async (email, token, password) => {
    const user = await UserRepository.getUserByEmail(email);
    if (!user) {
      return { error: "User not found" };
    }
    if (user.resetToken !== token) {
      return { error: "Invalid token" };
    } else if (user.resetExpire < Date.now()) {
      return { error: "Token expired" };
    } else {
      user.resetToken = null;
      user.resetExpire = null;
      const hash = await Encryption.hashPassword(password);
      user.password = hash;
      const updatedUser = await UserRepository.updateUser(user._id, user);
      updatedUser.password = undefined;
      return updatedUser;
    }
  },
};

module.exports = authServices;
