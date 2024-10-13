const healthRouter = require('express').Router();

const appointmentsRouter = require('./appointments');
const dietsRouter = require('./diets');
const exercisesRouter = require('./exercises');
const menstruationRouter = require('./menstruation');
const prescriptionsRouter = require('./prescriptions');
const recordsRouter = require('./records');

healthRouter.use('/appointments', appointmentsRouter);
healthRouter.use('/diets', dietsRouter);
healthRouter.use('/exercises', exercisesRouter);
healthRouter.use('/menstruations', menstruationRouter);
healthRouter.use('/prescriptions', prescriptionsRouter);
healthRouter.use('/records', recordsRouter);

module.exports = healthRouter;