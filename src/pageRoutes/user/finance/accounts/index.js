const accounts = require("express").Router();

accounts.get("/", (req, res) => {
  res.render("user/finance/accounts/index", {
    user: req.session.user,
  });
});

accounts.get("/account/:id", (req, res) => {
  res.render("user/finance/accounts/account", {
    user: req.session.user,
  });
});

accounts.get("/account/edit/:id", (req, res) => {
  res.render("user/finance/accounts/edit/:id", {
    user: req.session.user,
  });
});

accounts.get("/new", (req, res) => {
  res.render("user/finance/accounts/new", {
    user: req.session.user,
  });
});

module.exports = accounts;
