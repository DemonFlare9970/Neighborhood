// src/components/BadgesAndRewards.js
import React, { useState } from 'react';
import './BadgesAndRewards.css';

const badges = [
  { icon: '🥇', label: 'Starter Saver', description: 'Awarded for saving your first $100!', challenge: 'Save $100 total.' },
  { icon: '🎯', label: 'Goal Crusher', description: 'Achieved a savings goal!', challenge: 'Complete any savings goal.' },
  { icon: '🔥', label: 'Streak Master', description: 'Saved money 7 days in a row.', challenge: 'Save money 7 days in a row.' },
  { icon: '🏆', label: 'Challenge Champ', description: 'Completed a community challenge.', challenge: 'Join and complete a community challenge.' },
  { icon: '💡', label: 'Smart Spender', description: 'Kept spending under budget for a month.', challenge: 'Stay under budget for 30 days.' },
  { icon: '📚', label: 'Quiz Whiz', description: 'Scored 10/10 on a financial quiz.', challenge: 'Score 10/10 on any quiz.' },
  { icon: '🧠', label: 'Knowledge Seeker', description: 'Read 10 financial tips.', challenge: 'Read 10 unique financial tips.' },
  { icon: '💰', label: 'Big Saver', description: 'Saved over $1,000!', challenge: 'Save $1,000 total.' },
  { icon: '🤝', label: 'Team Player', description: 'Joined a group challenge.', challenge: 'Join a group challenge.' },
  { icon: '🕒', label: 'On Time', description: 'Logged transactions every day for a week.', challenge: 'Log transactions 7 days in a row.' },
  { icon: '🌱', label: 'Green Investor', description: 'Invested in a green fund.', challenge: 'Make your first green investment.' },
  { icon: '🛒', label: 'Smart Shopper', description: 'Used coupons 5 times.', challenge: 'Use 5 different coupons.' },
  { icon: '📈', label: 'Growth Guru', description: 'Increased net worth for 3 months.', challenge: 'Increase net worth 3 months in a row.' },
  { icon: '🧾', label: 'Receipt Keeper', description: 'Uploaded 10 receipts.', challenge: 'Upload 10 receipts.' },
  { icon: '🎓', label: 'Education Ace', description: 'Completed all education modules.', challenge: 'Finish all education modules.' },
  { icon: '💳', label: 'Credit Builder', description: 'Paid credit card on time 6 months.', challenge: 'Pay credit card on time for 6 months.' },
  { icon: '🏅', label: 'Super Streak', description: 'Saved money 30 days in a row.', challenge: 'Save money 30 days in a row.' },
  { icon: '🧩', label: 'Puzzle Solver', description: 'Solved 5 financial puzzles.', challenge: 'Solve 5 financial puzzles.' },
  { icon: '🦸', label: 'Financial Hero', description: 'Helped a friend with budgeting.', challenge: 'Invite a friend and help them set a budget.' },
  { icon: '🌟', label: 'Legendary Saver', description: 'Earned all other badges.', challenge: 'Collect all other badges.' },
  { icon: '🦉', label: 'Night Owl', description: 'Logged a transaction after midnight.', challenge: 'Log a transaction after 12am.' },
  { icon: '🌞', label: 'Early Bird', description: 'Logged a transaction before 7am.', challenge: 'Log a transaction before 7am.' },
  { icon: '🧑‍💻', label: 'App Explorer', description: 'Visited every page in the app.', challenge: 'Visit every main page in CoinFlow.' },
  { icon: '🧺', label: 'Grocery Guru', description: 'Tracked 10 grocery expenses.', challenge: 'Add 10 grocery transactions.' },
  { icon: '🚲', label: 'Eco Commuter', description: 'Logged 5 eco-friendly commutes.', challenge: 'Log 5 bike or public transit trips.' },
  { icon: '🎮', label: 'Game On', description: 'Played a financial mini-game.', challenge: 'Play any financial mini-game.' },
  { icon: '🧃', label: 'Snack Saver', description: 'Skipped snacks for a week.', challenge: 'No snack expenses for 7 days.' },
  { icon: '🧹', label: 'Spring Cleaner', description: 'Reviewed and deleted old transactions.', challenge: 'Delete 5+ old transactions.' },
  { icon: '🧑‍🏫', label: 'Mentor', description: 'Helped another user learn budgeting.', challenge: 'Send a tip to another user.' },
  { icon: '🧑‍🎨', label: 'Customizer', description: 'Changed your dashboard theme.', challenge: 'Change your dashboard theme.' },
  { icon: '🧑‍🚀', label: 'Launch Day', description: 'Used CoinFlow on launch day.', challenge: 'Log in on launch day.' },
  { icon: '🧑‍🔬', label: 'Beta Tester', description: 'Reported a bug or suggestion.', challenge: 'Submit feedback or a bug report.' },
  { icon: '🧑‍🍳', label: 'Meal Planner', description: 'Planned 7 meals in the app.', challenge: 'Use the meal planner for a week.' },
  { icon: '🧑‍🎤', label: 'Quiz Star', description: 'Scored 100% on 5 quizzes.', challenge: 'Score 100% on 5 quizzes.' },
  { icon: '🧑‍🌾', label: 'Gardener', description: 'Logged a garden expense.', challenge: 'Add a garden-related transaction.' },
  { icon: '🧑‍🚒', label: 'Emergency Ready', description: 'Set up an emergency fund.', challenge: 'Create an emergency savings goal.' },
  { icon: '🧑‍⚕️', label: 'Health Saver', description: 'Tracked 5 health expenses.', challenge: 'Add 5 health-related transactions.' },
  { icon: '🧑‍🎓', label: 'Scholar', description: 'Completed 10 education quizzes.', challenge: 'Complete 10 quizzes.' },
  { icon: '🧑‍🔧', label: 'Fixer', description: 'Fixed a budget overspend.', challenge: 'Adjust a budget after overspending.' },
  { icon: '🧑‍✈️', label: 'Traveler', description: 'Logged expenses in 3 currencies.', challenge: 'Add transactions in 3 different currencies.' },
  { icon: '🧑‍🎨', label: 'Art Collector', description: 'Logged an art purchase.', challenge: 'Add an art-related transaction.' },
  { icon: '🧑‍🚀', label: 'Space Saver', description: 'Saved money every week for 6 months.', challenge: 'Save weekly for 6 months.' },
  { icon: '🧑‍🔬', label: 'Science Buff', description: 'Read 20 financial tips.', challenge: 'Read 20 unique financial tips.' },
  { icon: '🧑‍🎤', label: 'Performer', description: 'Shared a financial tip publicly.', challenge: 'Share a tip to the community.' },
  { icon: '🧑‍🌾', label: 'Eco Saver', description: 'Logged 10 eco-friendly purchases.', challenge: 'Add 10 eco-friendly transactions.' },
  { icon: '🧑‍🍳', label: 'Chef', description: 'Logged 10 meal expenses.', challenge: 'Add 10 meal-related transactions.' },
  { icon: '🧑‍🏫', label: 'Teacher', description: 'Created a budgeting tutorial.', challenge: 'Create a tutorial in the app.' },
  { icon: '🧑‍💼', label: 'Professional', description: 'Logged 20 work expenses.', challenge: 'Add 20 work-related transactions.' },
  { icon: '🧑‍🎓', label: 'Valedictorian', description: 'Completed all quizzes and modules.', challenge: 'Complete all quizzes and modules.' },
  { icon: '🧑‍🚒', label: 'Safety First', description: 'Set up insurance tracking.', challenge: 'Add an insurance policy.' },
  { icon: '🧑‍⚕️', label: 'Wellness Warrior', description: 'Logged 10 health expenses.', challenge: 'Add 10 health-related transactions.' },
  { icon: '🧑‍✈️', label: 'Jet Setter', description: 'Logged expenses in 5 countries.', challenge: 'Add transactions in 5 different countries.' },
  { icon: '🧑‍🔧', label: 'Handyman', description: 'Logged 5 home repairs.', challenge: 'Add 5 home repair transactions.' },
  { icon: '🧑‍🎨', label: 'Designer', description: 'Customized your profile.', challenge: 'Edit your profile details.' },
  { icon: '🧑‍🚀', label: 'Explorer', description: 'Discovered a hidden feature.', challenge: 'Find and use a hidden feature.' },
  { icon: '🧑‍🔬', label: 'Experimenter', description: 'Tried every app feature.', challenge: 'Use every feature in CoinFlow.' },
];

