const tasks = require('express').Router();

tasks.get('/', (req, res) => {
    res.render('work/tasks/index', { title: 'Tasks' });
});

module.exports = tasks;