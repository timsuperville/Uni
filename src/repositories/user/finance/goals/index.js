const Goals = require("../../../../models/user/finance/goals/FinancialGoal.js");

const getGoals = async () => {
  return await Goals.find();
};

const createGoal = async (goal) => {
  return await Goals.create(goal);
};

const getGoal = async (goalId) => {
  return await Goals.findById(goalId);
};

const updateGoal = async (goalId, goal) => {
  return await Goals.findByIdAndUpdate(goalId, goal, { new: true });
};

const deleteGoal = async (goalId) => {
  return await Goals.findByIdAndDelete(goalId);
};

module.exports = {
  getGoals,
  createGoal,
  getGoal,
  updateGoal,
  deleteGoal,
};
