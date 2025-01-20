const express = require('express');
const router = express.Router();

const dataController = require('../../controllers/data/index.js');

router.get('/countries', dataController.getCountries);
router.get('/weather', dataController.getWeather);

module.exports = router;