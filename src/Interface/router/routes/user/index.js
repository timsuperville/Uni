const user = require("express").Router();
const path = require("path");

const html = require("../../filePath").html;

user.get("/", (req, res) => {
    res.sendFile(path.join(html, "user/index.html"));
});

user.get("/profile", (req, res) => {
   res.sendFile(path.join(html, "user/profile.html"));
});

user.get("/settings", (req, res) => {
   res.sendFile(path.join(html, "user/settings.html"));
});

user.get("/finance", (req, res) => {
    res.sendFile(path.join(html, "user/finance.html"));
});

user.get("/tasks", (req, res) => {
    res.sendFile(path.join(html, "user/tasks.html"));
});
user.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});


module.exports = user;