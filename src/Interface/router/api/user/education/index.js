const educationRouter = require('express').Router();

const goalsRouter = require('./goals');
const historyRouter = require('./history');
const reportsRouter = require('./reports');
const resourcesRouter = require('./resources');

educationRouter.use('/goals', goalsRouter);
educationRouter.use('/history', historyRouter);
educationRouter.use('/reports', reportsRouter);
educationRouter.use('/resources', resourcesRouter);

module.exports = educationRouter;