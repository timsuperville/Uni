const financeRouter = require('express').Router();

const accountsRouter = require('./accounts');
const budgetsRouter = require('./budgets');
const goalsRouter = require('./goals');

financeRouter.use('/accounts', accountsRouter);
financeRouter.use('/budgets', budgetsRouter);
financeRouter.use('/goals', goalsRouter);

module.exports = financeRouter;