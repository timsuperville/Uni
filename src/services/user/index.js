const repository = require('../../repositories/user');

const getUser = async (id) => {
   try {
      const user = await repository.findById(id);
      return user;
   } catch (error) {
      throw new Error('Error fetching user');
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
   createUser
};