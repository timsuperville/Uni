const home = require('express').Router();

const homeController = require('../../../controllers/home/index.js');

home.get('/', homeController.getHome); // gets the user's home

module.exports = home;