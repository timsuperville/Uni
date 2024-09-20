const router = require('express').Router();
const path = require('path');

const routes = require('./routes');
const api = require('./api');

router.use('/', routes);
router.use('/api', api);

module.exports = router;