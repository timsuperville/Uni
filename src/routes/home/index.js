const home = require('express').Router();

const chores = require('./chores');
const equipment = require('./equipment');
const food = require('./food');
const lists = require('./lists');
// const members = require('./members');
const security = require('./security');
const tasks = require('./tasks');
const tools = require('./tools');
const utilities = require('./utilities');
const settings = require('./settings');

home.use('/chores', chores);
home.use('/equipment', equipment);
home.use('/food', food);
home.use('/lists', lists);
// home.use('/members', members);
home.use('/security', security);
home.use('/tasks', tasks);
home.use('/tools', tools);
home.use('/utilities', utilities);
home.use('/settings', settings);

module.exports = home;