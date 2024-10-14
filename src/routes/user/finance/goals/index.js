const goalsRouter = require('express').Router();

const goalsController = require('../../../../controllers/user/finance/goals/index.js');

goalsRouter.get('/', goalsController.getGoals); // Get all user goals
goalsRouter.post('/', goalsController.createGoal); // Create a new goal
goalsRouter.get('/:goalId', goalsController.getGoal); // Get a goal by id
goalsRouter.put('/:goalId', goalsController.updateGoal); // Update a goal by id
goalsRouter.delete('/:goalId', goalsController.deleteGoal); // Delete a goal by id

module.exports = goalsRouter;