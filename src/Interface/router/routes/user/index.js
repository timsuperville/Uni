const user = require("express").Router();
const path = require("path");

const html = require("../../filePath").html;

user.get("/", (req, res) => {
    res.sendFile(path.join(html, "user/index.html"));
});

user.get("/profile", (req, res) => {
   res.sendFile(path.join(html, "user/profile/index.html"));
});

user.get("/settings", (req, res) => {
   res.sendFile(path.join(html, "user/settings/index.html"));
});

// Finance router
const finance = require("./finance/index");
user.use("/finance", finance);

// Tasks router
const tasks = require("./tasks/index");
user.use("/tasks", tasks);

// Notifications router
const notifications = require("./notifications/index");
user.use("/notifications", notifications);

// Messages router
const messages = require("./messages/index");
user.use("/messages", messages);

// Calendar router
const calendar = require("./calendar/index");
user.use("/calendar", calendar);

user.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});


module.exports = user;