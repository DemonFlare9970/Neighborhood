// src/components/BadgesAndRewards.js
import React, { useState } from 'react';
import './BadgesAndRewards.css';

const badges = [
  { icon: '🥇', label: 'Starter Saver', description: 'Awarded for saving your first $100!' },
  { icon: '🎯', label: 'Goal Crusher', description: 'Achieved a savings goal!' },
  { icon: '🔥', label: 'Streak Master', description: 'Saved money 7 days in a row.' },
  { icon: '🏆', label: 'Challenge Champ', description: 'Completed a community challenge.' },
  { icon: '💡', label: 'Smart Spender', description: 'Kept spending under budget for a month.' },
  { icon: '📚', label: 'Quiz Whiz', description: 'Scored 10/10 on a financial quiz.' },
  { icon: '🧠', label: 'Knowledge Seeker', description: 'Read 10 financial tips.' },
  { icon: '💰', label: 'Big Saver', description: 'Saved over $1,000!' },
  { icon: '🤝', label: 'Team Player', description: 'Joined a group challenge.' },
  { icon: '🕒', label: 'On Time', description: 'Logged transactions every day for a week.' }
];

const rewards = [
  { icon: '🎉', title: 'Confetti Celebration', description: 'Enjoy a confetti animation when you hit a big goal!' },
  { icon: '🔓', title: 'Unlock New Themes', description: 'Earn new color themes for your dashboard.' },
  { icon: '👑', title: 'Leaderboard Access', description: 'See how you rank among friends.' },
  { icon: '🎁', title: 'Mystery Box', description: 'Open a digital mystery box for a surprise badge.' }
];

// --- Advanced: Simulate dynamic badge progress, streaks, and reward claiming ---

// Simulate user state
const initialUser = {
  name: 'Alex Johnson',
  level: 3,
  xp: 1720,
  xpToNext: 2000,
  streak: 9,
  badges: ['Starter Saver', 'Goal Crusher', 'Quiz Whiz', 'Streak Master', 'Team Player'],
  claimedRewards: ['Confetti Celebration'],
  badgeHistory: [
    { icon: '🥇', label: 'Starter Saver', date: '2025-05-01', desc: 'Saved your first $100!' },
    { icon: '🎯', label: 'Goal Crusher', date: '2025-05-10', desc: 'Completed your first savings goal.' },
    { icon: '📚', label: 'Quiz Whiz', date: '2025-05-15', desc: 'Scored 10/10 on a quiz.' },
    { icon: '🔥', label: 'Streak Master', date: '2025-05-20', desc: 'Saved 7 days in a row.' },
    { icon: '🤝', label: 'Team Player', date: '2025-05-25', desc: 'Joined a group challenge.' },
  ],
};

const BadgesAndRewards = () => {
  const [user, setUser] = useState(initialUser);
  const [showHistory, setShowHistory] = useState(false);
  const [showClaimed, setShowClaimed] = useState(false);
  const [claimMsg, setClaimMsg] = useState('');

  // Progress to next badge
  const badgeProgress = Math.min(user.xp / user.xpToNext, 1);
  const nextBadge = badges.find(b => !user.badges.includes(b.label)) || badges[badges.length-1];

  // Claim reward logic
  function claimReward(title) {
    if (user.claimedRewards.includes(title)) {
      setClaimMsg('Reward already claimed!');
      setTimeout(() => setClaimMsg(''), 1200);
      return;
    }
    setUser(u => ({ ...u, claimedRewards: [...u.claimedRewards, title] }));
    setClaimMsg('Reward claimed!');
    setTimeout(() => setClaimMsg(''), 1200);
  }

  return (
    <div className="badges-rewards-container">
      <h2 className="badges-title">Your Badges</h2>
      <div className="badges-list">
        {badges.map((badge, idx) => {
          const earned = user.badges.includes(badge.label);
          return (
            <div className={earned ? 'badge-item' : 'badge-item badge-locked'} key={idx}>
              <span className="badge-icon" role="img" aria-label={badge.label}>{badge.icon}</span>
              <div className="badge-info">
                <span className="badge-label">{badge.label}</span>
                <span className="badge-desc">{badge.description}</span>
                {!earned && <span className="badge-locked-label">Locked</span>}
              </div>
              {earned && badge.label === 'Streak Master' && (
                <span className="badge-streak">🔥 {user.streak} day streak!</span>
              )}
            </div>
          );
        })}
      </div>
      {/* Progress bar to next badge and XP */}
      <div className="badge-progress">
        <div className="badge-progress-bar" style={{ width: `${Math.round(badgeProgress*100)}%` }}></div>
        <span className="badge-progress-label">
          {user.xp} / {user.xpToNext} XP &mdash; {Math.round(badgeProgress*100)}% to next badge: {nextBadge.label}
        </span>
      </div>
      <div className="badge-stats-row">
        <span className="badge-level">Level {user.level}</span>
        <span className="badge-streak-main">Current Streak: <strong>{user.streak} days</strong></span>
        <button className="badge-history-toggle" onClick={() => setShowHistory(h => !h)}>
          {showHistory ? 'Hide Badge History' : 'Show Badge History'}
        </button>
      </div>
      {showHistory && (
        <div className="badge-history">
          <div className="badge-history-title">Badge Earning History</div>
          <ul className="badge-history-list">
            {user.badgeHistory.map((item, idx) => (
              <li className="badge-history-item" key={idx}>
                <span className="badge-history-icon">{item.icon}</span>
                <span><strong>{item.label}</strong> — {item.desc} <span style={{color:'#888'}}>({item.date})</span></span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <h2 className="rewards-title">Available Rewards</h2>
      <div className="rewards-list">
        {rewards.map((reward, idx) => {
          const claimed = user.claimedRewards.includes(reward.title);
          return (
            <div className={claimed ? 'reward-item reward-claimed' : 'reward-item'} key={idx}>
              <span className="reward-icon" role="img" aria-label={reward.title}>{reward.icon}</span>
              <div className="reward-info">
                <span className="reward-title">{reward.title}</span>
                <span className="reward-desc">{reward.description}</span>
                {claimed ? (
                  <span className="reward-claimed-label">Claimed</span>
                ) : (
                  <button className="reward-claim-btn" onClick={() => claimReward(reward.title)}>Claim</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <button className="show-claimed-btn" onClick={() => setShowClaimed(s => !s)}>
        {showClaimed ? 'Hide Claimed Rewards' : 'Show Claimed Rewards'}
      </button>
      {showClaimed && (
        <div className="claimed-rewards-list">
          <h3>Claimed Rewards</h3>
          <ul>
            {user.claimedRewards.map((title, idx) => (
              <li key={idx}>{title}</li>
            ))}
          </ul>
        </div>
      )}
      {claimMsg && <div className="reward-claim-msg">{claimMsg}</div>}
    </div>
  );
};

export default BadgesAndRewards;
