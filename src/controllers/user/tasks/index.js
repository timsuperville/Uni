const repository = require("../../../../repositories/user/tasks");

const getTasks = async (req, res) => {
  try {
    const tasks = await repository.getTasks();
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await repository.updateTask(req.params.id, req.body);
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await repository.deleteTask(req.params.id);
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTask = async (req, res) => {
  try {
    const task = await repository.getTask(req.params.id);
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await repository.createTask(req.body);
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getTasks,
  updateTask,
  deleteTask,
  getTask,
  createTask,
};
