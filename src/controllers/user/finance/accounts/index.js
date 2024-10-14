const accountsService = require("../../../../services/user/finance/accounts/index.js");

const getAccounts = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const accounts = await accountsService.getAccounts(userId);
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAccount = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const account = await accountsService.createAccount(userId, req.body);
    res.status(201).json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAccount = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const accountId = req.params.accountId;
    const account = await accountsService.getAccount(userId, accountId);
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAccount = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const accountId = req.params.accountId;
    const account = await accountsService.updateAccount(
      userId,
      accountId,
      req.body
    );
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAccount = async (req, res) => {
  try {
    const userId = req.session.user.id;
    const accountId = req.params.accountId;
    await accountsService.deleteAccount(userId, accountId);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAccounts,
  createAccount,
  getAccount,
   updateAccount,
   deleteAccount,
};
