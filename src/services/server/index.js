const si = require('systeminformation');
const childProcess = require('child_process');

si.cpu()
  .then(data => console.log(data))
  .catch(error => console.error(error));

si.mem()
   .then(data => console.log(data))
   .catch(error => console.error(error));

si.networkInterfaces()
   .then(data => console.log(data))
   .catch(error => console.error(error));

// List files in the current directory
childProcess.exec('ls -la', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});