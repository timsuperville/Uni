const hours = require('express').Router();
const path = require('path');

const html = require('../../../filePath').html;

hours.get('/', (req, res) => {
    res.sendFile(path.join(html, 'work/hours/index.html'));
});


module.exports = hours;