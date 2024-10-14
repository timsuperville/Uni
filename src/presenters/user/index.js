const presentUser = (user) => {
  return {
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
};

const presentUsers = (users) => {
  return users.map(presentUser);
};

module.exports = {
   presentUser,
   presentUsers
   };