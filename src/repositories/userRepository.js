const User = require('../models/User');

const UserRepository = {
   getUserByEmail: async (email) => {
      const user = await User.findOne ({ email });
      return user;
   },
   createUser: async (email, password) => {
      const user = new User({ email, password });
      await user.save();
      return user;
   },
   updateUser: async (user) => {
      const updatedUser = await User.findByIdAndUpdate(user.id, user, { new: true });
      return updatedUser;
   }
};

module.exports = UserRepository;