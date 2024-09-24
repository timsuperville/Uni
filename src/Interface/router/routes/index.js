const routes = require("express").Router();
const path = require("path");

const html = require("../filePath").html;

const requireLogin = require("../security").requireLogin;

routes.get("/", (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(html, "user/index.html"));
  }
  res.sendFile(path.join(html, "index.html"));
});

routes.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("/profile");
  }
  res.sendFile(path.join(html, "auth/login.html"));
});

routes.get("/register", (req, res) => {
  if (req.session.user) {
    res.redirect("/profile");
  }
  res.sendFile(path.join(html, "auth/register.html"));
});

routes.get("/profile", requireLogin, (req, res) => {
  res.sendFile(path.join(html, "user/profile.html"));
});

routes.get("/logout", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  req.session.destroy();
  res.sendFile(path.join(html, "auth/logout.html"));
});

routes.get("/forgot-password", (req, res) => {
  res.sendFile(path.join(html, "auth/forgot-password.html"));
});

routes.get("/reset-password/:token", (req, res) => {
  res.sendFile(path.join(html, "auth/reset-password.html"));
});

routes.get("/password-reset-success", (req, res) => {
  res.sendFile(path.join(html, "auth/password-reset-success.html"));
});

module.exports = routes;
