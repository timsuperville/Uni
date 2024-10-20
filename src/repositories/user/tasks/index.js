const Task = require("../../../models/user/task/Task");

const TasksRepository = {
  getTasks: async (id) => {
    return await Task.find({ userId: id });
  },

  getTask: async (id) => {
    return await Task.findById(id);
  },

  createTask: async (task) => {
    const t = await Task.create(task);
    t.id = t._id;
    return await Task.findByIdAndUpdate(t._id, t, { new: true });
  },

  updateTask: async (id, task) => {
    return await Task.findByIdAndUpdate(id, task, { new: true });
  },

  deleteTask: async (id) => {
    return await Task.findByIdAndDelete(id);
  },
}

module.exports = TasksRepository;
