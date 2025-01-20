const axios = require('axios');
const openai = require('../../external_services/OpenAi');

const gpt = {
   generateText: async (prompt) => {},
   readFile: async (directory, filename) => {},
   createFile: async (directory, filename, content) => {},
   updateFile: async (directory, filename, content) => {},
};

module.exports = gpt;