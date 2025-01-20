const authentication = require('express').Router();

const authController = require('../../../controllers/user/authentication');

authentication.post('/signup', authController.signup);
authentication.post('/login', authController.login);
authentication.post('/logout', authController.logout);
authentication.post('/forgot-password', authController.forgotPassword);
authentication.post('/reset-password', authController.resetPassword);

module.exports = authentication;