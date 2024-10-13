const home = require("express").Router();

home.get("/", (req, res) => {
  res.render("home/index", {
    user: req.session.user,
  });
});

module.exports = home;
