const express = require('express');
const files = express.Router();
const filesController = require('../../controllers/files/index.js');

// Define routes
files.get('/', filesController.getFiles);
files.get('/:userId', filesController.getUserFiles);
files.get('/download/:filename', filesController.downloadFile);
files.post('/:directory/upload', filesController.uploadFile);
// files.post('/', filesController.createFile);
// files.put('/', filesController.updateFile);
files.delete('/delete/:filename', filesController.deleteFile);

module.exports = files;
