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
   updateUser: async (id, user) => {
      await User.updateOne({ _id: id }, user);
      return user;
   }
};

module.exports = UserRepository;