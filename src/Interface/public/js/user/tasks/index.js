// Mock data for Tasks
const Tasks = [
  { id: 1, text: "Write some code", completed: false },
  { id: 2, text: "Create elements", completed: true },
  { id: 3, text: "Fold laundry", completed: false },
  { id: 4, text: "Get real", completed: false },
  { id: 5, text: "Learn some stuff", completed: true },
];

const addTask = async (task) => {
  Tasks.push(task);
};

const updateTask = async (id, task) => {
  const index = Tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    Tasks[index] = task;
  }
};

const deleteTask = async (id) => {
  const index = Tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    Tasks.splice(index, 1);
  }
};

const getTask = async (id) => {
  return Tasks.find((task) => task.id === id);
};

const getTasks = async () => {
   const tasks = await fetch('/api/user/tasks');
   return tasks;
//   return Tasks;
};

document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.getElementById("addTaskButton");

  Tasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.className = "list-group-item d-flex justify-content-between align-items-center";

    taskItem.innerHTML = `
      <input type="hidden" class="task-id" value="${task.id}">
      <input type="checkbox" class="task-check" ${task.completed ? "checked" : ""}>
      <span class="task-text">${task.text}</span>
      <input type="text" class="form-control edit-input" style="display: none;" value="${task.text}">
      <div class="btn-group">
         <button class="btn btn-danger btn-sm delete-btn">&#x2715;</button>
         <button class="btn btn-primary btn-sm edit-btn">&#9998;</button>
      </div>
   `;

    if (task.completed) {
      taskItem.classList.add("completed");
    }

    taskList.appendChild(taskItem);
  });

// Event listener for the taskForm
  addTaskButton.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value;
    if (taskText) {
      addTask({ text: taskText, completed: false });
      taskInput.value = "";
    }
  });

//   Event listener for edit button
   taskList.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit-btn")) {
         const taskItem = e.target.closest("li");
         const taskText = taskItem.querySelector(".task-text");
         const editInput = taskItem.querySelector(".edit-input");
   
         taskText.style.display = "none";
         editInput.style.display = "block";
      }
   });
});
