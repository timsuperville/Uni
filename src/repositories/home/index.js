const Home = require("../../models/home");

const createHome = async (home) => {
  return await Home.create(home);
};

const getHome = async (homeId) => {
  return await Home.findById(homeId);
};

const updateHome = async (homeId, home) => {
  return await Home.findByIdAndUpdate(homeId, home, { new: true });
};

const deleteHome = async (homeId) => {
  return await Home.findByIdAndDelete(homeId);
};

module.exports = {
  createHome,
  getHome,
  updateHome,
  deleteHome,
};
