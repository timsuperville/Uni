const admin = require('express').Router();

admin.get('/', (req, res) => {
    res.render('admin/index', { title: 'Admin' });
});