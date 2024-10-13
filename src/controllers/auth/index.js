const authServices = require('../../services/auth');

const authController = {
   register: async (req, res) => {
      const { email, password } = req.body;
      const user = await authServices.register(email, password);
      if (user.error) {
         return res.status(409).json(user);
      }
      req.session.user = user;
      res.status(201).json(user);
   },
   login: async (req, res) => {
      const { email, password } = req.body;
      const user = await authServices.login(email, password);
      if (user.error) {
         return res.status(401).json(user);
      }
      req.session.user = user;
      res.status(200).json(user);
    },
   logout: async (req, res) => {
      req.session.destroy();
      res.redirect('/logout');
   },
   forgotPassword: async (req, res) => {
      const { email } = req.body;
      const result = await authServices.forgotPassword(email);
      if (result.error) {
         return res.status(404).json(result);
      }
      res.status(200).json(result);
   },
   resetPassword: async (req, res) => {
      const { email, token, password } = req.body;
      const result = await authServices.resetPassword(email, token, password);
      if (result.error) {
         return res.status(400).json(result);
      }
      res.status(200).json(result);
   }
};

module.exports = authController;