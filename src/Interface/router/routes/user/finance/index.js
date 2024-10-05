const finance = require("express").Router();
const path = require("path");
const html = require("../../../filePath").html;

finance.get("/", (req, res) => {
  res.sendFile(path.join(html, "user/finance/index.html"));
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