const auth = require("express").Router();

auth.get("/login", (req, res) => {
  if (req.session.user) {
    res.redirect("/");
  }
  res.render("auth/login", {
    title: "Login",
  });
});

auth.get("/signup", (req, res) => {
  if (req.session.user) {
    res.redirect("/profile");
  }
  res.render("auth/signup", {
    title: "Signup",
  });
});

auth.get("/forgot-password", (req, res) => {
  res.render("auth/forgot-password", {
    title: "Forgot Password",
  });
});

auth.get("/reset-password/:email/:token", (req, res) => {
  res.render("auth/reset-password", {
    title: "Reset Password",
  });
});

auth.get("/password-reset-success", (req, res) => {
  res.render("auth/password-reset-success", {
    title: "Password Reset Success",
  });
});

auth.get("/logout", (req, res) => {
  res.render("auth/logout", {
    title: "Logout",
  });
});

module.exports = auth;
