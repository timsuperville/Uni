const express = require('express');
const widgetController = require('../../controllers/widgets/index.js');

const router = express.Router();

// Import your widget controller here

// Define routes for widgets
router.get('/', widgetController.getAllWidgetTypes);
router.get('/:id', widgetController.getWidgetTypeById);
router.post('/', widgetController.createWidgetType);
router.put('/:id', widgetController.updateWidgetType);
router.delete('/:id', widgetController.deleteWidgetType);

module.exports = router;