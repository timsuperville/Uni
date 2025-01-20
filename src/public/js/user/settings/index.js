const user = import("../index.js");
const Settings = async () => {
  const response = await fetch(`/api/user/settings/${user.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};

export default Settings;
