const axios = require('axios');

const auth = (consumerToken, consumerSecret, accessToken, accessSecret) => {
   return new Promise(async (resolve, reject) => {
      try {
         const response = await axios.post('https://accountsapi.logos.com/v2/users/me', {}, {
            headers: {
               Authorization: `OAuth \
               oauth_consumer_key=\"${consumerToken}\",\
               oauth_signature=\"${consumerSecret}&${accessSecret}\",\
               oauth_signature_method=\"PLAINTEXT\",\
               oauth_version=\"1.0\",\
               oauth_token=\"${accessToken}\"`
            }
         });
         resolve(response.data);
      } catch (error) {
         reject(error);
      }
   });
}

module.exports = auth;