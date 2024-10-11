const UserRepository = require("../../repositories/user/index.js");

const getUser = async (id) => {
   const user = await UserRepository.getUser(id);
   if (!user) {
      return { error: "User not found" };
   }
   return user;
};

const editUser = async (id) => {
   return { message: "'UserServices not setup' - User edited!" };
   // const user = await UserRepository.getUser(id);
   // if (!user) {
   //    return { error: "User not found" };
   // }
   // return user;
};

const updateUser = async (id, email, password) => {
   return { message: "'UserServices not setup' - User updated!" };
};
//    const user = await UserRepository.updateUser(id, email, password);
//    if (!user) {
//       return { error: "User not found" };
//    }
//    return user;
// };

const deleteUser = async (id) => {
   return { message: "'UserServices not setup' - User deleted!" };
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