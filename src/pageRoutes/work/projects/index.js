const projects = require('express').Router();

projects.get('/', (req, res) => {
    res.render('work/projects/index', { title: 'Projects' });
});

module.exports = projects;