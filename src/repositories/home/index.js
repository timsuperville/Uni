const Home = require("../../models/home");

const getUserHome = async (userId) => {
  return await Home.find({ members: userId });
};

const getHome = async (homeId) => {
  return await Home.findById(homeId);
};

const createHome = async (home) => {
  return await Home.create(home);
};

const updateHome = async (homeId, home) => {
  return await Home.findByIdAndUpdate(homeId, home, { new: true });
};

const deleteHome = async (homeId) => {
  return await Home.findByIdAndDelete(homeId);
};

module.exports = {
  getHomes,
  getHome,
  createHome,
  updateHome,
  deleteHome,
};
