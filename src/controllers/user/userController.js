const userService = require('../../services/userService.js');

const getThisUsers = async (req, res) => {
   try {
      const thisUser = await userService.getUserById(req.user._id);
      res.status(200).send(thisUser);
   }
   catch (error) {
      res.status(500).send(error.message);
   }
};

const getUser = async (req, res) => {
   try {
      const user = await userService.getUserById(req.params.id);
      res.status(200).send(user);
   } catch (error) {
      res.status(500).send(error.message);
   }
};

module.exports = {
   getThisUsers,
   getUser
}