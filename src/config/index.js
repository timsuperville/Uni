const dotenv = require('dotenv');
dotenv.config();

var config = {};

//App Environment
config.env = process.env.APP_ENV;
if (!config.env) {
  config.env = 'development';
}
if (config.env === 'development') {
  config.appUrl = process.env.DEV_URL;
} else {
   config.appUrl = process.env.PROD_URL;
   }

// Client URL
config.clientUrl = process.env.CLIENT_URL;
config.devUrl = process.env.DEV_URL;
config.prodUrl = process.env.PROD_URL;

// MongoDB
config.mongoURI = process.env.MONGO_URI;

// Express
config.port = process.env.PORT;
config.sessionSecret = process.env.SESSION_SECRET;

// JWT
config.jwtSecret = process.env.JWT_SECRET;

// Email
config.appEmailService = process.env.EMAIL_SERVICE;
config.appEmail = process.env.EMAIL_USER;
config.appPassword = process.env.EMAIL_PASSWORD;
config.appEmailHost = process.env.EMAIL_HOST;
config.appEmailPort = process.env.EMAIL_PORT;

module.exports = config;