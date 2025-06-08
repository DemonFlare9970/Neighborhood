const express = require('express');
const router = express.Router();
const User = require('../models/user'); // corrected path to user model
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {
  console.log('Register endpoint hit:', req.body); // Debug log
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      console.log('Missing fields:', { username, email, password });
      return res.status(400).json({ message: 'All fields required.' });
    }
    const existing = await User.findOne({ $or: [{ email }, { username }] });
    if (existing) {
      console.log('User already exists:', existing);
      return res.status(400).json({ message: 'User already exists.' });
    }
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (err) {
    console.error('Register error:', err); // Debug log
    res.status(500).json({ message: 'Server error.' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'All fields required.' });
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials.' });
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials.' });
    // Use JWT_SECRET from .env
    const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (err) {
    console.error('Login error:', err); // Debug log
    res.status(500).json({ message: 'Server error.' });
  }
});

module.exports = router;