const transactionsRouter = require('express').Router();

const transactionsController = require('../../../../../controllers/user/finance/accounts/transactions');

transactionsRouter.get('/:accountId', transactionsController.getTransactions); // Get all account transactions
transactionsRouter.post('/accountId', transactionsController.createTransaction); // Create a new transaction
transactionsRouter.post('/accountId/upload', transactionsController.uploadTransactions); // Upload transactions
transactionsRouter.put('/:transactionId', transactionsController.updateTransaction); // Update a transaction
transactionsRouter.delete('/:transactionId', transactionsController.deleteTransaction); // Delete a transaction

const formatsRouter = require('./formats');
transactionsRouter.use('/formats', formatsRouter);

module.exports = transactionsRouter;