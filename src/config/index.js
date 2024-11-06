const dotenv = require("dotenv");
dotenv.config();

var config = {};

//App Environment
config.env = process.env.APP_ENV;

// App URL
if (config.env === "development") {
  config.appUrl = process.env.DEV_URL;
} else if (config.env === "production") {
  config.appUrl = process.env.PROD_URL;
} else {
  config.appUrl = process.env.DEV_URL;
}

// App Port
config.appPort = process.env.PORT;

// App Name
config.appName = process.env.APP_NAME;

// MongoDB
config.mongoURI = process.env.MONGO_URI;

// Express
config.port = process.env.PORT;
config.sessionSecret = process.env.SESSION_SECRET;

// JWT
config.jwtSecret = process.env.JWT_SECRET;

// Email
config.appEmailService = process.env.EMAIL_SERVICE;
config.appEmailUser = process.env.EMAIL_USER;
config.appPassword = process.env.EMAIL_PASSWORD;
config.appEmailHost = process.env.EMAIL_HOST;
config.appEmailPort = process.env.EMAIL_PORT;

// FAITHLIFE
config.faithlifeConsumerToken = process.env.FAITHLIFE_CONSUMER_TOKEN;
config.faithlifeConsumerSecret = process.env.FAITHLIFE_CONSUMER_SECRET;
config.faithlifeAccessToken = process.env.FAITHLIFE_ACCESS_TOKEN;
config.faithlifeAccessSecret = process.env.FAITHLIFE_ACCESS_SECRET;

module.exports = config;
