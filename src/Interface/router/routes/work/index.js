const work = require('express').Router();
const path = require('path');

const html = require('../../filePath').html;

work.get('/', (req, res) => {
    res.sendFile(path.join(html, 'work/index.html'));
});

module.exports = work;