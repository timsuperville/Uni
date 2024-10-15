const Task = require("../../../models/user/task/Task.js");

class TasksRepository {
  async getTasks() {
    return await Task.find();
  }

  async updateTask(id, task) {
    return await Task.findByIdAndUpdate(id, task, { new: true });
  }

  async deleteTask(id) {
    return await Task.findByIdAndDelete(id);
  }

  async getTask(id) {
    return await Task.findById(id);
  }

  async createTask(task) {
    return await Task.create(task);
  }

  async getTaskByTitle(title) {
    return await Task.findOne({ title });
  }

  async getTaskByDescription(description) {
    return await Task.findOne({ description });
  }

  async getTaskByCompleted(completed) {
    return await Task.findOne({ completed });
  }

  async getTaskById(id) {
    return await Task.findById(id);
  }

  async getTaskByUserId(userId) {
    return await Task.findOne({ userId });
  }
}

module.exports = TasksRepository;
