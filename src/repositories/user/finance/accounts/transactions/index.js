const Transaction = require('../../../../../models/user/finance/accounts/Transaction');

const getTransactions = async (accountId) => {
   return await Transaction.find({ account: accountId });
}

const createTransaction = async (transaction) => {
   return await Transaction.create(transaction);
}

const uploadTransactions = async (transactions) => {
   return await Transaction.insertMany(transactions);
}

const getTransactionsByDateRange = async (accountId, dateRange) => {
   return await Transaction.find({ account: accountId, date: { $gte: dateRange.startDate, $lte: dateRange.endDate } });
}

const updateTransaction = async (transactionId, transaction) => {
   return await Transaction.findByIdAndUpdate(transactionId, transaction, { new: true });
}

const deleteTransaction = async (transactionId) => {
   return await Transaction.findByIdAndDelete(transactionId);
}

module.exports = {
   getTransactions,
   createTransaction,
   uploadTransactions,
   getTransactionsByDateRange,
   updateTransaction,
   deleteTransaction,
};