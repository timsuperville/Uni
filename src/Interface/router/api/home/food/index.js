const foodRouter = require('express').Router();

const mealPlanRouter = require('./meal-plan');
const pantryRouter = require('./pantry');
const groceryListRouter = require('./grocery-list');

foodRouter.use('/meal-plan', mealPlanRouter);
foodRouter.use('/pantry', pantryRouter);
foodRouter.use('/grocery-list', groceryListRouter);

module.exports = foodRouter;