const Encryption = require("../../utils/Encryption.js");
const repository = require('../../repositories/user');
const { saveUserFile, savePublicAvatar, readFile } = require('../files');

const getUser = async (id) => {
   try {
      const user = await repository.findById(id);
      return user;
   } catch (error) {
      throw new Error('Error fetching user');
   }
};

const updateUser = async (userData) => {
   try {
      const { id } = userData;
      const updatedUser = await repository.update(id, userData);
      return updatedUser;
   } catch (error) {
      throw new Error('Error updating user');
   }
};

const getAvatar = async(path) => {
   try {
      const avatar = readFile(path);
      return avatar;
   }
   catch (error) {
      throw new Error('Error fetching avatar');
   }
};

const updateAvatar = async (id, file) => {
   try {
      await saveUserFile(file, id);
      const publicPath = await savePublicAvatar(file, id);
      const updatedUser = await repository.updateUser(id, { avatar: publicPath });
      return updatedUser;
   }
   catch (error) {
      throw new Error('Error updating avatar');
   }
};

const createUser = async (userData) => {
   try {
      const newUser = await repository.create(userData);
      return newUser;
   } catch (error) {
      throw new Error('Error creating user');
   }
};

const deleteUser = async (id) => {
   try {
      const deletedUser = await repository.delete(id);
      return deletedUser;
   } catch (error) {
      throw new Error('Error deleting user');
   }
};

const updatePassword = async (user) => {
   try {
      const { id, Password, newPassword } = user;
      if (!user.password) {
         throw new Error('Missing password');
      }
      const u = await repository.getUserById(id);
      const isMatch = await Encryption.comparePassword(Password, u.password);
      if (!isMatch) {
         throw new Error('Invalid password');
      }
      const hashedPassword = await Encryption.hashPassword(newPassword);
      const updatedUser = await repository.updateUser(id, { password: hashedPassword });
      return updatedUser;
   }
   catch (error) {
      throw new Error('Error updating password');
   }
};

const updateUsername = async (user) => {
   try {
      const { id, Password, newUsername } = user;
      if (!user.password) {
         throw new Error('Missing password');
      }
      const u = await repository.getUserById(id);
      const isMatch = await Encryption.comparePassword(Password, u.password);
      if (!isMatch) {
         throw new Error('Invalid password');
      }
      const updatedUser = await repository.updateUser(id, { user });
      return updatedUser;
   } catch (error) {
      throw new Error('Error updating username');
   }
};

module.exports = {
   getUser,
   createUser,
   updateUser,
   getAvatar,
   updateAvatar,
   deleteUser,
   updatePassword,
   updateUsername
};