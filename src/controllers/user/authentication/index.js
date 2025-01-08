const authServices = require('../../../services/user/authentication');

const authController = {
   register: async (req, res) => {
      try {
         const { username, email, password } = req.body;
         const user = await authServices.register(username, email, password);
         if (user.error) {
            return res.status(409).json({user});
         }
         req.session.user = user;
         res.status(201).json(user);
      } catch (error) {
         res.status(500).json({ error: 'Internal Server Error' });
      }
   },

   login: async (req, res) => {
      try {
         const { username, password } = req.body;
         const user = await authServices.login(username, password);
         if (user.error) { 
            return res.status(401).json(user);
         }
         req.session.user = user;
         res.status(200).json(user);
      } catch (error) {
         res.status(500).json({ error: 'Internal Server Error' });
      }
   },

   logout: async (req, res) => {
      try {
         req.session.destroy();
         res.status(200).json({message: "Logged out successfully"});
      } catch (error) {
         res.status(500).json({ error: 'Internal Server Error' });
      }
   },

   forgotPassword: async (req, res) => {
      try {
         const { email } = req.body;
         const result = await authServices.forgotPassword(email);
         if (result.error) {
            return res.status(404).json(result);
         }
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json({ error: 'Internal Server Error' });
      }
   },

   resetPassword: async (req, res) => {
      try {
         const { email, token, password } = req.body;
         const result = await authServices.resetPassword(email, token, password);
         if (result.error) {
            return res.status(400).json(result);
         }
         res.status(200).json(result);
      } catch (error) {
         res.status(500).json({ error: 'Internal Server Error' });
      }
   }
};

module.exports = authController;