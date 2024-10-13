const User = require('../../models/User.js');

const userRepository = {
  async create(user) {
    return await User.create(user);
  },
  async findByEmail(email) {
    return await User.findOne({ email });
  },
  async findById(id) {
    return await User.findById(id);
  },
  async update(id, user) {
    return await User.findByIdAndUpdate(id, user, { new: true });
  },
  async delete(id) {
    return await User.findByIdAndDelete(id);
  },
};

module.exports = userRepository;