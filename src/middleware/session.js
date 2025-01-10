require('dotenv').config();
const session = require('express-session');
const MongoStore = require('connect-mongo');
const config = require('../config');

module.exports = session({
   secret: config.sessionSecret,
   resave: false,
   saveUninitialized: false,
   store: MongoStore.create({ 
      mongoUrl: config.dbConnectionString,
      ttl: 24 * 60 * 60 // Session expiration in seconds (1 day in this case)
   }),
   cookie: {
      maxAge: 1000 * 60 * 60 * 24 // 1 day
   }
});