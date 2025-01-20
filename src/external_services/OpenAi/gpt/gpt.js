const fs = require('fs');
const path = require('path');
const axios = require('axios');
const config = require('../../config');

const Gpt = {
   gpt: async (req, res) => {
      try {
         const prompt = req.body.prompt;
         const endpoint = 'https://api.openai.com/v1/chat/completions';
         const apiKey = config.openaiApiKey;
         const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
         };
         const data = {
            "model": "gpt-3.5-turbo",
            "messages": [
               {
                  "role": "system",
                  "content": "You are a helpful assistant."
               },
               {
                  "role": "user",
                  "content": prompt
               }
            ]
         };
         const response = await axios.post(endpoint, data, { headers });
         const generatedText = response.data.choices[0].message.content;
         return generatedText;
      } catch (error) {
         return 'Error generating text: ' + error.message;
      }
   },
   readFile: async (req, res) => {
      const directory = req.query.directory;
      const filename = req.query.filename;
      const filePath = path.join(directory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      return fileContent;
   },
   createFile: async (req, res) => {
      const directory = req.body.directory;
      const filename = req.body.filename;
      const content = req.body.content;
      const filePath = path.join(directory, filename);
      fs.writeFileSync(filePath, content);
      return 'File created successfully';
   },
   updateFile: async (req, res) => {
      const directory = req.body.directory;
      const filename = req.body.filename;
      const content = req.body.content;
      const filePath = path.join(directory, filename);
      fs.writeFileSync
      (filePath, content);
      return 'File updated successfully';
   },
};

module.exports = Gpt;