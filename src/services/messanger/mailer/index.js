const NodeMailer = require('nodemailer');
const config = require('../../../config');

const transporter = NodeMailer.createTransport({
   host: config.appEmailHost,
   service: config.appEmailService,
   port: config.appEmailPort,
   secure: false,
   auth: {
      user: config.appEmailUser ,
      pass: config.appPassword ,
   },
});

const sendEmail = async (from, to, subject, text, html) => {
   console.log('Sending email');
   const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html,
   };
   return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         console.log(error);
         return error;
      }
      return info.response;
   });
};

const bulkTransporter = NodeMailer.createTransport({
   host: config.appEmailHost,
   service: config.appEmailService,
   port: config.appEmailPort,
   secure: false,
   pool: true,
   auth: {
      user: config.appEmailUser ,
      pass: config.appPassword ,
   },
   maxConnections: 5,
   maxMessages: Infinity,
});

const sendBulkEmail = async (from, to, subject, text, html) => {
   console.log('Sending email');
   const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html,
   };
   return bulkTransporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         console.log(error);
         return error;
      }
      return info.response;
   });
};

const sendMessage = async (from, to, subject, text) => {
   return 'Not implemented';
};

const sendText = async (from, to, subject, text) => {
   return 'Not implemented';
};

module.exports = {
   sendEmail,
   sendBulkEmail,
   sendMessage,
   sendText,
};