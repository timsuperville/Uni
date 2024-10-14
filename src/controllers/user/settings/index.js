const settingsService = require('../../../services/user/settings/index.js');

const getSettings = async (req, res) => {
   const { user } = req.session;
   const settings = await settingsService.getSettings(user);
   res.json(settings);
};

const updateSettings = async (req, res) => {
   const { user } = req.session;
   const settings = await settingsService.updateSettings(user, req.body);
   res.json(settings);
};

module.exports = {
   getSettings,
   updateSettings,
};