// import { Profile } from './profile/index.js';
import { getTasks, createTask, getTask, updateTask, deleteTask } from "./tasks/index.js";

const userIndex = async () => {
  const tasksList = document.getElementById("tasks-list");
  const tasks = await getTasks();
  if (tasks.length === 0) {
    tasksList.innerHTML = "<div>You have no tasks</div>";
    return;
  }
  tasksList.innerHTML = tasks
    .map((task) => `<div>${task.title}</div>`)
    .join("");
};

export { userIndex };
