// logger.js
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info', // Default level
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json() // Structured logging
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }), // Errors only
        new winston.transports.File({ filename: 'combined.log' }), // All logs
        new winston.transports.Console({ format: winston.format.simple() }) // Debugging
    ],
});

module.exports = logger;
