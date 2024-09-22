const nodemailer = require('nodemailer');
const config = require('../../config/config');

// Create a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
   service: config.appEmailService,
   host: config.appEmailHost,
   port: config.appEmailPort,
   secure: true,
   auth: {
      user: config.appEmail,
      pass: config.appPassword
   }
});

transporter.verify((error, success) => {
   if (error) {
      console.log( "Error with email transporter: ", error);
   } else {
      console.log('Server is ready to take messages'); 
   }
});

transporter.sendEmail = (from, to, subject, text) => {
   const mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: text
   };

   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         return error;
      } else {
         return info.response;
      }
   });
};

module.exports = transporter;