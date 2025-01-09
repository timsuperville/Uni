const express = require('express');
const files = express.Router();
const filesController = require('../../controllers/files/index.js');
const upload = require('../../config/multerConfig'); // Import Multer setup

// Define routes
files.get('/download/:filename', filesController.downloadFile);
files.post('/upload', filesController.uploadFile); // Use Multer middleware
files.get('/', filesController.getFiles);
// files.post('/', filesController.createFile);
// files.put('/', filesController.updateFile);
files.delete('/delete/:filename', filesController.deleteFile);

module.exports = files;
