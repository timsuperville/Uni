const express = require('express');
const app = express();

const config = require('./config/config');
const db = require('./drivers/Mongoose');

app.use('/', require('./Interface/router'));

// const log = require('./log');

// app.use((req, res, next) => {
//    log.log(`${req.ip}, ${req.method}, ${req.url}, ${new Date()} \n`);
//    next();
// });

// app.use((err, req, res, next) => {
//    log.log(`Error: ${err.message}\n`);
//    next();
// });

module.exports = app;