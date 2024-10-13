const user = require("express").Router();

user.get("/", (req, res) => {
  res.render("user/index", {
    user: req.session.user,
  });
});

user.get("/profile", (req, res) => {
  res.render("user/profile", {
    user: req.session.user,
  });
});

user.get("/settings", (req, res) => {
  res.render("user/settings", {
    user: req.session.user,
  });
});

user.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

const finance = require("./finance/index");
const tasks = require("./tasks/index");
const notifications = require("./notifications/index");
const messages = require("./messages/index");
const calendar = require("./calendar/index");

user.use("/finance", finance);
user.use("/tasks", tasks);
user.use("/notifications", notifications);
user.use("/messages", messages);
user.use("/calendar", calendar);

module.exports = user;