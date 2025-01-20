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

const getAvatar = async (req, res) => {
   const path = req.session.user.avatar;
   try {
      const avatar = await userService.getAvatar(path);
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(avatar);
   }
   catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const updateAvatar = async (req, res) => {
   try {
      const userId = req.headers.userid;
      const file = req.files.avatar;
      
      const user = await userService.updateAvatar(userId, file);
      if (user.error) {
         return res.status(400).json(user);
      }
      req.session.user = user;
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const updateUser = async (req, res) => {
   try {
      const user = await userService.updateUser(req.body);
      if (user.error) {
         return res.status(400).json(user);
      }
      req.session.user = user;
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const deleteUser = async (req, res) => {
   try {
      const userId = req.headers.userid;
      const user = await userService.deleteUser(userId);
      if (user.error) {
         return res.status(400).json(user);
      }
      req.session.destroy();
      res.status(204).end();
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const updatePassword = async (req, res) => {
   try {
      const user = await userService.updatePassword(req.body);
      if (user.error) {
         return res.status(400).json(user);
      }
      req.session.user = user;
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

const updateUsername = async (req, res) => {
   try {
      const user = await userService.updateUsername(req.body);
      if (user.error) {
         return res.status(400).json(user);
      }
      req.session.user = user;
      res.status(200).json(user);
   } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', error: error.message });
   }
};

module.exports = {
   getUser,
   getAvatar,
   updateAvatar,
   updateUser,
   deleteUser,
   updatePassword,
   updateUsername
}