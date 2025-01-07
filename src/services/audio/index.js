const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { saveFile, readFile, moveFile, deleteFile } = require("../../filesystem");
const { uploadFile, splitFile, cancelTask, checkFileStatus, getUserLimits } = require("../../drivers/Lalal-ai");

const audioFileRepository = require("../../repositories/audioFiles");
const songRepository = require("../../repositories/songs");


const uploadSongAudioFile = async (songId, filePath, fileName, licenseKey) => {
    const fileExtension = path.extname(fileName);
    const newFileName = `${uuidv4()}${fileExtension}`;
    const newFilePath = path.join(__dirname, "..", "..", "uploads", newFileName);
    
    // Save file to server
      const fileData = readFile(filePath);
      saveFile(newFilePath, fileData);


   //  Save file to database
      const audioFile = await audioFileRepository.createAudioFile({
         name: fileName,
         path: newFilePath,
      });
    
    // Upload file to lalal.ai
    return uploadFile(filePath, fileName, licenseKey);
  };

const splitAudio = async (fileId, licenseKey, params) => {
  return splitFile(fileId, licenseKey, params);
};

const cancelAudioTask = async (fileIds, licenseKey) => {
  return cancelTask(fileIds, licenseKey);
};

const checkAudioFileStatus = async (fileIds, licenseKey) => {
  return checkFileStatus(fileIds, licenseKey);
};

const getUserAudioLimits = async (licenseKey) => {
  return getUserLimits(licenseKey);
};

module.exports = {
  uploadAudio,
  splitAudio,
  cancelAudioTask,
  checkAudioFileStatus,
  getUserAudioLimits,
};
