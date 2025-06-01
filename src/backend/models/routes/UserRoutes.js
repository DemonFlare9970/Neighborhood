const express = require('express');
const router = express.Router();
const User = require('../user'); // adjust path if needed
const authMiddleware = require('../../../middleware/auth'); // optional for protected routes

// Example protected profile route
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // exclude password
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
