const fileService = require("../../services/files/index.js");

const getFiles = async (req, res) => {
   try {
      const files = await fileService.getFiles(); 
      res.status(200).send(files);
   } catch (error) {
      res.status(500).send({ error: 'Failed to retrieve files' });
   }
};

const getUserFiles = async (req, res) => {
   try {
      const { userId } = req.params;
      const files = await fileService.getUserFiles(userId);
      res.status(200).send(files);
   } catch (error) {
      res.status(500).send({ error: 'Failed to retrieve user files' });
   }
};

const downloadFile = async (req, res) => {
   try {
      const { filename } = req.params;
      const file = await fileService.downloadFile(filename);
      res.download(file);
   } catch (error) {
      res.status(500).send({ error: 'Failed to download file' });
   }
};

const uploadFile = async (req, res) => {
   try {
      const { file } = req.files;
      const directory = req.params.directory; 
      const fileDirectory = await fileService.uploadFile(file, directory);
      res.status(200).send({ message: 'File uploaded successfully', directory: fileDirectory, success: true });
   } catch (error) {
      res.status(500).send({ error: 'Failed to upload file' });
   }
};

const deleteFile = async (req, res) => {
   try {
      const { filename } = req.params;
      const result = await fileService.deleteFile(filename);
      res.status(200).send({ message: 'File deleted successfully', result, success: true });
   } catch (error) {
      res.status(500).send({ error: 'Failed to delete file' });
   }
};

module.exports = {
   getFiles,
   getUserFiles,
  downloadFile,
   uploadFile,
   deleteFile,
};
