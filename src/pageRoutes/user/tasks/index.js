const tasks = require("express").Router();

tasks.get("/", (req, res) => {
   res.render("user/tasks/index", {
      user: req.session.user,
   });
});

tasks.get("/create", (req, res) => {
   res.render("user/tasks/create", {
      user: req.session.user,
   });
});

tasks.get("/edit/:id", (req, res) => {
   res.render("user/tasks/edit", {
      user: req.session.user,
   });
});

tasks.get("/view/:id", (req, res) => {
   res.render("user/tasks/view", {
      user: req.session.user,
   });
});

const task = require("./task/index");
tasks.use("/task", task);


module.exports = tasks;