const accountsRouter = require('express').Router();

const accountsController = require('../../../../controllers/user/finance/accounts');

accountsRouter.get('/', accountsController.getAccounts); // Get all accounts for the user
accountsRouter.post('/', accountsController.createAccount); // Create a new account
accountsRouter.get('/:accountId', accountsController.getAccount); // Get an account by id
accountsRouter.put('/:accountId', accountsController.updateAccount); // Update an account by id
accountsRouter.delete('/:accountId', accountsController.deleteAccount); // Delete an account by id

const transactionsRouter = require('./transactions');
accountsRouter.use('/:accountId/transactions', transactionsRouter);

module.exports = accountsRouter;