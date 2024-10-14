const budgetService = require("../../../../services/user/finance/budgets/index.js");

const getAllBudgets = async (req, res) => {
  try {
    const budgets = await budgetService.getAllBudgets();

    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBudget = async (req, res) => {
  try {
    const budget = await budgetService.createBudget(req.body);

    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBudget = async (req, res) => {
  try {
    const budget = await budgetService.getBudget(req.params.budgetId);

    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBudget = async (req, res) => {
  try {
    const budget = await budgetService.updateBudget(
      req.params.budgetId,
      req.body
    );

    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBudget = async (req, res) => {
  try {
    await budgetService.deleteBudget(req.params.budgetId);

    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBudgets,
  createBudget,
  getBudget,
  updateBudget,
  deleteBudget,
};
