const fs = require("fs");
const path = require("path");
const config = require("../config");

const publicDir = path.join(__dirname, "..", "public");
const driveDir =
  config.env === "production"
    ? path.join(__dirname, "..", "..", "fileDrive")
    : path.join(__dirname, "..", "fileDrive");

const fileDir = (fileName) => path.join(driveDir, fileName);

const userDir = (userId) => path.join(driveDir, "User_Files", userId);

const songDir = (songId) => path.join(driveDir, "Songs", songId);

const stemsDir = (songId) => path.join(driveDir, "Songs", songId, "Stems");

const tracksDir = (songId) => path.join(driveDir, "Songs", songId, "Tracks");

// _____________________________________________ //


const makeDir = (dirPath) => {
  return fs.mkdirSync(dirPath, { recursive: true });
};

const saveFile = (dirPath, fileName, data) => {
  if (!fs.existsSync(dirPath)) {
    makeDir(dirPath);
  }
  const fullPath = path.join(dirPath, fileName);
  return fs.writeFileSync(fullPath, data);
};

const readFile = (filePath) => {
  return fs.readFileSync(filePath, "utf8");
};

const readDir = (dirPath) => {
  return fs.readdirSync(dirPath);
};

const moveFile = (oldPath, newPath) => {
  fs.renameSync(oldPath, newPath);
};

const deleteFile = (filePath) => {
  fs.unlinkSync(filePath);
};

const deleteDir = (dirPath) => {
  fs.rmdirSync(dirPath, { recursive: true });
};

module.exports = {
  driveDir,
  publicDir,
  fileDir,
  userDir,
  songDir,
  stemsDir,
  tracksDir,
// _______ //
  makeDir,
  saveFile,
  readFile,
  readDir,
  moveFile,
  deleteFile,
  deleteDir,
};
