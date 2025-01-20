const audio = require('express').Router();

const audioController = require('../../../controllers/songs/audio/index.js');

// get all audio files
audio.get('/all', audioController.getAllAudioFiles);
// get audio files for a song
audio.get('/:songId', audioController.getAudioFiles);
// upload a new audio file for a song
audio.post('/:songId', audioController.uploadAudioFile);
// update an audio file for a song
audio.put('/:songId/:audioId', audioController.updateAudioFile);
// delete an audio file for a song
audio.delete('/:songId/:audioId', audioController.deleteAudioFile);
// download an audio file for a song
audio.get('/:songId/:audioId', audioController.downloadAudioFile);

module.exports = audio;