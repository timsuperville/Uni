const tracks = require('express').Router();

const tracksController = require('../../../controllers/songs/tracks/index.js');

// get tracks for a song
tracks.get('/:songId', tracksController.getTracks);
// upload a new track for a song
tracks.post('/:songId', tracksController.uploadTrack);
// update a track for a song
tracks.put('/:songId/:trackName', tracksController.updateTrack);
// delete a track for a song
tracks.delete('/:songId/:trackName', tracksController.deleteTrack);
// download a track for a song
tracks.get('/:songId/:trackName', tracksController.downloadTrack);

module.exports = tracks;