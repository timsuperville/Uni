const userServices = require("../../../services/user/profile/index.js");

const createProfile = async (req, res) => {
  try {
    const userId = req.headers['userid'];
    const profile = await userServices.createProfile(userId, req.body);
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.headers['userid'];
    const profile = await userServices.getProfile(userId);
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editProfile = async (req, res) => {
  try {
    const userId = req.headers['userid'];
    const profile = await userServices.editProfile(userId, req.body);
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProfile = async (req, res) => {
  try {
    const userId = req.headers['userid'];
    await userServices.deleteProfile(userId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProfile,
  getProfile,
  editProfile,
  deleteProfile,
};
