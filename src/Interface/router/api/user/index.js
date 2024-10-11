const user = require('express').Router();

const userController = require('../../../controllers/user/index.js');

user.get('/', userController.getUser); // gets the current user
user.get('/edit/:id', userController.editUser);
user.post('/update/:id', userController.updateUser);
user.delete('/delete/:id', userController.deleteUser);

module.exports = user;