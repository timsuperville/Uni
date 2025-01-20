const {
  tracksDir,
  saveFile,
  readFile,
  readDir,
  deleteFile,
} = require("../../../filesystem");

const getTracks = async (songId) => {
  const tracks = readDir(tracksDir(songId));
  return tracks;
};

const uploadTrack = async (songId, file) => {
  const directory = tracksDir(songId);
  const trackName = `${file.name}.${file.extension}`;
  return saveFile(directory, trackName, track.data);
};

const updateTrack = async (songId, trackName, track) => {
  const directory = tracksDir(songId);
  const oldTrackPath = path.join(tracksDir, trackName);
  deleteFile(oldTrackPath);
  saveFile(directory, trackName, track.data);
  return trackName;
};

const deleteTrack = async (songId, trackName) => {
  const directory = tracksDir(songId);
  const trackPath = path.join(directory, trackName);
  deleteFile(trackPath);
  return;
};

const downloadTrack = async (songId, trackName) => {
  const directory = tracksDir(songId);
  const trackPath = path.join(directory, trackName);
  const track = readFile(trackPath);
  return track;
};

module.exports = {
  getTracks,
  uploadTrack,
  updateTrack,
  deleteTrack,
  downloadTrack,
};
