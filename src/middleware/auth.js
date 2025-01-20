const requireLogin = (req, res, next) => {
  if (!req.session.user) {
    res.redirect("/welcome");
  } else {
    next();
  }
};

const requireAdmin = (req, res, next) => {
  if (!req.session.user || !req.session.user.admin) {
    res.redirect("/");
  } else {
    next();
  }
};

module.exports = {
  requireLogin,
  requireAdmin,
};
