const User = require('../../models/User');

const UserRepository = {
   getUserByEmail: async (email) => {
      const user = await User.findOne ({ email });
      return user;
   },
   getUserByUsername: async (username) => {
      const user = await User.findOne ({ username });
      return user;
   },
   getUserById: async (_id) => {
      const user = await User.findOne ({ _id });
      return user;
   },
   createUser: async (username, email, password) => {
      const user = new User({ username, email, password });
      await user.save();
      return user;
   },
   updateUser: async (id, user) => {
      const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
      return updatedUser;
   }
};

module.exports = UserRepository;