const stems = require('express').Router();

const stemsController = require('../../../controllers/songs/stems/index.js');

// get all instrument stems for a song
stems.get('/:songId', stemsController.getStems);
// upload a new instrument stem for a song
stems.post('/:songId', stemsController.uploadStem);
// update an instrument stem for a song
stems.put('/:songId/:stemName', stemsController.updateStem);
// delete an instrument stem for a song
stems.delete('/:songId/:stemName', stemsController.deleteStem);
// download an instrument stem for a song
stems.get('/:songId/:stemName', stemsController.downloadStem);

module.exports = stems;