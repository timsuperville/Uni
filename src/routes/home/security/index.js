const securityRouter = require('express').Router();

const devicesRouter = require('./devices');
const camerasRouter = require('./cameras');
const alarmsRouter = require('./alarms');
const locksRouter = require('./locks');

securityRouter.use('/devices', devicesRouter);
securityRouter.use('/cameras', camerasRouter);
securityRouter.use('/alarms', alarmsRouter);
securityRouter.use('/locks', locksRouter);

module.exports = securityRouter;