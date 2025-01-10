const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const {
   helmet,
   compression,
   session,
   logger,
   errorHandler,
   limiter,
   cors,
   cookieParser,
   staticFiles,
   hpp
} = require('./middleware');

const app = express();

app.use(helmet);
app.use(hpp);
app.use(compression);
app.use(session);
app.use(logger);
app.use(staticFiles);
app.use(limiter);
app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use('/api', require('./routes'));
app.use('/', require('./pageRoutes'));

const db = require('./drivers/Mongoose');
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(errorHandler);

module.exports = app;