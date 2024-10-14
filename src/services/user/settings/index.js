const settingsRepository = require("../../../repositories/user/settings/index.js");

const getSettings = async (user) => {
  return await settingsRepository.getSettings(user);
};

const updateSettings = async (user, settings) => {
  return await settingsRepository.updateSettings(user, settings);
};

module.exports = {
  getSettings,
  updateSettings,
};
