const File = require("../../models/File.js");

const newFile = async (file, name) => {
  const newFile = new File({
    name: name,
    path: file.path,
    size: file.size,
    type: file.type,
  });
  await newFile.save();
  return newFile;
};

const getAllFiles = async () => {
  return await File.find();
};

module.exports = {
  newFile,
  getAllFiles,
};
