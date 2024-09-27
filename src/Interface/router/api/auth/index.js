const api = require('express').Router();

const authController = require('../../../controllers/authController');

api.post('/register', authController.register);
api.post('/login', authController.login);
api.post('/logout', authController.logout);
api.post('/forgot-password', authController.forgotPassword);
api.post('/reset-password', authController.resetPassword);

module.exports = api;