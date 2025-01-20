const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  console.log('Error occurred', { message: err.message, stack: err.stack });
  res.status(500).send('Something broke!', { message: err.message });
};

module.exports = errorHandler;