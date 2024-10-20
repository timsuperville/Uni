const tasksRouter = require('express').Router();

const tasksController = require('../../../controllers/user/tasks');

tasksRouter.get('/all', tasksController.getTasks); // gets all tasks for user
tasksRouter.get('/:id', tasksController.getTask); // gets a task
tasksRouter.post('/', tasksController.createTask); // creates a task
tasksRouter.put('/:id', tasksController.updateTask); // updates a task
tasksRouter.delete('/:id', tasksController.deleteTask); // deletes a task

module.exports = tasksRouter;