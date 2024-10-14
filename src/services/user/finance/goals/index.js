const goalsRepository = require("../../../../repositories/user/finance/goals/index.js");

const getGoals = async () => {
  return await goalsRepository.getGoals();
};

const createGoal = async (goal) => {
  return await goalsRepository.createGoal(goal);
};

const getGoal = async (goalId) => {
  return await goalsRepository.getGoal(goalId);
};

const updateGoal = async (goalId, goal) => {
  return await goalsRepository.updateGoal(goalId, goal);
};

const deleteGoal = async (goalId) => {
  return await goalsRepository.deleteGoal(goalId);
};

module.exports = {
  getGoals,
  createGoal,
  getGoal,
  updateGoal,
  deleteGoal,
};
