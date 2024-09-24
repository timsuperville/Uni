const session = require('express-session');
const MongoStore = require('connect-mongo');
const config = require('../../config/config');

// Create session middleware with MongoStore
const sessionMiddleware = session({
   secret: config.sessionSecret,
   resave: false,
   saveUninitialized: false,
   store: MongoStore.create({ 
      mongoUrl: config.mongoURI,
      ttl: 24 * 60 * 60 // Session expiration in seconds (1 day in this case)
   }),
   cookie: {
      maxAge: 1000 * 60 * 60 * 24 // 1 day
   }
});

module.exports = sessionMiddleware;