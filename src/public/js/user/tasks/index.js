const getTasks = async () => {
  const response = await fetch("/api/user/tasks/all", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const getTask = async (id) => {
  const response = await fetch(`/api/user/tasks/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const createTask = async (task) => {
  const response = await fetch("/api/user/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
};

const updateTask = async (id, task) => {
  const response = await fetch(`/api/user/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
};

const deleteTask = async (id) => {
  const response = await fetch(`/api/user/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};


(async () => {
  const main = document.getElementById("main");
  const tasksList = document.getElementById("tasks-list");
  const taskForm = document.getElementById("task-form");

const taskPage = `
  <div id="main">
    <h1>Task</h1>
    <div id="task-title"></div>
    <div id="task-status"></div>
    <div id="task-created"></div>
    <div id="task-updated"></div>
    <div id="task-user"></div>
  </div>
`;

  taskForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const task = {
      title: event.target.title.value,
    };
    await updateTask(task);
  });

  const tasks = await getTasks();

  if (tasks.length === 0) {
    tasksList.innerHTML = "<div>You have no tasks</div>";
  }

  if (tasks.length > 0) {
    (async () => {
      tasksList.innerHTML = "";

      tasks.forEach((task) => {
        const taskAnchor = document.createElement("a");
        taskAnchor.href = `/user/tasks/task/:${task.id}`;
        taskAnchor.innerHTML = task.title;
        tasksList.appendChild(taskAnchor);
      });
    })();
  }

      // const taskDiv = document.createElement("div");

      // taskDiv.innerHTML = `
      //   <div id="task-${task.id}"> ${task.title} </div>`
      // tasksList.appendChild(taskDiv);

      // const editButton = document.createElement("button");
      // editButton.innerHTML = "Edit";
      // taskDiv.appendChild(editButton);

      // editButton.addEventListener("click", async () => {
      //   const updatedTask = prompt("Update task", task.title);
      //   if (updatedTask) {
      //     task.title = updatedTask;
      //     await createTask(task);
      //   }
      // });

      
})();

export { getTasks, createTask, getTask, updateTask, deleteTask };
