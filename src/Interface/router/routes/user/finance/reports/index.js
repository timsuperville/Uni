const reports = require("express").Router();
const path = require("path");
const html = require("../../../../filePath").html;

reports.get("/", (req, res) => {
    res.sendFile(path.join(html, "user/finance/reports/index.html"));
});

module.exports = reports;