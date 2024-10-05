const notifications = require("express").Router();
const path = require("path");

const html = require("../../../filePath").html;

notifications.get("/", (req, res) => { 
    res.sendFile(path.join(html, "user/notifications/index.html"));
});

notifications.get("/create", (req, res) => {
    res.sendFile(path.join(html, "user/notifications/create/index.html"));
});

notifications.get("/edit/:id", (req, res) => {
    res.sendFile(path.join(html, "user/notifications/edit/index.html"));
});

notifications.get("/view/:id", (req, res) => {
    res.sendFile(path.join(html, "user/notifications/view/index.html"));
});


module.exports = notifications;