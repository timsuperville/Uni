const home = require("express").Router();
const path = require("path");

const html = require("../../filePath").html;

home.get("/", (req, res) => {
  res.sendFile(path.join(html, "home/index.html"));
});

module.exports = home;
