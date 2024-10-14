const Profile = require("../../../models/Profile.js");

const createProfile = async (user, profile) => {
  return await Profile.create({ user: user._id, ...profile });
};

const getProfile = async (user) => {
  return await Profile.findOne({ user: user._id });
};

const editProfile = async (user, profile) => {
  return await Profile.findOneAndUpdate({ user: user._id }, profile, {
    new: true,
  });
};

const deleteProfile = async (user) => {
  return await Profile.findOneAndDelete({ user: user._id });
};

module.exports = {
  getProfile,
  editProfile,
  deleteProfile,
  createProfile,
};
