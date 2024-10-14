const settings = require('express').Router();

const settingsController = require('../../../controllers/user/settings/index.js');

settings.get('/', settingsController.getSettings);
settings.put('/', settingsController.updateSettings);

module.exports = settings;