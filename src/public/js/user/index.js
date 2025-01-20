
const checkUser = async () => {
  const currentUser = localStorage.getItem("user");
  return JSON.parse(currentUser);
};

const fetchUser = async () => {
  const response = await fetch("/api/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${token}`,
    },
  });
  return response.json();
};

const updateUser = async (data) => {
  user = localStorage.setItem("user", JSON.stringify(data));
};

const updateAvatar = async (file) => {
  const formData = new FormData();
  formData.append("avatar", file);
  const response = await fetch("/api/user/avatar", {
    method: "POST",
    headers: {
      // "Authorization": `Bearer ${user.jwt}`,
      userid: user.id,
    },
    body: formData,
  });
  const data = await response.json();
  if (data.error) {
    return data;
  }
  localStorage.setItem("user", JSON.stringify(data));
  return data;
};

let user = await checkUser();

export {
  user,
  fetchUser,
  updateUser,
  updateAvatar,
  checkUser,
};