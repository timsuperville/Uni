const multer = require('multer');
const path = require('path');

// Define storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '../fileDrive'); // Absolute path to upload directory
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const originalName = file.originalname.replace(/\s+/g, '_'); // Replace spaces in filenames
        cb(null, `${uniqueSuffix}-${originalName}`);
    }
});

// Create the Multer upload instance
const upload = multer({ storage });

module.exports = upload;
