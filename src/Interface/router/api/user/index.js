const api = require('express').Router();

const userController = require('../../../controllers/userController');

api.get('/', userController.getUser); // gets the current user
api.get('/edit/:id', userController.editUser);
api.post('/update/:id', userController.updateUser);
api.delete('/delete/:id', userController.deleteUser);
api.get('/person/:id', userController.getUserProfile);

module.exports = api;