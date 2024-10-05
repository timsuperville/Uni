const calendar = require('express').Router();
const path = require('path');
const html = require('../../../filePath').html;

calendar.get('/', (req, res) => {
   res.sendFile(path.join(html, 'user/calendar/index.html'));
});

calendar.get('/event/:id', (req, res) => {
   res.sendFile(path.join(html, 'user/calendar/event/index.html'));
});

calendar.get('/event/edit/:id', (req, res) => {
   res.sendFile(path.join(html, 'user/calendar/edit/index.html'));
});

calendar.get('/new', (req, res) => {
   res.sendFile(path.join(html, 'user/calendar/new/index.html'));
});

module.exports = calendar;