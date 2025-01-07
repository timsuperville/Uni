import { user } from "../user/index.js";
let home = null;

const checkHome = async () => {
  if (!user.home) {
    return null;
  }
  return user.home;
};

const fetchHome = async (id) => {
  const response = await fetch("/api/home/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};

checkHome().then((data) => {
   if (data) {
      fetchHome(data.id).then((data) => {
         home = data;
      });
   }
   });

export { home };
