const work = require('express').Router();
// const workController = require('../../controllers/work');

const hours = require('./hours');
// const projects = require('./projects');
// const tasks = require('./tasks');
// const pay = require('./pay');

work.use('/hours', hours);
// work.use('/projects', projects);
// work.use('/tasks', tasks);
// work.use('/pay', pay);

module.exports = work;