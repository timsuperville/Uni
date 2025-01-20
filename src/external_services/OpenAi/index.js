const openai = require('openai');

const OpenAI = {
   gpt: async (prompt) => {
      try {
         const gpt = new openai.OpenAI(process.env.OPENAI_API_KEY);
         const response = await gpt.chat.create({
            model: 'gpt-3.5-turbo',
            messages: [
               {
                  role: 'system',
                  content: 'You are a helpful assistant.'
               },
               {
                  role: 'user',
                  content: prompt
               }
            ]
         });
         const generatedText = response.data.choices[0].message.content;
         return generatedText;
      } catch (error) {
         return 'Error generating text: ' + error.message;
      }
   },
   readFile: async (directory, filename) => {
      const fileContent = await openai.readFile(directory, filename);
      return fileContent;
   },
   createFile: async (directory, filename, content) => {
      await openai.createFile(directory, filename, content);
      return 'File created successfully';
   },
   updateFile: async (directory, filename, content) => {
      await openai.updateFile(directory, filename, content);
      return 'File updated successfully';
   },
};

module.exports = OpenAI;