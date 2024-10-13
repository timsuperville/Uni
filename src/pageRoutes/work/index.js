const work = require('express').Router();

work.get('/', (req, res) => {
    res.render('work/index', { title: 'Work' });
});

const projects = require('./projects/index');
const hours = require('./hours/index');
const tasks = require('./tasks/index');

work.use('/projects', projects);
work.use('/hours', hours);
work.use('/tasks', tasks);

module.exports = work;