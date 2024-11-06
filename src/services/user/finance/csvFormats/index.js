const formatRepository = require("../../../../repositories/user/finance/csvFormats/index.js");

const getAllFormats = async () => {
  return await formatRepository.getAllFormats();
};
const createFormat = async (format) => {
  const existingFormat = await formatRepository.getFormatByName(format.name);
  if (existingFormat) {
    if (format.confirmation === "yes") {
      return await formatRepository.createFormat(format);
    }
    else {
      throw new Error("Confirmation required to create format");
    }
  }
  else {
    return await formatRepository.createFormat(format);
  }
};
module.exports = {
  getAllFormats,
   createFormat,
};
