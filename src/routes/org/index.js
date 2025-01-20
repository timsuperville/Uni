const org = require('express').Router();

const orgController = require('../../controllers/organization/index.js');

org.get('/all', orgController.getAllOrgs);
org.get('/search', orgController.searchOrgs);
org.get('/:id', orgController.getOrgById);
org.post('/new', orgController.createOrg);
org.put('/:id', orgController.updateOrg);
org.delete('/:id', orgController.deleteOrg);

const people = require('./people');
const events = require('./events');
const groups = require('./groups');
const tasks = require('./tasks');
const settings = require('./settings');

org.use('/people', people);
org.use('/events', events);
org.use('/groups', groups);
org.use('/tasks', tasks);
org.use('/settings', settings);

module.exports = org;