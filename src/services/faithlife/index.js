const axios = require('axios');
const config = require('../../../config');
const auth = require('./authenticate');

const faithlife = {
   authenticate : async () => {
      try {
         const response = await auth(config.faithlifeConsumerToken, config.faithlifeConsumerSecret, config.faithlifeAccessToken, config.faithlifeAccessSecret);
         console.log("Success: ", response);
         return response;
      } catch (error) {
         console.log("Error: ", error);
         return error;
      }
   },
};

module.exports = faithlife;