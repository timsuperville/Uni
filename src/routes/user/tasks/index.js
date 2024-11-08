const tasksRouter = require('express').Router();

const tasksController = require('../../../controllers/user/tasks');

tasksRouter.get('/all', tasksController.getTasks); // gets all tasks for user
tasksRouter.get('/1/:id', tasksController.getTask); // gets a task
tasksRouter.post('/new', tasksController.createTask); // creates a task
tasksRouter.put('/1/:id', tasksController.updateTask); // updates a task
tasksRouter.delete('/1/:id', tasksController.deleteTask); // deletes a task

module.exports = tasksRouter;