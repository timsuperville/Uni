const session = require('express-session');
const store = require('connect-mongo');
const mongoose = require('mongoose');

const config = require('../../config/config');

const MongoStore = new store(session);

const sessionMiddleware = session({
   secret: config.sessionSecret,
   resave: false,
   saveUninitialized: false,
   store: new MongoStore({ mongooseConnection: mongoose.connection }),
   cookie: {
      maxAge: 1000 * 60 * 60 * 24
   }
});

module.exports = sessionMiddleware;