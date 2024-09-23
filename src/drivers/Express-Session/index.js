const session = require('express-session');
const MongoStore = require('connect-mongo');
const config = require('../../config/config');

const sessions = session({
   secret: config.sessionSecret,
   resave: false,
   saveUninitialized: false,
   store: MongoStore.create({ mongoUrl: config.mongoURI }),
   cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      secure: false,
      sameSite: 'strict',
   },
});

module.exports = sessions;