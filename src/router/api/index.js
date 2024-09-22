const express = require('express');
const api = express.Router();

const auth = require('./auth');
// const user = require('./user');

api.use('/', auth);

module.exports = api;