const accountsRouter = require('express').Router();

const accountsController = require('../../../../controllers/user/finance/accounts');

accountsRouter.get('/all', accountsController.getAccounts); // Get all accounts for the user
accountsRouter.get('/1/:accountId', accountsController.getAccount); // Get an account by id
accountsRouter.post('/new', accountsController.createAccount); // Create a new account
accountsRouter.put('/1/:accountId', accountsController.updateAccount); // Update an account by id
accountsRouter.delete('/1/:accountId', accountsController.deleteAccount); // Delete an account by id

const transactionsRouter = require('./transactions');
accountsRouter.use('/transactions', transactionsRouter);

module.exports = accountsRouter;