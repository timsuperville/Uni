const Budget = require("../../../../models/user/finance/budgets/Budget");

const getAllBudgets = async () => {
  return await Budget.find();
};

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
  getAllBudgets,
  createBudget,
  getBudget,
  updateBudget,
  deleteBudget,
};
