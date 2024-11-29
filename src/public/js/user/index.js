
const getUserTasks = async () => {
  const response = await fetch("/api/user/tasks/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

const renderTasks = async () => {
  const tasks = await getUserTasks();
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const taskElement = document.createElement("li");
    taskElement.innerText = task.name;
    taskList.appendChild(taskElement);
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  await renderTasks();
});