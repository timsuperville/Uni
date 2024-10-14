const transactionsService = require('../../../../../services/user/finance/accounts/transactions');

const getTransactions = async (req, res) => {
   try {
      const transactions = await transactionsService.getTransactions(req.params.accountId);
      res.status(200).send(transactions);
   } catch (error) {
      res.status(400).send(error);
   }
}

const createTransaction = async (req, res) => {
   try {
      const transaction = await transactionsService.createTransaction(req.body);
      res.status(201).send(transaction);
   } catch (error) {
      res.status(400).send(error);
   }
}

const uploadTransactions = async (req, res) => {
   try {
      const transactions = await transactionsService.uploadTransactions(req.body);
      res.status(201).send(transactions);
   } catch (error) {
      res.status(400).send(error);
   }
}

const getTransactionsByDateRange = async (req, res) => {
   try {
      const transactions = await transactionsService.getTransactionsByDateRange(req.params.accountId, req.body);
      res.status(200).send(transactions);
   } catch (error) {
      res.status(400).send(error);
   }
}

const updateTransaction = async (req, res) => {
   try {
      const transaction = await transactionsService.updateTransaction(req.params.transactionId, req.body);
      res.status(200).send(transaction);
   } catch (error) {
      res.status(400).send(error);
   }
}

const deleteTransaction = async (req, res) => {
   try {
      await transactionsService.deleteTransaction(req.params.transactionId);
      res.status(204).send();
   } catch (error) {
      res.status(400).send(error);
   }
}

module.exports = {
   getTransactions,
   createTransaction,
   uploadTransactions,
   getTransactionsByDateRange,
   updateTransaction,
   deleteTransaction,
}