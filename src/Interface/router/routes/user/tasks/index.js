const tasks = require("express").Router();
const path = require("path");

const html = require("../../../filePath").html;

tasks.get("/", (req, res) => {
   res.sendFile(path.join(html, "user/tasks/index.html"));
});

tasks.get("/create", (req, res) => {
   res.sendFile(path.join(html, "user/tasks/create/index.html"));
});

tasks.get("/edit/:id", (req, res) => {
   res.sendFile(path.join(html, "user/tasks/edit/index.html"));
});

tasks.get("/view/:id", (req, res) => {
   res.sendFile(path.join(html, "user/tasks/view/index.html"));
});


module.exports = tasks;