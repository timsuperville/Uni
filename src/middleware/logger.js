const logger = (err, req, res, next) => {
  logger.error('Error occurred', { message: err.message, stack: err.stack });
  res.status(500).send('Internal Server Error');
 };
 
 module.exports = logger;