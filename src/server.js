const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AuthRoutes = require('./backend/routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const mongoURI = 'your_mongo_connection_string_here';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => console.log('MongoDB connection error:', err));

app.use('/api/auth', AuthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
