const tasks = require('express').Router();
const tasksController = require('../../../../controllers/user/tasks');

tasks.get('/', tasksController.getTasks); // gets all user tasks
tasks.post('/update/:id', tasksController.updateTask);
tasks.delete('/delete/:id', tasksController.deleteTask);
tasks.get('/:id', tasksController.getTask);

module.exports = tasks;