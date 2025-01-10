const org = require('express').Router();

org.get('/', (req, res) => {
    res.render('org/index', { title: 'Org' });
});

module.exports = org;