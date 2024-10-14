const Settings = require("../../../models/user/settings/UserSettings.js");

const getSettings = async (user) => {
  return await Settings.findOne({ user: user._id });
};

const updateSettings = async (user, settings) => {
  return await Settings.findOneAndUpdate({ user: user._id }, settings, {
    new: true,
  });
};

module.exports = {
  getSettings,
  updateSettings,
};
