const songs = require('express').Router();

const songsController = require('../../controllers/songs/index.js');

songs.get('/all', songsController.getAllSongs);
songs.get('/group/:groupId', songsController.getGroupSongs);
songs.get('/search', songsController.searchSongs);
songs.get('/:id', songsController.getSongById);
songs.post('/new', songsController.createSong);
songs.post('/library', songsController.createSong);
songs.put('/:id', songsController.updateSong);
songs.delete('/:id', songsController.deleteSong);

const tracks = require('./tracks');
const stems = require('./stems');
// const lyrics = require('./lyrics');
// const notes = require('./notes');

songs.use('/track', tracks);
songs.use('/stems', stems);
// songs.use('/lyrics', lyrics);
// songs.use('/notes', notes);

module.exports = songs;