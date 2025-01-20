const dataRepository = require('../../repositories/data/index.js');

const getCountries = async () => {
   try {
      const response = await fetch('https://restcountries.com/v3.1/all', {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json'
         }
      });
      const countries = await response.json();
      return countries;
   } catch (error) {
      throw new Error(error);
   }
}

const getWeather = (req, res) => {
   res.send('GET /weather');
}

module.exports = {
   getCountries,
   getWeather
};
