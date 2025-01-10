const church = require('express').Router();

church.get('/', (req, res) => {
  res.render('church/index', {
    user: req.session.user,
  });
});

module.exports = church;