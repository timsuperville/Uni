const church = require('express').Router();

church.get('/', (req, res) => {
  res.render('church/index', {
    user: req.session.user,
  });
});

church.get('/services', (req, res) => {
  res.render('church/services', {
    user: req.session.user,
  });
});

church.get('/services/:service', (req, res) => {
  res.render('church/services/service', {
    user: req.session.user,
    service: req.params.service,
  });
});

module.exports = church;