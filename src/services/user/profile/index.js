const profileRepository = require("../../../repositories/user/profile/index.js");

const createProfile = async (userId, data) => {
  return await profileRepository.createProfile(userId, data);
};

const getProfile = async (userId) => {
  const profile = await profileRepository.getProfile(userId);
  if (!profile) {
    const newProfile = await profileRepository.createProfile(userId, {});
    return newProfile;
  }
  return profile;
};

const editProfile = async (userId, data) => {
  return await profileRepository.editProfile(userId, data);
};

const deleteProfile = async (userId) => {
  return await profileRepository.deleteProfile(userId);
};

module.exports = {
  getProfile,
  editProfile,
  deleteProfile,
  createProfile,
};
