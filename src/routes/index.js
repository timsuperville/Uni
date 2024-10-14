const routes = require('express').Router();

const auth = require('./auth');
const user = require('./user');
const home = require('./home');
// const business = require('./business');

routes.use('/auth', auth);
routes.use('/user', user);
routes.use('/home', home);
// routes.use('/business', business);

module.exports = routes;