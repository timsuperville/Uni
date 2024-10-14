const formatRouter = require('express').Router();

const formatController = require('../../../../../../controllers/user/finance/accounts/transactions/format/index.js');

formatRouter.get('/', formatController.getAllFormats); // Get all csv formats
formatRouter.post('/', formatController.createFormat); // Create a new csv format

module.exports = formatRouter;
