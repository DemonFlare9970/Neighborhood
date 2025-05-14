const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); // Importing routes
const userRoutes = require('./routes/userRoutes'); // Importing user routes
const protect = require('./middleware/auth'); // Importing auth middleware

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // To parse JSON requests
app.use('/api/auth', authRoutes); // Routes for authentication
app.use('/api/user', protect, userRoutes); // Protected user route

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/coinflow', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
