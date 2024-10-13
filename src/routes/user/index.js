const userRouter = require('express').Router();

// const userController = require('../../controllers/user/userController');

// userRouter.get('/', userController.getThisUsers);
// userRouter.get('/:id', userController.getUser);
// userRouter.get('/profile', userController.getProfile);
// userRouter.get('/settings', userController.getSettings);
// userRouter.get('/logout', userController.logout);

const educationRouter = require('./education');
const financeRouter = require('./finance');
const healthRouter = require('./health');
const profileRouter = require('./profile');
const socialRouter = require('./social');
const tasksRouter = require('./tasks');

userRouter.use('/education', educationRouter);
userRouter.use('/finance', financeRouter);
userRouter.use('/health', healthRouter);
userRouter.use('/profile', profileRouter);
userRouter.use('/social', socialRouter);
userRouter.use('/tasks', tasksRouter);

module.exports = userRouter;