const work = require('express').Router();
const path = require('path');

const html = require('../../filePath').html;

work.get('/', (req, res) => {
    res.sendFile(path.join(html, 'work/index.html'));
});

// // projects router
// const projects = require('./projects/index');
// work.use('/projects', projects);

// hours router
const hours = require('./hours/index');
work.use('/hours', hours);

// // tasks router
// const tasks = require('./tasks/index');
// work.use('/tasks', tasks);

module.exports = work;