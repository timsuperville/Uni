const reports = require("express").Router();

reports.get("/", (req, res) => {
  res.render("user/finance/reports/index", {
    user: req.session.user,
  });
});

module.exports = reports;
