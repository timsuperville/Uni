const profileRepository = require("../../../repositories/user/profile/index.js");

const createProfile = async (user, profile) => {
  return await profileRepository.createProfile(user, profile);
};

const getProfile = async (user) => {
  const profile = await profileRepository.getProfile(user.id);
  if (!profile) {
    throw new Error("Profile not found");
  }
  return profile;
};

const editProfile = async (user, profile) => {
  return await profileRepository.editProfile(user, profile);
};

const deleteProfile = async (user) => {
  return await profileRepository.deleteProfile(user);
};

module.exports = {
  getProfile,
  editProfile,
  deleteProfile,
  createProfile,
};
