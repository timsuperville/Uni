const path = require("path");

const html = require("../filePath").html;

const requireLogin = (req, res, next) => {
  if (!req.user) {
    res.status(401).sendFile(path.join(html, "auth/login.html"));
  } else {
    next();
  }
};

module.exports = {
  requireLogin,
};
