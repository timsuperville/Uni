const accounts = require('express').Router();
const path = require('path');
const html = require('../../../../filePath').html;

accounts.get('/', (req, res) => {
   res.sendFile(path.join(html, 'user/finance/accounts/index.html'));
});

accounts.get('/account/:id', (req, res) => {
   res.sendFile(path.join(html, 'user/finance/accounts/account/index.html'));
});

accounts.get('/account/edit/:id', (req, res) => {
   res.sendFile(path.join(html, 'user/finance/accounts/edit/index.html'));
});

accounts.get('/new', (req, res) => {
   res.sendFile(path.join(html, 'user/finance/accounts/new/index.html'));
});

module.exports = accounts;