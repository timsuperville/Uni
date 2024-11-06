const Budget = require("../../../../models/user/finance/budgets/Budget");

const getUserBudgets = async (userId) => {
  return await Budget.find({ user: userId });
}

const createBudget = async (budgetData) => {
  return await Budget.create(budgetData);
};

const getBudget = async (budgetId) => {
  return await Budget.findById(budgetId);
};

const updateBudget = async (budgetId, budgetData) => {
  return await Budget.findByIdAndUpdate(budgetId, budgetData, { new: true });
};

const deleteBudget = async (budgetId) => {
  return await Budget.findByIdAndDelete(budgetId);
};

module.exports = {
  getUserBudgets,
  createBudget,
  getBudget,
  updateBudget,
  deleteBudget,
};
