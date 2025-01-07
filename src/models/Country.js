const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CountrySchema = new Schema({
   name: {
      common: String,
      official: String,
      nativeName: {
         eng: {
            official: String,
            common: String
         }
      }
   },
   tld: [String],
   cca2: String,
   ccn3: String,
   cca3: String,
   independent: Boolean,
   status: String,
   unMember: Boolean,
   currencies: {
      type: Schema.Types.ObjectId,
      ref: 'Currency'
   },
   idd: {
      root: String,
      suffixes: [String]
   },
   capital: [String],
   altSpellings: [String],
   region: String,
   languages: {
      eng: String
   },
   translations: {
      ara: {
         official: String,
         common: String
      },
      bre: {
         official: String,
         common: String
      },
      ces: {
         official: String,
         common: String
      },
      cym: {
         official: String,
         common: String
      },
      deu: {
         official: String,
         common: String
      },
      est: {
         official: String,
         common: String
      },
      fin: {
         official: String,
         common: String
      },
      fra: {
         official: String,
         common: String
      },
      hrv: {
         official: String,
         common: String
      },
      hun: {
         official: String,
         common: String
      },
      ita: {
         official: String,
         common: String
      },
      jpn: {
         official: String,
         common: String
      },
      kor: {
         official: String,
         common: String
      },
      nld: {
         official: String,
         common: String
      },
      per: {
         official: String,
         common: String
      },
      pol: {
         official: String,
         common: String
      },
      por: {
         official: String,
         common: String
      },
      rus: {
         official: String,
         common: String
      },
      slk: {
         official: String,
         common: String
      },
      spa: {
         official: String,
         common: String
      },
      srp: {
         official: String,
         common: String
      },
      swe: {
         official: String,
         common: String
      },
      tur: {
         official: String,
         common: String
      },
      urd: {
         official: String,
         common: String
      },
      zho: {
         official: String,
         common: String
      }
   },
   latlng: [Number],
   landlocked: Boolean,
   area: Number,
   demonyms: {
      eng: {
         f: String,
         m: String
      }
   },
   flag: String,
   maps: {
      googleMaps: String,
      openStreetMaps: String
   },
   population: Number,
   car: {
      signs: [String],
      side: String
   },
   timezones: [String],
   continents: [String],
   flags: {
      png: String,
      svg: String
   },
   coatOfArms: Object,
   startOfWeek: String,
   capitalInfo: {
      latlng: [Number]
   }
});

module.exports = mongoose.model('Country', CountrySchema);