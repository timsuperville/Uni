const routes = require("express").Router();
const path = require("path");

const html = require("../filePath").html;

const requireLogin = require("../security").requireLogin;

routes.get("/", (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(html, "user/index.html"));
  }
  res.sendFile(path.join(html, "auth/login.html"));
});

const auth = require("./auth");
const user = require("./user");

routes.use("/", auth);
routes.use("/user", requireLogin, user);

module.exports = routes;