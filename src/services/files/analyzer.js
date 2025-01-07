const fs = require('fs');
const path = require('path');

// Function to get file size in bytes
function getFileSize(filePath) {
   const stats = fs.statSync(filePath);
   return stats.size;
}

// Function to get file extension
function getFileExtension(filePath) {
   return path.extname(filePath);
}

// Function to read file content
function readFileContent(filePath) {
   return fs.readFileSync(filePath, 'utf8');
}

// Function to count lines in a file
function countFileLines(filePath) {
   const content = readFileContent(filePath);
   return content.split('\n').length;
}

// Function to count words in a file
function countFileWords(filePath) {
   const content = readFileContent(filePath);
   return content.split(/\s+/).filter(word => word.length > 0).length;
}

module.exports = {
   getFileSize,
   getFileExtension,
   readFileContent,
   countFileLines,
   countFileWords
};