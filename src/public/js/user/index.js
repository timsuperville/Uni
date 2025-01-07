let user = null;

const checkUser = async () => {
  const currentUser = localStorage.getItem("user");
  if (!currentUser) {
    return window.location.replace("/login");
  }
  return JSON.parse(currentUser);
}

const fetchUser = async () => {
  const response = await fetch("/api/user", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

user = await checkUser();

export {
  user,
  checkUser,
  fetchUser,
};