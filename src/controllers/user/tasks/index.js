const taskService = require("../../../services/user/tasks/index.js");

const getTasks = async (req, res) => {
  const { id } = req.session.user;
  try {
    const tasks = await taskService.getTasks(id);
    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTask = async (req, res) => {
  try {
    const task = await taskService.getTask(req.params.id);
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createTask = async (req, res) => {
  const _id = req.session.user._id;
  req.body.userId = _id;

  try {
    const task = await taskService.createTask(req.body);
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    res.status(200).send(task);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.session.user;
  try {
    const task = await taskService.deleteTask(req.params.id, id);
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
