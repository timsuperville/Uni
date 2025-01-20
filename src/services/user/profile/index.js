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
  const updatedProfile = await profileRepository.editProfile(userId, data);
  // if the profile does not exist, create a new one
  if (!updatedProfile) {
    return await profileRepository.createProfile(userId, data);
  }
  return updatedProfile;
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
