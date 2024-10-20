const taskRouter = require("express").Router();

taskRouter.get("/:id", (req, res) => {
   res.render("user/tasks/task/index", {
   });
});

taskRouter.get("/create", (req, res) => {
   res.render("user/tasks/task/create", {
      user: req.session.user,
   });
});

taskRouter.get("/edit/:id", (req, res) => {
   res.render("user/tasks/task/edit", {
      user: req.session.user,
   });
});

taskRouter.get("/view/:id", (req, res) => {
   res.render("user/tasks/task/view", {
      user: req.session.user,
   });
});

module.exports = taskRouter;