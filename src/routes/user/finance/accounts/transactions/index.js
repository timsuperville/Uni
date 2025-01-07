const transactionsRouter = require('express').Router();

const transactionsController = require('../../../../../controllers/user/finance/accounts/transactions');

transactionsRouter.get('/all/:accountId', transactionsController.getTransactions); // Get all account transactions
transactionsRouter.get('/:d-r/:accountId', transactionsController.getTransactionsByDateRange); // Get all account transactions by date range
transactionsRouter.post('/new/:accountId', transactionsController.createTransaction); // Create a new transaction
transactionsRouter.post('/many/:accountId', transactionsController.manyTransactions); // Upload transactions
transactionsRouter.put('/1/:transactionId', transactionsController.updateTransaction); // Update a transaction
transactionsRouter.delete('/1/:transactionId', transactionsController.deleteTransaction); // Delete a transaction

module.exports = transactionsRouter;