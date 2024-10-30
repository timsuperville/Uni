const userServices = require("../../../services/user/profile/index.js");

const createProfile = async (req, res) => {
  const user = req.session.user;
  const profile = await userServices.createProfile(user, req.body);
  res.json(profile);
};

const getProfile = async (req, res) => {
  const user = req.session.user;
  console.log(user);
  const profile = await userServices.getProfile(user);
  res.json(profile);
};

const editProfile = async (req, res) => {
  const user = req.session.user;
  const profile = await userServices.editProfile(user, req.body);
  res.json(profile);
};

const deleteProfile = async (req, res) => {
  const user = req.session.user;
  await userServices.deleteProfile(user);
  res.sendStatus(204);
};

module.exports = {
  createProfile,
  getProfile,
  editProfile,
  deleteProfile,
};
