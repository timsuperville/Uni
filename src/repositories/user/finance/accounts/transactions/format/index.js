const TransactionFormat = require("../../../../../../models/user/finance/accounts/transactions/format/TransactionFormat");

const getAllFormats = async () => {
  return await TransactionFormat.find();
};
const createFormat = async (format) => {
  return await TransactionFormat.create(format);
};

module.exports = {
  getAllFormats,
  createFormat,
};
