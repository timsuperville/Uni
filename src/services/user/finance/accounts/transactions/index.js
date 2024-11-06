const transactionRepository = require('../../../../../repositories/user/finance/accounts/transactions/index.js');

const getTransactions = async (accountId) => {
   return await transactionRepository.getTransactions(accountId);
}

const createTransaction = async (transaction) => {
   return await transactionRepository.createTransaction(transaction);
}

const manyTransactions = async (transactions) => {
   const formattedTransactions = transactions.map(transaction => {
      return {
         account: transaction.account,
         date: transaction.date,
         description: transaction.description,
         amount: transaction.amount,
         category: transaction.category,
         type: transaction.type,
      };
   });
   return await transactionRepository.manyTransactions(formattedTransactions);
}

const getTransactionsByDateRange = async (accountId, dateRange) => {
   const formattedDateRange = {
      startDate: new Date(dateRange.startDate),
      endDate: new Date(dateRange.endDate),
   };
   return await transactionRepository.getTransactionsByDateRange(accountId, formattedDateRange);
}

const updateTransaction = async (transactionId, transaction) => {
   return await transactionRepository.updateTransaction(transactionId, transaction);
}

const deleteTransaction = async (transactionId) => {
   return await transactionRepository.deleteTransaction(transactionId);
}

module.exports = {
   getTransactions,
   createTransaction,
   manyTransactions,
   getTransactionsByDateRange,
   updateTransaction,
   deleteTransaction,
};