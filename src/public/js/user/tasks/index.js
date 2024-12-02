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
  const response = await fetch(`/api/user/tasks/1/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const createTask = async (data) => {
  const response = await fetch("/api/user/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData;
};

const updateTask = async (id, data) => {
  const response = await fetch(`/api/user/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  return responseData;
};

const deleteTask = async (id) => {
  const response = await fetch(`/api/user/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseData = await response.json();
  return responseData;
};

export { getTasks, createTask, getTask, updateTask, deleteTask };
