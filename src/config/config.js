const dotenv = require('dotenv');
dotenv.config();

var config = {};

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