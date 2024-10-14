const mailer = require('./mailer');
const config = require('../../config');

const sendPasswordResetEmail = async (email, resetLink) => {
   const from = config.appEmail;
   const to = email;
   const subject = 'Password Reset';
   const text = `Click the link to reset your password: ${resetLink}`;
   return mailer.sendEmail(from, to, subject, text);
};

module.exports = {
   sendPasswordResetEmail
};