const express = require('express');
const files = express.Router();
const filesController = require('../../controllers/files/index.js');
const upload = require('../../config/multerConfig'); // Import Multer setup

// Define routes
files.get('/download/:filename', filesController.downloadFile);
files.post('/upload', upload.single('file'), filesController.uploadFile); // Use Multer middleware
files.get('/', filesController.getFiles);

// Optional routes (commented for now)
// files.post('/', filesController.createFile);
// files.put('/', filesController.updateFile);
// files.delete('/', filesController.deleteFile);

module.exports = files;
