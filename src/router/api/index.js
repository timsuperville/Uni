const api = require('express').Router();

api.get('/', (req, res) => {
  res.send('API Home Page');
});

module.exports = api;