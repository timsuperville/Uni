const homeService = require('../../services/home');

const createHome = async (req, res) => {
  try {
    const data = req.body;
    const userId = req.user.id;
    const home = await homeService.createHome(data, userId);
    res.status(201).json(home);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getHome = async (req, res) => {
  try {
   const homeId = req.params.homeId;
    const home = await homeService.getHome(homeId);
    res.status(200).json(home);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateHome = async (req, res) => {
  try {
    const data = req.body;
    const homeId = req.params.homeId;
    const home = await homeService.updateHome(homeId, data);
    res.status(200).json(home);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteHome = async (req, res) => {
  try {
    const homeId = req.params.homeId;
    const deletedHome = await homeService.deleteHome(homeId);
    res.status(200).json(deletedHome);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
   createHome,
   getHome,
   updateHome,
   deleteHome,
   };