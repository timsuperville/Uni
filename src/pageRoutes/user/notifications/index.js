const notifications = require("express").Router();

notifications.get("/", (req, res) => {
  res.render("user/notifications/index", {
    user: req.session.user,
  });
});

notifications.get("/create", (req, res) => {
  res.render("user/notifications/create", {
    user: req.session.user,
  });
});

notifications.get("/edit/:id", (req, res) => {
  res.render("user/notifications/edit", {
    user: req.session.user,
  });
});

notifications.get("/view/:id", (req, res) => {
  res.render("user/notifications/view", {
    user: req.session.user,
  });
});

module.exports = notifications;
