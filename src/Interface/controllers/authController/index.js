const authServices = require('../../../services/authServices.js');

const authController = {
   register: async (req, res) => {
      const { email, password } = req.body;
      const user = await authServices.register(email, password);
      if (user.message) {
         return res.status(409).json({ message: 'User already exists' });
      }
      res.status(201).json(user);
   },
   login: async (req, res) => {
      const { email, password } = req.body;
      console.log('email', email, 'password', password);
      const user = await authServices.login(email, password);
      if (user.message) {
         return res.status(401).json({ message: 'Invalid email or password' });
      }
      res.status(200).json(user);
    },
   logout: async (req, res) => {
      req.session.destroy();
      res.status(200).json({ message: 'Logged out' });
   },
   forgotPassword: async (req, res) => {
      const { email } = req.body;
      await authServices.forgotPassword(email);
      res.status(200).json({ message: 'Password reset email sent' });
   },
};

module.exports = authController;