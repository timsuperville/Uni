const dataService = require('../../services/data/index.js');

const getCountries = (req, res) => {
   try {
      const countries = dataService.getCountries();
      res.status(200).json(countries);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
}

const getWeather = (req, res) => {
   res.send('GET /weather');
}

module.exports = {
   getCountries,
   getWeather
};