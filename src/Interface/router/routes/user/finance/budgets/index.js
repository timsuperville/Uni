const budgets = require('express').Router();
const path = require('path');
const html = require('../../../../filePath').html;

budgets.get('/', (req, res) => {
   res.sendFile(path.join(html, 'user/finance/budgets/index.html'));
});

budgets.get('/:id', (req, res) => {
   res.sendFile(path.join(html, 'user/finance/budgets/budget/index.html'));
});

budgets.get('/edit/:id', (req, res) => {
   res.sendFile(path.join(html, 'user/finance/budgets/edit/index.html'));
});

module.exports = budgets;