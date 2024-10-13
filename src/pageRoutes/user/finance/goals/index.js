const goals = require("express").Router();

goals.get("/", (req, res) => {
  res.render("user/finance/goals/index", {
    user: req.session.user,
  });
});

goals.get("/goal/:id", (req, res) => {
  res.render("user/finance/goals/view", {
    user: req.session.user,
  });
});

goals.get("/goal/edit/:id", (req, res) => {
  res.render("user/finance/goals/edit", {
    user: req.session.user,
  });
});

goals.get("/new", (req, res) => {
  res.render("user/finance/goals/create", {
    user: req.session.user,
  });
});

module.exports = goals;
