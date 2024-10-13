const budgets = require("express").Router();

budgets.get("/", (req, res) => {
  res.render("user/finance/budgets/index", {
    user: req.session.user,
  });
});

budgets.get("/:id", (req, res) => {
  res.render("user/finance/budgets/view", {
    user: req.session.user,
  });
});

budgets.get("/edit/:id", (req, res) => {
  res.render("user/finance/budgets/edit", {
    user: req.session.user,
  });
});

module.exports = budgets;
