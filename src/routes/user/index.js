const userRouter = require('express').Router();

const userController = require('../../controllers/user');

userRouter.get('/', userController.getUser);
userRouter.get('/avatar', userController.getAvatar);
userRouter.post('/avatar', userController.updateAvatar);
userRouter.put('/', userController.updateUser);
userRouter.put('/password', userController.updatePassword);
userRouter.put('/username', userController.updateUsername);
userRouter.delete('/', userController.deleteUser);

const authenticationRouter = require('./authentication');
const educationRouter = require('./education');
const financeRouter = require('./finance');
const healthRouter = require('./health');
const profileRouter = require('./profile');
const settingsRouter = require('./settings');
const socialRouter = require('./social');
const tasksRouter = require('./tasks');

userRouter.use('/', authenticationRouter);
userRouter.use('/education', educationRouter);
userRouter.use('/finance', financeRouter);
userRouter.use('/health', healthRouter);
userRouter.use('/profile', profileRouter);
userRouter.use('/settings', settingsRouter);
userRouter.use('/social', socialRouter);
userRouter.use('/tasks', tasksRouter);

module.exports = userRouter;