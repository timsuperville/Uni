const financeRouter = require('express').Router();

const accountsRouter = require('./accounts');
const budgetsRouter = require('./budgets');
const goalsRouter = require('./goals');
const csvFormatRouter = require('./csvformats');

financeRouter.use('/accounts', accountsRouter);
financeRouter.use('/budgets', budgetsRouter);
financeRouter.use('/goals', goalsRouter);
financeRouter.use('/csvformats', csvFormatRouter);

module.exports = financeRouter;