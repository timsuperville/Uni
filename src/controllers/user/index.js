const userService = require('../../services/user');
const userPresenter = require('../../presenters/user');

const getUser = async (req, res) => {
   try {
      const user = await userService.getUserById(req.params.id);
      if (!user) {
         return res.status(404).send('User not found');
      }
      const userP = userPresenter.presentUser(user);
      res.status(200).send(userP);
   } catch (error) {
      res.status(500).send(error.message);
   }
};

module.exports = {
   getUser
}