const nodeMailer = require('../drivers/Nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const Messanger = {
   sendEmail: async (from, to, subject, text) => {
      return "Not implemented"
   },
   sendMessage: async (from, to, subject, text) => {
      return "Not implemented"
   },
   sendText: async (from, to, subject, text) => {
      return "Not implemented"
   },
};

module.exports = Messanger;