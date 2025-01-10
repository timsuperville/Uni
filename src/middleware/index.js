const { requireLogin, requireAdmin } = require("./auth");
const limiter = require("./limiter");
const errorHandler = require("./errorHandler");
const logger = require("./logger");
const helmet = require("./helmet");
const compression = require("./compression");
const cors = require("./cors");
const bodyParser = require("./bodyParser");
const cookieParser = require("./cookieParser");
const session = require("./session");
const staticFiles = require("./static");
const hpp = require("./hpp");

module.exports = {
  requireLogin,
  requireAdmin,
  limiter,
  errorHandler,
  logger,
  helmet,
  compression,
  cors,
  bodyParser,
  cookieParser,
  session,
  staticFiles,
  hpp,
};
