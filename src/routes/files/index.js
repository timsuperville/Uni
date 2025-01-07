const files = require('express').Router();
const filesController = require('../../controllers/files/index.js');
const multer = require('multer');
const upload = multer({ dest: '../../fileDrive' });

files.get('/download/:filename', filesController.downloadFile);
files.post('/upload', filesController.uploadFile);
files.get('/', filesController.getFiles);
// files.post('/', filesController.createFile);
// files.put('/', filesController.updateFile);
// files.delete('/', filesController.deleteFile);

module.exports = files;