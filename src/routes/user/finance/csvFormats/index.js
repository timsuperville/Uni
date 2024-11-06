const csvFormatRouter = require('express').Router();

const csvFormatController = require('../../../../controllers/user/finance/csvFormats/index.js');

csvFormatRouter.get('/', csvFormatController.getAllFormats); // Get all formats
csvFormatRouter.post('/', csvFormatController.createFormat); // Create a new format
// formatRouter.delete('/:id', csvFormatController.deleteFormat); // Delete a format

module.exports = csvFormatRouter;
