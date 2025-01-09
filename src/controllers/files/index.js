const fileService = require("../../services/files/index.js");

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
      const filePath = await fileService.saveFile(file);
      res.status(200).send({ message: 'File uploaded successfully', filePath, success: true });
   } catch (error) {
      res.status(500).send({ error: 'Failed to upload file' });
   }
};

const getFiles = async (req, res) => {
   try {
      const files = await fileService.getAllFiles(); 
      res.status(200).send(files);
   } catch (error) {
      res.status(500).send({ error: 'Failed to retrieve files' });
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
  downloadFile,
   uploadFile,
   getFiles,
   deleteFile,
};
