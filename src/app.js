const express = require('express');
const app = express();

const db = require('./drivers/Mongoose');
const sessionMiddleware = require('./drivers/Express-Session');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use(sessionMiddleware);
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