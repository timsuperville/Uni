const userService = require('../../services/user');

const getUser = async (req, res) => {
   try {
      if (!req.session.user) {
         return res.status(401).json({ message: 'Unauthorized', error: 'User not logged in' });
      }
      return req.session.user._id;
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const register = async (req, res) => {
   try {
      const { username, email, password } = req.body;
      const user = await userService.register(username, email, password);
      if (user.error) {
         return res.status(409).json({ user });
      }
      req.session.user = user;
      res.status(201).json(user);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const login = async (req, res) => {
   try {
      const { username, password } = req.body;
      const user = await userService.login(username, password);
      if (user.error) {
         return res.status(401).json(user);
      }
      req.session.user = user;
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const logout = async (req, res) => {
   try {
      req.session.destroy();
      res.status(200).json({ message: "Logged out successfully" });
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const forgotPassword = async (req, res) => {
   try {
      const { email } = req.body;
      const result = await userService.forgotPassword(email);
      if (result.error) {
         return res.status(404).json(result);
      }
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const resetPassword = async (req, res) => {
   try {
      const { email, token, password } = req.body;
      const result = await userService.resetPassword(email, token, password);
      if (result.error) {
         return res.status(400).json(result);
      }
      res.status(200).json(result);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

module.exports = {
   getUser,
   register,
   login,
   logout,
   forgotPassword,
   resetPassword
}