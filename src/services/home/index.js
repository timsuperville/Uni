const homeRepository = require("../../repositories/home");

const createHome = async (home, userId) => {
  home.owner = userId;
  return await homeRepository.createHome(home);
};
const getHome = async (homeId) => {
  return await homeRepository.getHome(homeId);
};
const updateHome = async (homeId, home) => {
  return await homeRepository.updateHome(homeId, home);
};
const deleteHome = async (homeId) => {
  return await homeRepository.deleteHome(homeId);
};

module.exports = {
  createHome,
  getHome,
  updateHome,
  deleteHome,
};
