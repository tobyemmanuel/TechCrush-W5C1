import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Set up multer for file upload
const upload = multer({
  dest: 'uploads/', // Store files in the 'uploads' directory
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB file size limit
});

// Single file upload route
router.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.send(`File uploaded: ${req.file.filename}`);
});

export default router;
