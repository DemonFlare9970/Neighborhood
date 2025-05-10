const express = require('express');
const router = express.Router();

// This should be a database in production
const users = {};

router.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (users[email]) return res.status(400).json({ msg: 'User already exists' });

  users[email] = { password }; // hash in real life
  res.json({ msg: 'Registered successfully' });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!users[email] || users[email].password !== password) {
    return res.status(401).json({ msg: 'Invalid credentials' });
  }

  res.json({ msg: 'Login successful' });
});

module.exports = router;
