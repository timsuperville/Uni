const userServices = require('../../../services/user');

const getProfile = async (req, res) => {
  const { user } = req;
  const profile = await userServices.getProfile(user);
  res.json(profile);
};

const editProfile = async (req, res) => {
  const { user } = req;
  const profile = await userServices.editProfile(user, req.body);
  res.json(profile);
};

const deleteProfile = async (req, res) => {
  const { user } = req;
  await userServices.deleteProfile(user);
  res.sendStatus(204);
};

module.exports = {
   getProfile,
   editProfile,
   deleteProfile,
};