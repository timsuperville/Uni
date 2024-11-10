const routes = require('express').Router();

const requireLogin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
};
const authenticateToken = require('../services/auth/jwt/index').authenticateToken;

routes.get('/', (req, res) => {
  res.send('Welcome to the API');
});

const auth = require('./auth');
const user = require('./user');
const home = require('./home');
// const work = require('./work');
// const business = require('./business');

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/home', home);
// routes.use('/work', work);
// routes.use('/business', business);

module.exports = routes;