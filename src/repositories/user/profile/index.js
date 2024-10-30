const Profile = require("../../../models/Profile.js");

const createProfile = async (userId, profile) => {
  return await Profile.create({ user: userId, ...profile });
};

const getProfile = async (userId) => {
  return await Profile.findOne({ _id: userId });
};

const editProfile = async (userId, profile) => {
  return await Profile.findOneAndUpdate({ user: userId }, profile, {
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
