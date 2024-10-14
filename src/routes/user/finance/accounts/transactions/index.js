const transactionsRouter = require('express').Router();

const transactionsController = require('../../../../../controllers/user/finance/accounts/transactions');

transactionsRouter.get('/:accountId', transactionsController.getTransactions); // Get all transactions for the account
transactionsRouter.post('/accountId', transactionsController.createTransaction); // Create a new transaction
transactionsRouter.post('/accountId/upload', transactionsController.uploadTransactions); // Upload transactions from a csv file
transactionsRouter.get('/accountId/date-range', transactionsController.getTransactionsByDateRange); // Get all transactions for the account within a date range
transactionsRouter.put('/:transactionId', transactionsController.updateTransaction); // Update a transaction by id
transactionsRouter.delete('/:transactionId', transactionsController.deleteTransaction); // Delete a transaction by id

module.exports = transactionsRouter;