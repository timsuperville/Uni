const goals = require('express').Router();
const path = require('path');
const html = require('../../../../filePath').html;

goals.get('/', (req, res) => {
   res.sendFile(path.join(html, 'user/finance/goals/index.html'));
});

goals.get('/goal/:id', (req, res) => {
   res.sendFile(path.join(html, 'user/finance/goals/goal/index.html'));
});

goals.get('/goal/edit/:id', (req, res) => {
   res.sendFile(path.join(html, 'user/finance/goals/edit/index.html'));
});

goals.get('/new', (req, res) => {
   res.sendFile(path.join(html, 'user/finance/goals/new/index.html'));
});

module.exports = goals;