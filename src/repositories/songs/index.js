const Song = require("../../models/songs/Song");

const getAllSongs = async () => {
   return await Song.find({ groupId: null });
};

const getGroupSongs = async (groupId) => {
  return await Song.find({ groupId });
};

const searchSong = async (groupId, query) => {
  return await Song.find({ groupId, query });
};

const saveNewSong = async (data) => {
  return await Song.create(data);
};

const saveGroupSong = async (data, groupId) => {
  return await Song.create({ ...data, groupId });
};

const updateSong = async (id, data) => {
  return await Song.findByIdAndUpdate(id, data, { new: true });
};

const deleteSong = async (id) => {
  return await Song.findByIdAndDelete(id);
};

module.exports = {
  getAllSongs,
  getGroupSongs,
  searchSong,
  saveNewSong,
  saveGroupSong,
  updateSong,
  deleteSong,
};
