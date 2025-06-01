require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const path = require('path');
const { OAuth2Client } = require('google-auth-library');

const AuthRoutes = require('./backend/routes/authRoutes');
const UserRoutes = require('./backend/models/routes/UserRoutes');
// Example: const TransactionRoutes = require('./backend/models/routes/TransactionRoutes');
// Example: const BudgetRoutes = require('./backend/models/routes/BudgetRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const allowedOrigins = [
  'http://localhost:3000',
  process.env.CLIENT_URL
];
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use(helmet());
app.use(morgan('dev'));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const mongoURI = process.env.MONGO_URI || process.env.MONGODB_URI || 'your_mongo_connection_string_here';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Atlas connected'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

app.use('/api/auth', AuthRoutes);
app.use('/api/user', UserRoutes);
// Example: app.use('/api/transactions', TransactionRoutes);
// Example: app.use('/api/budgets', BudgetRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Server error' });
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
  });
});

app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// const rateLimit = require('express-rate-limit');
// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 100,
// });
// app.use(limiter);

function requestLogger(req, res, next) {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
}
app.use(requestLogger);

app.get('/api/dummy/transactions', (req, res) => {
  res.json([
    { id: 1, type: 'income', amount: 100, description: 'Allowance', date: '2025-05-01' },
    { id: 2, type: 'expense', amount: 25, description: 'Snacks', date: '2025-05-02' },
    { id: 3, type: 'income', amount: 50, description: 'Gift', date: '2025-05-03' },
  ]);
});

app.get('/api/dummy/budgets', (req, res) => {
  res.json([
    { id: 1, category: 'Food', limit: 100 },
    { id: 2, category: 'Fun', limit: 50 },
    { id: 3, category: 'Savings', limit: 200 },
  ]);
});

app.get('/api/user/profile', (req, res) => {
  res.json({
    id: '123',
    username: 'testuser',
    email: 'test@example.com',
    joined: '2025-01-01',
    settings: { darkMode: true, notifications: true }
  });
});

app.post('/api/auth/google', async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    // TODO: Find or create user in your DB using payload.email, payload.name, etc.
    // For demo, just return a fake JWT
    const jwt = require('jsonwebtoken');
    const user = { id: payload.sub, email: payload.email, name: payload.name };
    const appToken = jwt.sign(user, process.env.JWT_SECRET || 'devsecret', { expiresIn: '7d' });
    res.json({ token: appToken });
  } catch (err) {
    res.status(401).json({ message: 'Google authentication failed' });
  }
});

app.use('/api/*', (req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

app.listen(PORT, () => {
  console.log(`CoinFlow server running on port ${PORT}`);
});





