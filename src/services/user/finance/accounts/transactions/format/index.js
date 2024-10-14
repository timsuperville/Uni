const formatRepository = require("../../../../../../repositories/user/finance/accounts/transactions/format/index.js");

const getAllFormats = async () => {
  return await formatRepository.getAllFormats();
};
const createFormat = async (format) => {
  return await formatRepository.createFormat(format);
};
module.exports = {
  getAllFormats,
   createFormat,
};
