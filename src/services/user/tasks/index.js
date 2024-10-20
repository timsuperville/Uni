const repository = require('../../../repositories/user/tasks');

const getTasks = async (userId) => {
  return await repository.getTasks(userId);
};

const getTask = async (id) => {
  return await repository.getTask(id);
};

const createTask = async (task) => {
  return await repository.createTask(task);
};

const updateTask = async (id, task) => {
  return await repository.updateTask(id, task);
};

const deleteTask = async (id, userId) => {
  if (task.userId !== userId) {
    throw new Error('Unauthorized');
  }
  return await repository.deleteTask(id);
};

module.exports = {
  getTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};