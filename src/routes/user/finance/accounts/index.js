const accountsRouter = require('express').Router();

const accountsController = require('../../../../controllers/user/finance/accounts');

accountsRouter.get('/all', accountsController.getAccounts); // Get all accounts for the user
accountsRouter.get('/:id', accountsController.getAccount); // Get an account by id
accountsRouter.post('/', accountsController.createAccount); // Create a new account
accountsRouter.put('/:id', accountsController.updateAccount); // Update an account by id
accountsRouter.delete('/:id', accountsController.deleteAccount); // Delete an account by id

const transactionsRouter = require('./transactions');
accountsRouter.use('/:accountId/transactions', transactionsRouter);

module.exports = accountsRouter;