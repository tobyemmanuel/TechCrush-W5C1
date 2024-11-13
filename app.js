import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import headerRoutes from './routes/headerRoutes.js';
import formRoutes from './routes/formRoutes.js';
import fileRoutes from './routes/fileRoutes.js';
import jsonRoutes from './routes/jsonRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { checkAuth } from './middleware/authMiddleware.js';

const app = express();
const port = 3000;

// __dirname workaround for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(express.static('uploads')); // Serve static files (uploaded files)

// Routes
app.use('/headers', headerRoutes);
app.use('/form', formRoutes);
app.use('/json', jsonRoutes);
app.use('/file', fileRoutes);
app.use('/auth', authRoutes);

// Protected Route Example
app.get('/protected', checkAuth, (req, res) => {
  res.send('You have access to this protected route!');
});

app.listen(port, () => {
  console.log('Server running at http://localhost:3000');
});