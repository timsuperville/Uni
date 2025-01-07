const fs = require("fs");
const path = require("path");
const driveDir = path.join(__dirname, '..', '..', 'fileDrive');

const filesRepository = require("../../repositories/files/index.js");

const downloadFile = async (filename) => {
  const filePath = path.join(driveDir, filename);
  if (fs.existsSync(filePath)) {
    return filePath;
  } else {
    throw new Error("File not found");
  }
};

const saveFile = (file) => {
   const filePath = path.join(driveDir, file.name);
   return new Promise((resolve, reject) => {
     fs.writeFile(filePath, file.data, (err) => {
       if (err) {
         reject(err);
       } else {
         resolve(filePath);
       }
     });
   });
 };

const getAllFiles = () => {
  return fs.readdirSync(driveDir);
};

const readFile = (filePath) => {
  return fs.readFileSync(filePath);
};

const moveFile = (oldPath, newPath) => {
  fs.renameSync(oldPath, newPath);
};

const deleteFile = (filePath) => {
  fs.unlinkSync(filePath);
};

module.exports = {
  downloadFile,
  saveFile,
  getAllFiles,
  readFile,
  moveFile,
  deleteFile,
};
