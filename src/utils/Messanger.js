const dotenv = require("dotenv");
dotenv.config();

const config = require("../config/config");
const nodeMailer = require("../drivers/Nodemailer");

const Messanger = {
  sendEmail: async (to, subject, text) => {
    const mailOptions = {
      from: config.appEmail,
      to: to,
      subject: subject,
      text: text,
    };
    return nodeMailer.sendMail(mailOptions);
  },
  sendMessage: async (from, to, subject, text) => {
    return "Not implemented";
  },
  sendText: async (from, to, subject, text) => {
    return "Not implemented";
  },
};

module.exports = Messanger;
