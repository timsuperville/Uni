const repository = require('../../../repositories/user/tasks');

const getTasks = async () => {
  return await repository.getTasks();
};

const getTask = async (id) => {
  return await repository.getTask(id);
};

const updateTask = async (id, task) => {
  return await repository.updateTask(id, task);
};

const deleteTask = async (id) => {
  return await repository.deleteTask(id);
};

const createTask = async (task) => {
  return await repository.createTask(task);
};

module.exports = {
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};