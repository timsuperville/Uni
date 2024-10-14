const NodeMailer = require('nodemailer');
const config = require('../../../config');

const nodeMailer = NodeMailer.createTransport({
   service: 'gmail',
   auth: {
      user: config.appEmail,
      pass: config.appPassword,
   },
   });

const sendEmail = async (from, to, subject, text) => {
   const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: text,
   };
   return nodeMailer.sendMail(mailOptions);
};

const sendMessage = async (from, to, subject, text) => {
   return 'Not implemented';
};

const sendText = async (from, to, subject, text) => {
   return 'Not implemented';
};

module.exports = {
   sendEmail,
   sendMessage,
   sendText,
};