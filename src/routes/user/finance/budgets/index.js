const budgetsRouter = require("express").Router();

const budgetController = require("../../../../controllers/user/finance/budgets/index.js");

budgetsRouter.get("/", budgetController.getUserBudgets); // Get all budgets for a user
budgetsRouter.post("/", budgetController.createBudget); // Create a new budget
budgetsRouter.get("/:budgetId", budgetController.getBudget); // Get a budget by id
budgetsRouter.put("/:budgetId", budgetController.updateBudget); // Update a budget by id
budgetsRouter.delete("/:budgetId", budgetController.deleteBudget); // Delete a budget by id

module.exports = budgetsRouter;
