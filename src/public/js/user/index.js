const tasksList = document.getElementById("tasks-list");

const tasks = async () => {
  const response = await fetch("/api/user/tasks/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (tasksList) {
    data.forEach((task) => {
      const li = document.createElement("li");
      li.innerText = task.name;
      tasksList.appendChild(li);
    });
  }
};

tasks();
