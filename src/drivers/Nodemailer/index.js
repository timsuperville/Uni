const nodemailer = require("nodemailer");
const config = require("../../config/config");

const transporter = nodemailer.createTransport({
  service: config.appEmailService,
  auth: {
    user: config.appEmail,
    pass: config.appPassword,
  },
});

module.exports = transporter;
