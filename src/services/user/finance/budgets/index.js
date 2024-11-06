const budgetRepository = require("../../../../repositories/user/finance/budgets/index.js");

const getUserBudgets = async (userId) => {
  return await budgetRepository.getUserBudgets(userId);
};

const createBudget = async (budgetData) => {
  return await budgetRepository.createBudget(budgetData);
};

const getBudget = async (budgetId) => {
  return await budgetRepository.getBudget(budgetId);
};

const updateBudget = async (budgetId, budgetData) => {
  return await budgetRepository.updateBudget(budgetId, budgetData);
};

const deleteBudget = async (budgetId) => {
  return await budgetRepository.deleteBudget(budgetId);
};

module.exports = {
  getUserBudgets,
  createBudget,
  getBudget,
  updateBudget,
  deleteBudget,
};
