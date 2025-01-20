const dotenv = require("dotenv");
dotenv.config();

var config = {};

config.appName = process.env.APP_NAME;

config.env = process.env.APP_ENV;

if (config.env === "development") {
  config.appUrl = process.env.DEV_URL;
} else if (config.env === "production") {
  config.appUrl = process.env.PROD_URL;
} else {
  config.appUrl = process.env.DEV_URL;
}

config.appPort = process.env.PORT;

config.driveDir = process.env.DRIVE_DIR;

// DB
config.dbConnectionString = process.env.DB_CONNECTION_STRING;

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

// OPENAI
config.openaiApiKey = process.env.OPENAI_API_KEY;

module.exports = config;
