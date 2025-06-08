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

// Get current user's challenge progress
router.get('/challenges/progress', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user).select('joinedChallenges completedChallenges');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({
      joinedChallenges: user.joinedChallenges || [],
      completedChallenges: user.completedChallenges || []
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Claim a challenge for the current user
router.post('/challenges/claim', authMiddleware, async (req, res) => {
  try {
    const { challengeId } = req.body;
    if (typeof challengeId !== 'number') {
      return res.status(400).json({ message: 'Invalid challengeId' });
    }
    const user = await User.findById(req.user);
    if (!user) return res.status(404).json({ message: 'User not found' });
    if (user.completedChallenges.includes(challengeId)) {
      return res.status(400).json({ message: 'Challenge already claimed' });
    }
    user.completedChallenges.push(challengeId);
    // Optionally: award XP here
    await user.save();
    res.json({ message: 'Challenge claimed', completedChallenges: user.completedChallenges });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;