const rewards = [
  { icon: '🎉', title: 'Confetti Celebration', description: 'Enjoy a confetti animation when you hit a big goal!', challenge: 'Hit any major savings goal.' },
  { icon: '🔓', title: 'Unlock New Themes', description: 'Earn new color themes for your dashboard.', challenge: 'Earn 5 badges.' },
  { icon: '👑', title: 'Leaderboard Access', description: 'See how you rank among friends.', challenge: 'Join a leaderboard challenge.' },
  { icon: '🎁', title: 'Mystery Box', description: 'Open a digital mystery box for a surprise badge.', challenge: 'Complete 3 challenges in a month.' },
  { icon: '🎨', title: 'Custom Avatar', description: 'Unlock custom profile avatars.', challenge: 'Earn the "Smart Spender" badge.' },
  { icon: '🚀', title: 'Boosted XP', description: 'Get double XP for a week.', challenge: 'Log in 7 days in a row.' },
  { icon: '🛍️', title: 'Shop Discount', description: 'Get a discount code for partner shops.', challenge: 'Refer a friend.' },
  { icon: '🎬', title: 'Animated Dashboard', description: 'Unlock animated dashboard backgrounds.', challenge: 'Earn the "Legendary Saver" badge.' },
  { icon: '📅', title: 'Event Pass', description: 'Access to exclusive financial webinars.', challenge: 'Attend a live event.' },
  { icon: '💎', title: 'Diamond Badge', description: 'A rare badge for top savers.', challenge: 'Save $5,000 total.' },
  { icon: '🎟️', title: 'VIP Pass', description: 'Access to VIP-only features.', challenge: 'Earn 20 badges.' },
  { icon: '🎨', title: 'Theme Creator', description: 'Create your own dashboard theme.', challenge: 'Unlock 5 themes.' },
  { icon: '🎤', title: 'Podcast Guest', description: 'Be featured on the CoinFlow podcast.', challenge: 'Submit a financial story.' },
  { icon: '🎲', title: 'Game Night', description: 'Join a live game night event.', challenge: 'Participate in a live event.' },
  { icon: '🎫', title: 'Raffle Entry', description: 'Enter a monthly raffle for prizes.', challenge: 'Complete 10 challenges.' },
  { icon: '🎯', title: 'Challenge Master', description: 'Unlock all challenge badges.', challenge: 'Earn all challenge-related badges.' },
  { icon: '🎬', title: 'Movie Night', description: 'Get a movie night code.', challenge: 'Refer 3 friends.' },
  { icon: '🎮', title: 'Game Unlock', description: 'Unlock a new mini-game.', challenge: 'Play 10 mini-games.' },
  { icon: '🎓', title: 'Scholarship Entry', description: 'Enter a scholarship drawing.', challenge: 'Complete all education modules.' },
  { icon: '🎉', title: 'Anniversary Gift', description: 'Special reward for 1 year of CoinFlow.', challenge: 'Use CoinFlow for 1 year.' },
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
                <span className="badge-challenge">Challenge: {badge.challenge}</span>
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
                <span className="reward-challenge">Challenge: {reward.challenge}</span>
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



