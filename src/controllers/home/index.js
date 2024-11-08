// const homeService = require('../../services/home');

const createHome = async (req, res) => {
  try {
    const home = await homeService.createHome(req.body);
    res.status(201).json(home);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getHome = async (req, res) => {
  try {
   const user = req.user;
    const home = await homeService.getHome(user.homeId);
    res.status(200).json(home);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateHome = async (req, res) => {
  try {
    const home = await homeService.updateHome(req.params.homeId, req.body);
    res.status(200).json(home);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteHome = async (req, res) => {
  try {
    await homeService.deleteHome(req.params.homeId);
    res.status(204).json();
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