const business = require('express').Router();

const businessController = require('../../controllers/business/index.js');

// business.post('/new', businessController.createBusiness);
// business.get('/', businessController.getBusiness);
// business.put('/:businessId', businessController.updateBusiness);
// business.delete('/:businessId', businessController.deleteBusiness);

const employees = require('./employees');
const equipment = require('./equipment');
const inventory = require('./inventory');
const orders = require('./orders');
const products = require('./products');
const sales = require('./sales');
const settings = require('./settings');
const tasks = require('./tasks');
const tools = require('./tools');
const utilities = require('./utilities');

business.use('/employees', employees);
business.use('/equipment', equipment);
business.use('/inventory', inventory);
business.use('/orders', orders);
business.use('/products', products);
business.use('/sales', sales);
business.use('/settings', settings);
business.use('/tasks', tasks);
business.use('/tools', tools);
business.use('/utilities', utilities);

module.exports = business;