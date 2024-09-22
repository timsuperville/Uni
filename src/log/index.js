const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const log = (message) => {
  const date = new Date();
  const log = `${date.toISOString()} ${message}`;
  fs.appendFile(path.join(__dirname, 'log.txt'), log, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

const run = (command) => {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      log(`stderr: ${stderr}`);
      return;
    }
    log(`stdout: ${stdout}`);
  });
};

module.exports = {
   log,
   run,
   };