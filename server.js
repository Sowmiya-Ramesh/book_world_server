const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
const cors = require('cors');

// Enable CORS for all routes
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable set cookie
};

app.use(cors(corsOptions));
// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/books', require('./api/Book')); // Use the exported router
app.use('/api/members', require('./api/Member'));
app.use('/api/issuance', require('./api/Issuance'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
