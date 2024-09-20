const routes = require('express').Router();
const path = require('path');

routes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/html', 'index.html'));
});

module.exports = routes;