const routes = require('express').Router();


const authenticateToken = require('../services/user/authentication/jwt/index').authenticateToken;

routes.get('/', (req, res) => {
  res.send('Welcome to the API');
});
routes.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const user = require('./user');
const home = require('./home');
const org = require('./org');
const songs = require('./songs');
const files = require('./files');
// const work = require('./work');
// const business = require('./business');

routes.use('/user', user);
// routes.use('/home', home);
routes.use('/org', org);
routes.use('/songs', songs);
routes.use('/files', files);
// routes.use('/work', work);
// routes.use('/business', business);

module.exports = routes;