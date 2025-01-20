const songsServices = require("../../services/songs/index.js");

const getAllSongs = async (req, res) => {
  try {
    const songs = await songsServices.getAllSongs();
    res.status(200).send(songs);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getGroupSongs = async (req, res) => {
  try {
    const songs = await songsServices.getGroupSongs(req.params.groupId);
    res.status(200).send(songs);
  } catch (error) {
    res.status(500).send(error);
  }
};

const searchSongs = async (req, res) => {
  try {
   const query = req.query;
   const groupId = req.headers.groupId;
    const songs = await songsServices.searchSongs(query, groupId);
    res.status(200).send(songs);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getSongById = async (req, res) => {
  try {
    const song = await songsServices.getSongById(req.params.id);
    res.status(200).send(song);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createSong = async (req, res) => {
  try {
   const groupId = req.headers.groupId;
   const data = req.body;
    const song = await songsServices.saveNewSong(groupId, data);
    res.status(200).send(song);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateSong = async (req, res) => {
  try {
    const song = await songsServices.updateSong(req.params.id, req.body);
    res.status(200).send(song);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteSong = async (req, res) => {
  try {
    const song = await songsServices.deleteSong(req.params.id);
    res.status(200).send(song);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllSongs,
  getGroupSongs,
  searchSongs,
  getSongById,
  createSong,
  updateSong,
  deleteSong,
};
