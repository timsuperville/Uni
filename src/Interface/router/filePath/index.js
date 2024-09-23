const fs = require('fs');
const path = require('path');

const filePath = {
   public: path.join(__dirname, '../..', 'public'),
   html: path.join(__dirname, '../..', 'public', 'html'),
   auth: path.join(__dirname, '../..', 'public', 'html', 'auth')
};

module.exports = filePath;