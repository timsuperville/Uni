const formatService = require('../../../../../../services/user/finance/accounts/transactions/format/index.js');

const getAllFormats = async (req, res) => {
  try {
    const formats = await formatService.getAllFormats();

    res.status(200).json(formats);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createFormat = async (req, res) => {
   try {
      const format = await formatService.createFormat(req.body);
   
      res.status(201).json(format);
   }
   catch (error) {
      res.status(500).json({ error: error.message });
   }
   };

module.exports = {
   getAllFormats,
   createFormat,
};