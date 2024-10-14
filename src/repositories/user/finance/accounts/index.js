const Account = require('../../../../models/user/finance/accounts/FinanceAccount.js');

const getAccounts = async (userId) => {
  return await Account.find({ userId });
};

const createAccount = async (userId, accountData) => {
  return await Account.create({ ...accountData, userId });
};

const getAccount = async (userId, accountId) => {
  return await Account.findOne({ _id: accountId, userId });
}

const updateAccount = async (userId, accountId, accountData) => {
  return await Account.findOneAndUpdate({ _id: accountId, userId }, accountData, { new: true });
}

const deleteAccount = async (userId, accountId) => {
  await Account.findOneAndDelete({ _id: accountId, userId });
}

module.exports = {
  getAccounts,
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
};