const Country = require('../../models/Country');

const DataRepository = {
   getCountries: async () => {
      try {
         const countries = await Country.find();
         return countries;
      } catch (error) {
         throw new Error(error);
      }
   },
   saveCountry: async (country) => {
      try {
         const newCountry = new Country(country);
         await newCountry.save();
         return newCountry;
      } catch (error) {
         throw new Error(error);
      }
   },
   saveManyCountries: async (countries) => {
      try {
         const newCountries = await Country.insertMany(countries);
         return newCountries;
      } catch (error) {
         throw new Error(error);
      }
   },
   updateCountry: async (country) => {
      try {
         const updatedCountry = await Country.findByIdAndUpdate(country);
         return updatedCountry;
      } catch (error) {
         throw new Error(error);
      }
   }
}

module.exports = DataRepository;