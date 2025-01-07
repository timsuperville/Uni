const Profile = require("../../../models/Profile.js");

const createProfile = async (userId, data) => {
  return await Profile.create({ user: userId, ...data });
};

const getProfile = async (userId) => {
  return await Profile.findOne({ user: userId });
};

const editProfile = async (userId, data) => {
  return await Profile.findOneAndUpdate({ user: userId }, data, {
    new: true,
  });
};

const deleteProfile = async (userId) => {
  return await Profile.findOneAndDelete({ user: userId });
};

module.exports = {
  getProfile,
  editProfile,
  deleteProfile,
  createProfile,
};
