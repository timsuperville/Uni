const User = require('../models/User');

const UserRepository = {
   getUserByEmail: async (email) => {
      const user = await User.findOne ({ email });
      return user;
   }
};

module.exports = UserRepository;