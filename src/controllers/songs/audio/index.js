const audioServices = require('../../../services/songs/audio/index.js');

const getAllAudioFiles = async (req, res) => {
  try {
    const audioFiles = await audioServices.getAllAudioFiles();
    res.status(200).send(audioFiles);
  } catch (err) {
    res.status(500).send(err);
   }
}

const getAudioFiles = async (req, res) => {
  try {
    const songId = req.params.songId;
    const audioFiles = await audioServices.getAudioFiles(songId);
    res.status(200).send(audioFiles);
  } catch (err) {
    res.status(500).send(err);
  }
}

const uploadAudioFile = async (req, res) => {
  try {
    const songId = req.params.songId;
    const audioFile = req.file;
    const newAudioFile = await audioServices.uploadAudioFile(songId, audioFile);
    res.status(200).send(newAudioFile);
  } catch (err) {
    res.status(500).send(err);
  }
}

const updateAudioFile = async (req, res) => {
  try {
    const songId = req.params.songId;
    const audioId = req.params.audioId;
    const audioFile = req.file;
    const updatedAudioFile = await audioServices.updateAudioFile(songId, audioId, audioFile);
    res.status(200).send(updatedAudioFile);
  } catch (err) {
    res.status(500).send(err);
  }
}

const deleteAudioFile = async (req, res) => {
  try {
    const songId = req.params.songId;
    const audioId = req.params.audioId;
    const deletedAudioFile = await audioServices.deleteAudioFile(songId, audioId);
    res.status(200).send(deletedAudioFile);
  } catch (err) {
    res.status(500).send(err);
  }
}

const downloadAudioFile = async (req, res) => {
  try {
    const songId = req.params.songId;
    const audioId = req.params.audioId;
    const audioFile = await audioServices.downloadAudioFile(songId, audioId);
    res.status(200).send(audioFile);
  } catch (err) {
    res.status(500).send(err);
  }
}

module.exports = {
  getAllAudioFiles,
  getAudioFiles,
  uploadAudioFile,
  updateAudioFile,
  deleteAudioFile,
  downloadAudioFile
};