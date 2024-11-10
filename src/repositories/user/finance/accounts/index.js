const Account = require('../../../../models/user/finance/accounts/FinanceAccount.js');

const getAccounts = async (userId) => {
  return await Account.find({ userId });
};

const getSharedAccounts = async (userId) => {
  return await Account.find({ sharedWith: userId });
};

const getAccount = async (id) => {
  return await Account.findById(id);
};

const createAccount = async (userId, accountData) => {
  return await Account.create({ ...accountData, userId });
};

const updateAccount = async (userId, accountId, accountData) => {
  return await Account.findOneAndUpdate({ _id: accountId, userId }, accountData, { new: true });
};

const deleteAccount = async (userId, accountId) => {
  await Account.findOneAndDelete({ _id: accountId });
};

module.exports = {
  getAccounts,
  getSharedAccounts,
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
};