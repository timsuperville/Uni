const path = require("path");

const requireLogin = (req, res, next) => {
  if (!req.session.user) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = {
  requireLogin,
};
