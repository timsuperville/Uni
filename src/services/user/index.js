const UserRepository = require("../../repositories/user/index.js");

const getUser = async (id) => {
   const user = await UserRepository.getUser(id);
   if (!user) {
      return { error: "User not found" };
   }
   return user;
};

const editUser = async (id) => {
   console.log("userServices.editUser - id:", id);
   // const user = await UserRepository.getUser(id);
   // if (!user) {
   //    return { error: "User not found" };
   // }
   // return user;
};

const updateUser = async (id, email, password) => {
   console.log("userServices.updateUser - id:", id);
//    const user = await UserRepository.updateUser(id, email, password);
//    if (!user) {
//       return { error: "User not found" };
//    }
//    return user;
};

const deleteUser = async (id) => {
   console.log("userServices.deleteUser - id:", id);
   // const user = await UserRepository.deleteUser(id);
   // if (!user) {
   //    return { error: "User not found" };
   // }
   // return user;
};

module.exports = {
   getUser,
   editUser,
   updateUser,
   deleteUser
};