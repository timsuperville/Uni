const path = require("path");
const {
  driveDir,
  fileDir,
  userDir,
  saveFile,
  readFile,
  readDir,
  deleteFile,
} = require("../../filesystem");

const getFiles = async () => {
  const files = readDir(driveDir);
  return files;
};

const getFile = async (filename) => {
  const file = readFile(fileDir(filename));
  return file;
}

const getUserFiles = async (userId) => {
  const files = readDir(userDir(userId));
  return files;
};

const downloadFile = async (filename) => {
  const file = fileDir(filename);
  return file;
};

const uploadFile = (file, directory) => {
  const fileDirectory = saveFile(directory, file.name, file.data);
  return fileDirectory;
};

const saveUserFile = async (file, userId) => {
  const userDir = path.join(driveDir, 'User_Files', userId);
  const userFilePath = path.join(userDir, file.name);

  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir, { recursive: true });
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(userFilePath, file.data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(userFilePath);
      }
    });
  });
};

const savePublicAvatar = (file, userId) => {
  const ext = path.extname(file.name);
  const publicFilePath = path.join(publicDir, `${userId}${ext}`);

  return new Promise((resolve, reject) => {
    fs.writeFile(publicFilePath, file.data, (err) => {
      if (err) {
        reject(err);
      } else { 
        resolve(`/images/avatars/${userId}${ext}`);
      }
    });
  });
};

module.exports = {
  getFiles,
  getFile,
  getUserFiles,
  downloadFile,
  uploadFile,
  saveUserFile,
  savePublicAvatar,
};
