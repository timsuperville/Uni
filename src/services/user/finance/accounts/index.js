const accountsRepository = require("../../../../repositories/user/finance/accounts");

const getAccounts = async (userId) => {
  const myAccounts = await accountsRepository.getAccounts(userId);
  const sharedWithMe = await accountsRepository.getSharedAccounts(userId);
  return {myAccounts, sharedWithMe};
};

const getAccount = async (userId, accountId) => {
  const account = await accountsRepository.getAccount(accountId);
  return account;
};

const createAccount = async (userId, accountData) => {
  return await accountsRepository.createAccount(userId, accountData);
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
