const logger = (err, next) => {
    console.error(err.stack);
    // write error to log file
    logger.error('Error occurred', { message: err.message, stack: err.stack });
    next();
 };
 
 module.exports = logger;