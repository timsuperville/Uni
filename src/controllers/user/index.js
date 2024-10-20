// const userService = require('../../services/user/index.js');
// const userPresenter = require('../../presenters/user');

const getUser = async (req, res) => {
   if (!req.session.user) {
      return res.status(401).json({ message: 'Unauthorized', error: 'User not logged in' });
   }

   return req.session.user;
};

module.exports = {
   getUser
}