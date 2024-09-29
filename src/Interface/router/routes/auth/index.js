const auth = require("express").Router();
const path = require("path");

const html = require("../../filePath").html;

auth.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("/");
  }
  res.sendFile(path.join(html, "auth/login.html"));
});

auth.get("/register", (req, res) => {
  if (req.session.user) {
    res.redirect("/profile");
  }
  res.sendFile(path.join(html, "auth/register.html"));
});

auth.get("/forgot-password", (req, res) => {
  res.sendFile(path.join(html, "auth/forgot-password.html"));
});

auth.get("/reset-password/:token", (req, res) => {
  res.sendFile(path.join(html, "auth/reset-password.html"));
});

auth.get("/password-reset-success", (req, res) => {
  res.sendFile(path.join(html, "auth/password-reset-success.html"));
});

auth.get("/logout", (req, res) => {
   if (!req.session.user) {
      return res.redirect("/");
   }
   req.session.destroy();
   res.sendFile(path.join(html, "auth/logout.html"));
   });

module.exports = auth;