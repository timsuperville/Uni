const nodeMailer = require("../drivers/Nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const Messanger = {
  sendEmail: async (from, to, subject, text) => {
    const mailOptions = {
      from: from,
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
