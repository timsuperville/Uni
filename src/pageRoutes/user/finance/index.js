const finance = require("express").Router();

finance.get("/", (req, res) => {
  res.render("user/finance/index", {
    user: req.session.user,
  });
});

// Accounts router
const accounts = require("./accounts/index");
finance.use("/accounts", accounts);

// Budgets router
const budgets = require("./budgets/index");
finance.use("/budgets", budgets);

// Reports router
const reports = require("./reports/index");
finance.use("/reports", reports);

// Goals router
const goals = require("./goals/index");
finance.use("/goals", goals);

module.exports = finance;