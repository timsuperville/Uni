const calendar = require('express').Router();

calendar.get('/', (req, res) => {
   res.render('user/calendar/index', {
      user: req.session.user,
   });
});

calendar.get('/event/:id', (req, res) => {
   res.render('user/calendar/event', {
      user: req.session.user,
   });
});

calendar.get('/event/edit/:id', (req, res) => {
   res.render('user/calendar/event/edit', {
      user: req.session.user,
   });
});

calendar.get('/new', (req, res) => {
   res.render('user/calendar/new', {
      user: req.session.user,
   });
});

module.exports = calendar;