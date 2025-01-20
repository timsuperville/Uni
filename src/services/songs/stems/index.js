const { stemsDir, saveFile, readDir, deleteFile } = require("../../../filesystem");

const getStems = (songId) => {
  return readDir(stemsDir(songId));
};

const saveStem = (songId, data) => {
  const fileName = `${data.name}.${data.type}`;
  return saveFile(stemsDir(songId), fileName, data);
};

const deleteStem = (songId, stemName) => {
  return deleteFile(stemsDir(`${songId}/${stemName}`));
};

const updateStem = (songId, stemName, data) => {
  deleteFile(stemsDir(`${songId}/${stemName}`));
  return saveStem(songId, data);
};

const downloadStem = (songId, stemName) => {
  return `${stemsDir(songId)}/${stemName}`;
};

module.exports = {
  getStems,
  saveStem,
  deleteStem,
  updateStem,
  downloadStem,
};
