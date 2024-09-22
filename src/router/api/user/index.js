const api = require('express').Router();

const userController = require('../../../controllers/userController');

api.get('/profile/:id', userController.profile);
api.get('/edit/:id', userController.edit);
api.post('/update/:id', userController.update);
api.delete('/delete/:id', userController.delete);

module.exports = api;