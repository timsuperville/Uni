const express = require('express');
const fileUpload = require('express-fileupload');
const logger = require('./logger');
const cors = require('cors');
const path = require('path');
const app = express();

const corsOptions = {
   origin: 'http://localhost:3000',
   credentials: true,
   optionsSuccessStatus: 200
};

app.use(cors(corsOptions));


const db = require('./drivers/Mongoose');
const sessionMiddleware = require('./drivers/Express-Session');

// set ejs as view engine
app.set('view engine', 'ejs');

// set views directory
app.set('views', __dirname + '/views');

// set up middleware
app.use(express.json());

// set up file upload middleware
app.use(fileUpload());

// set up middleware
app.use(express.urlencoded({ extended: true }));

// set up static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// set up session middleware
app.use(sessionMiddleware);

// set up database connection
app.use('/api', require('./routes'));
app.use('/', require('./pageRoutes'));

app.use((req, res, next) => {
   res.status(404).send('Route not found');
});

app.use((err, req, res, next) => {
   logger.error('Error occurred', { message: err.message, stack: err.stack });
   res.status(500).send('Internal Server Error');
});

module.exports = app;