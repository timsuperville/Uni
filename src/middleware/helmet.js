const helmet = require('helmet');

const helmetConfig = {
   contentSecurityPolicy: {
      directives: {
         defaultSrc: ["'self'"],
         scriptSrc: ["'self'", "https://code.jquery.com", "https://stackpath.bootstrapcdn.com", "'unsafe-inline'"],
         styleSrc: ["'self'", "https://stackpath.bootstrapcdn.com", "https://cdnjs.cloudflare.com", "'unsafe-inline'"],
         imgSrc: ["'self'", "data:", "blob:"],
         fontSrc: ["'self'", "https://cdnjs.cloudflare.com"],
         // other directives...
      }
   },
   frameguard: {
      action: 'deny'
   },
   hidePoweredBy: true,
   hsts: {
      maxAge: 31536000,
      includeSubDomains: true
   },
   ieNoOpen: true,
   noSniff: true,
   xssFilter: true
};

module.exports = helmet(helmetConfig);