const express = require('express');
const path = require('path');
const app = express();

app.use("/", express.static(path.join(__dirname, '..', 'public')));
app.use("/uni-manager", express.static(path.join(__dirname, "../../client/uni_manager/build")));
app.use("/personal-management", express.static(path.join(__dirname, "../../client/personal_management/build")));
app.use("/church-management", express.static(path.join(__dirname, "../../client/church_management/build")));

module.exports = app;
