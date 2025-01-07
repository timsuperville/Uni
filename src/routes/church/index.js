const church = require('express').Router();

// const churchController = require('../../controllers/church/index.js');

// church.post('/create', churchController.create);
// church.get('/list', churchController.list);
// church.get('/get/:id', churchController.get);
// church.put('/update/:id', churchController.update);
// church.delete('/delete/:id', churchController.delete);

const people = require('./people');
const events = require('./events');
const groups = require('./groups');
const tasks = require('./tasks');
const settings = require('./settings');

church.use('/people', people);
church.use('/events', events);
church.use('/groups', groups);
church.use('/tasks', tasks);
church.use('/settings', settings);

module.exports = church;