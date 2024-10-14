const accountsRepository = require("../../../../repositories/user/finance/accounts");

const getAccounts = async (userId) => {
  return await accountsRepository.getAccounts(userId);
};

const createAccount = async (userId, accountData) => {
  return await accountsRepository.createAccount(userId, accountData);
};

const getAccount = async (userId, accountId) => {
  return await accountsRepository.getAccount(userId, accountId);
};

const updateAccount = async (userId, accountId, accountData) => {
  return await accountsRepository.updateAccount(userId, accountId, accountData);
};

const deleteAccount = async (userId, accountId) => {
  return await accountsRepository.deleteAccount(userId, accountId);
};

module.exports = {
  getAccounts,
  createAccount,
  getAccount,
  updateAccount,
  deleteAccount,
};
