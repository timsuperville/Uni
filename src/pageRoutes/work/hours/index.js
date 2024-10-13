const hours = require('express').Router();

hours.get('/', (req, res) => {
    res.render('work/hours/index', { title: 'Hours' });
});


module.exports = hours;