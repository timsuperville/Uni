const nodemailer = require("nodemailer");
const config = require("../../config");

const transporter = nodemailer.createTransport({
  service: config.appEmailService,
  host: config.appEmailHost,
  port: config.appEmailPort,
  secure: true,
  auth: {
    user: config.appEmail,
    pass: config.appPassword,
  },
});

module.exports = transporter;
