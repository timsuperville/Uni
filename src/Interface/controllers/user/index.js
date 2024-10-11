const userServices = require('../../../services/user');

const userController = {
   getUser: async (req, res) => {
      const user = await userServices.getUser(req.session.user.id);
      if (user.error) {
         return res.status(404).json(user);
      }
      res.status(200).json(user);
   },
   editUser: async (req, res) => {
      const user = await userServices.getUser(req.params.id);
      if (user.error) {
         return res.status(404).json(user);
      }
      res.status(200).json(user);
   },
   updateUser: async (req, res) => {
      const { id } = req.params;
      const { email, password } = req.body;
      const user = await userServices.updateUser(id, email, password);
      if (user.error) {
         return res.status(400).json(user);
      }
      res.status(200).json(user);
   },
   deleteUser: async (req, res) => {
      const { id } = req.params;
      const user = await userServices.deleteUser(id);
      if (user.error) {
         return res.status(400).json(user);
      }
      res.status(200).json(user);
   }
};

module.exports = userController;