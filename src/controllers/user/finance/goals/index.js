const goalsService = require("../../../../services/user/finance/goals/index.js");

const getGoals = async (req, res) => {
  try {
    const goals = await goalsService.getGoals();
    res.status(200).send(goals);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createGoal = async (req, res) => {
  try {
    const goal = await goalsService.createGoal(req.body);
    res.status(201).send(goal);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getGoal = async (req, res) => {
  try {
    const goal = await goalsService.getGoal(req.params.goalId);
    res.status(200).send(goal);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateGoal = async (req, res) => {
  try {
    const goal = await goalsService.updateGoal(req.params.goalId, req.body);
    res.status(200).send(goal);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteGoal = async (req, res) => {
  try {
    await goalsService.deleteGoal(req.params.goalId);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getGoals,
  createGoal,
  getGoal,
  updateGoal,
  deleteGoal,
};
