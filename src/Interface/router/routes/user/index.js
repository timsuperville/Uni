const user = require("express").Router();
const path = require("path");

const html = require("../../filePath").html;

user.get("/", (req, res) => {
  if (req.session.user) {
    res.sendFile(path.join(html, "user/index.html"));
  }
  res.sendFile(path.join(html, "index.html"));
});

user.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
   }
   res.sendFile(path.join(html, "user/profile.html"));
});

user.get("/settings", (req, res) => {
   if (!req.session.user) {
      return res.redirect("/");
   }
   res.sendFile(path.join(html, "user/settings.html"));
});

module.exports = user;