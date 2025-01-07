const fs = require("fs");
const path = require("path");

const saveFile = (filePath, data) => {
  fs.writeFileSync(filePath, data);
};

const readFile = (filePath) => {
  return fs.readFileSync(filePath, "utf8");
};

const moveFile = (oldPath, newPath) => {
  fs.renameSync(oldPath, newPath);
};

const deleteFile = (filePath) => {
  fs.unlinkSync(filePath);
};

module.exports = {
  saveFile,
  readFile,
  moveFile,
  deleteFile,
};
