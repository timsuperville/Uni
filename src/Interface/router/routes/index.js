const routes = require("express").Router();
const path = require("path");

const html = require("../filePath").html;

const { requireLogin } = require("../security");

routes.get("/", (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(html, "user/index.html"));
  }
  else {
    res.sendFile(path.join(html, "auth/login.html"));
  }
});
routes.get("/about", (req, res) => {
  res.sendFile(path.join(html, "about.html"));
});
routes.get("/contact", (req, res) => {
  res.sendFile(path.join(html, "contact.html"));
});
routes.get("/privacy-policy", (req, res) => {
  res.sendFile(path.join(html, "privacy-policy.html"));
});
routes.get("/terms-of-service", (req, res) => {
  res.sendFile(path.join(html, "terms-of-service.html"));
});

const auth = require("./auth");
const user = require("./user");
const work = require("./work");
const home = require("./home");

routes.use("/", auth);
routes.use("/user", requireLogin, user);
routes.use("/work", requireLogin, work);
routes.use("/home", requireLogin, home);

module.exports = routes;