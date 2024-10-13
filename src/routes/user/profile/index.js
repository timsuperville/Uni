const profileRouter = require('express').Router();

const profileController = require('../../../controllers/user/profile/index.js');

profileRouter.get('/', profileController.getProfile); // gets the current user's profile
profileRouter.put('/', profileController.editProfile); // updates the current user's profile
profileRouter.delete('/', profileController.deleteProfile); // deletes the current user's profile

module.exports = profileRouter;