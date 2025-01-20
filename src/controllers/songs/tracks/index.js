const tracksService = require('../../../services/songs/tracks');

const getTracks = async (req, res) => {
  try {
    const songId = req.params.songId;
    const tracks = await tracksService.getTracks(songId);
    res.status(200).send(tracks);
  } catch (error) {
    res.status(500).send(error);
   }
}

const uploadTrack = async (req, res) => {
  try {
   const { file } = req.files;
    const songId = req.params.songId;
    const track = await tracksService.uploadTrack(songId, file);
    res.status(200).send(track);
  } catch (error) {
    res.status(500).send(error);
  }
}

const updateTrack = async (req, res) => {
  try {
    const songId = req.params.songId;
    const trackId = req.params.trackId;
    const track = await tracksService.updateTrack(songId, trackId, req.body);
    res.status(200).send(track);
  } catch (error) {
    res.status(500).send(error);
  }
}

const deleteTrack = async (req, res) => {
  try {
    const songId = req.params.songId;
    const trackId = req.params.trackId;
    await tracksService.deleteTrack(songId, trackId);
    res.status(200).send('Track deleted');
  } catch (error) {
    res.status(500).send(error);
  }
}

const downloadTrack = async (req, res) => {
  try {
    const songId = req.params.songId;
    const trackId = req.params.trackId;
    const track = await tracksService.downloadTrack(songId, trackId);
    res.status(200).send(track);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getTracks,
  uploadTrack,
  updateTrack,
  deleteTrack,
  downloadTrack
};