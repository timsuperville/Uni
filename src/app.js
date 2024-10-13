const express = require('express');
const app = express();

const db = require('./drivers/Mongoose');
const sessionMiddleware = require('./drivers/Express-Session');

// set ejs as view engine
app.set('view engine', 'ejs');

// set views directory
app.set('views', __dirname + '/views');

// set up middleware
app.use(express.json());

// set up middleware
app.use(express.urlencoded({ extended: true }));

// set up static files
app.use(express.static(__dirname + '/public'));

// set up session middleware
app.use(sessionMiddleware);

// set up database connection
const api = require('./routes');
app.use('/api', api);
const pages = require('./pageRoutes');
app.use('/', pages);

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