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

const updateUser = async (id, userData) => {
   try {
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

module.exports = {
   getUser,
   createUser,
   updateUser,
   getAvatar,
   updateAvatar
};