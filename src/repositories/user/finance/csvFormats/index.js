const CsvFormat = require("../../../../models/user/finance/csvFormats/CsvFormat.js");

const getAllFormats = async () => {
  return await CsvFormat.find();
};
const getFormatByName = async (name) => {
  return await CsvFormat.findOne({ name });
}
const createFormat = async (format) => {
  return await CsvFormat.create(format);
};

module.exports = {
  getAllFormats,
  getFormatByName,
  createFormat,
};
