const formatRouter = require('express').Router();

const formatController = require('../../../../../../controllers/user/finance/accounts/transactions/format/index.js');

formatRouter.get('/', formatController.getAllFormats); // Get all formats
formatRouter.post('/', formatController.createFormat); // Create a new format
// formatRouter.delete('/:id', formatController.deleteFormat); // Delete a format

module.exports = formatRouter;
