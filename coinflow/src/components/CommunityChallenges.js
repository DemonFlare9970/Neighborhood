import React, { useState, useEffect } from 'react';
import './CommunityChallenges.css';

// --- Large pool of challenges ---
const allChallenges = [
  {
    id: 1,
    title: 'Log 5 Transactions',
    description: 'Add at least 5 transactions (income or expense) in CoinFlow this week.',
    xpBase: 100,
    xpBonus: 50,
    participants: 23,
    leaderboard: [
      { name: 'Alex', progress: 100 },
      { name: 'Sam', progress: 100 },
      { name: 'Jamie', progress: 90 },
    ],
  },
  {
    id: 2,
    title: 'Set a Savings Goal',
    description: 'Create a new savings goal and save towards it in CoinFlow.',
    xpBase: 120,
    xpBonus: 60,
    participants: 17,
    leaderboard: [
      { name: 'Taylor', progress: 100 },
      { name: 'Alex', progress: 95 },
      { name: 'Jordan', progress: 90 },
    ],
  },
  {
    id: 3,
    title: 'Complete a Budget Plan',
    description: 'Use the Budget Planner to create a monthly budget and save it.',
    xpBase: 200,
    xpBonus: 100,
    participants: 31,
    leaderboard: [
      { name: 'Alex', progress: 100 },
      { name: 'Morgan', progress: 100 },
      { name: 'Chris', progress: 80 },
    ],
  },
  {
    id: 4,
    title: 'Take a Financial Quiz',
    description: 'Complete a quiz in the Education section and score at least 80%.',
    xpBase: 90,
    xpBonus: 40,
    participants: 12,
    leaderboard: [
      { name: 'Sam', progress: 100 },
      { name: 'Alex', progress: 90 },
      { name: 'Taylor', progress: 80 },
    ],
  },
  {
    id: 5,
    title: 'Join a Community Challenge',
    description: 'Join any community challenge and update your progress at least once.',
    xpBase: 80,
    xpBonus: 30,
    participants: 19,
    leaderboard: [
      { name: 'Jordan', progress: 100 },
      { name: 'Alex', progress: 100 },
      { name: 'Sam', progress: 90 },
    ],
  },
  {
    id: 6,
    title: 'Track Your Spending for 7 Days',
    description: 'Log at least one transaction every day for a week in CoinFlow.',
    xpBase: 150,
    xpBonus: 70,
    participants: 28,
    leaderboard: [
      { name: 'Morgan', progress: 100 },
      { name: 'Alex', progress: 100 },
      { name: 'Jamie', progress: 95 },
    ],
  },
  {
    id: 7,
    title: 'Stay Under Budget',
    description: 'Keep your total expenses under your set budget for a full month.',
    xpBase: 250,
    xpBonus: 120,
    participants: 15,
    leaderboard: [
      { name: 'Taylor', progress: 100 },
      { name: 'Sam', progress: 90 },
      { name: 'Alex', progress: 85 },
    ],
  },
  {
    id: 8,
    title: 'Invite a Friend',
    description: 'Invite a friend to join CoinFlow and both of you log a transaction.',
    xpBase: 80,
    xpBonus: 40,
    participants: 9,
    leaderboard: [
      { name: 'Jordan', progress: 100 },
      { name: 'Alex', progress: 100 },
      { name: 'Morgan', progress: 80 },
    ],
  },
  {
    id: 9,
    title: 'Complete 3 Savings Goals',
    description: 'Set and complete 3 different savings goals in CoinFlow.',
    xpBase: 300,
    xpBonus: 150,
    participants: 7,
    leaderboard: [
      { name: 'Sam', progress: 100 },
      { name: 'Alex', progress: 90 },
      { name: 'Taylor', progress: 80 },
    ],
  },
  {
    id: 10,
    title: 'Master the Education Section',
    description: 'Finish all quizzes and review all flashcards in the Education section.',
    xpBase: 400,
    xpBonus: 200,
    participants: 4,
    leaderboard: [
      { name: 'Alex', progress: 100 },
      { name: 'Jamie', progress: 90 },
      { name: 'Morgan', progress: 80 },
    ],
  },
  {
    id: 11,
    title: 'Try Every Feature',
    description: 'Visit every main page in CoinFlow and use each feature at least once.',
    xpBase: 350,
    xpBonus: 175,
    participants: 3,
    leaderboard: [
      { name: 'Taylor', progress: 100 },
      { name: 'Alex', progress: 90 },
      { name: 'Sam', progress: 80 },
    ],
  },
  {
    id: 12,
    title: 'Share a Financial Tip',
    description: 'Submit a financial tip or story in the Education section.',
    xpBase: 60,
    xpBonus: 30,
    participants: 6,
    leaderboard: [
      { name: 'Morgan', progress: 100 },
      { name: 'Alex', progress: 100 },
      { name: 'Jamie', progress: 90 },
    ],
  },
  {
    id: 13,
    title: 'Log a Transaction in Every Category',
    description: 'Add at least one transaction in each spending category (food, fun, savings, etc.).',
    xpBase: 180,
    xpBonus: 90,
    participants: 11,
    leaderboard: [
      { name: 'Sam', progress: 100 },
      { name: 'Taylor', progress: 95 },
      { name: 'Alex', progress: 90 },
    ],
  },
  {
    id: 14,
    title: 'Reach a 30-Day Streak',
    description: 'Log at least one transaction every day for 30 days straight.',
    xpBase: 500,
    xpBonus: 300,
    participants: 2,
    leaderboard: [
      { name: 'Alex', progress: 100 },
      { name: 'Morgan', progress: 90 },
      { name: 'Jamie', progress: 80 },
    ],
  },
  {
    id: 15,
    title: 'Customize Your Profile',
    description: 'Change your avatar and update your profile bio in Account Profile.',
    xpBase: 70,
    xpBonus: 35,
    participants: 13,
    leaderboard: [
      { name: 'Taylor', progress: 100 },
      { name: 'Alex', progress: 100 },
      { name: 'Sam', progress: 90 },
    ],
  },
  // Add more for variety
  { id: 16, title: 'No Spend Day', description: 'Go one day this week without spending any money.', xpBase: 60, xpBonus: 30, participants: 18, leaderboard: [ { name: 'Alex', progress: 100 }, { name: 'Sam', progress: 100 }, { name: 'Jamie', progress: 100 } ] },
  { id: 17, title: 'Meal Prep Master', description: 'Plan and log 3 home-cooked meals.', xpBase: 90, xpBonus: 40, participants: 14, leaderboard: [ { name: 'Taylor', progress: 100 }, { name: 'Morgan', progress: 90 }, { name: 'Alex', progress: 80 } ] },
  { id: 18, title: 'Review Your Subscriptions', description: 'List and review all your recurring subscriptions.', xpBase: 70, xpBonus: 30, participants: 11, leaderboard: [ { name: 'Jordan', progress: 100 }, { name: 'Sam', progress: 90 }, { name: 'Alex', progress: 80 } ] },
  { id: 19, title: 'Try a New Category', description: 'Log a transaction in a category you have never used before.', xpBase: 80, xpBonus: 40, participants: 13, leaderboard: [ { name: 'Alex', progress: 100 }, { name: 'Jamie', progress: 90 }, { name: 'Taylor', progress: 80 } ] },
  { id: 20, title: 'Financial Reflection', description: 'Write a short reflection on your spending habits this week.', xpBase: 60, xpBonus: 30, participants: 9, leaderboard: [ { name: 'Morgan', progress: 100 }, { name: 'Alex', progress: 100 }, { name: 'Sam', progress: 90 } ] },
  { id: 21, title: 'Charity Challenge', description: 'Donate to a cause or help someone in need.', xpBase: 100, xpBonus: 50, participants: 7, leaderboard: [ { name: 'Taylor', progress: 100 }, { name: 'Alex', progress: 90 }, { name: 'Jordan', progress: 80 } ] },
  { id: 22, title: 'Track Cash Only', description: 'Log only cash transactions for 3 days.', xpBase: 80, xpBonus: 40, participants: 10, leaderboard: [ { name: 'Sam', progress: 100 }, { name: 'Morgan', progress: 90 }, { name: 'Alex', progress: 80 } ] },
  { id: 23, title: 'Financial Podcast', description: 'Listen to a financial podcast and share a takeaway.', xpBase: 60, xpBonus: 30, participants: 8, leaderboard: [ { name: 'Jamie', progress: 100 }, { name: 'Alex', progress: 90 }, { name: 'Taylor', progress: 80 } ] },
  { id: 24, title: 'Grocery Savings', description: 'Save at least $10 on groceries this week.', xpBase: 90, xpBonus: 40, participants: 12, leaderboard: [ { name: 'Morgan', progress: 100 }, { name: 'Sam', progress: 90 }, { name: 'Alex', progress: 80 } ] },
  { id: 25, title: 'Unsubscribe Sprint', description: 'Unsubscribe from 2+ marketing emails.', xpBase: 50, xpBonus: 20, participants: 15, leaderboard: [ { name: 'Taylor', progress: 100 }, { name: 'Alex', progress: 100 }, { name: 'Jamie', progress: 90 } ] },
  { id: 26, title: 'DIY Project', description: 'Complete a DIY project instead of buying new.', xpBase: 120, xpBonus: 60, participants: 6, leaderboard: [ { name: 'Jordan', progress: 100 }, { name: 'Sam', progress: 90 }, { name: 'Alex', progress: 80 } ] },
  { id: 27, title: 'Read a Finance Book', description: 'Read a chapter of a finance book.', xpBase: 70, xpBonus: 30, participants: 10, leaderboard: [ { name: 'Alex', progress: 100 }, { name: 'Jamie', progress: 90 }, { name: 'Taylor', progress: 80 } ] },
  { id: 28, title: 'Zero-Based Budget', description: 'Try zero-based budgeting for a week.', xpBase: 110, xpBonus: 50, participants: 8, leaderboard: [ { name: 'Morgan', progress: 100 }, { name: 'Alex', progress: 90 }, { name: 'Sam', progress: 80 } ] },
  { id: 29, title: 'No Takeout Week', description: 'Avoid takeout food for 7 days.', xpBase: 100, xpBonus: 50, participants: 9, leaderboard: [ { name: 'Taylor', progress: 100 }, { name: 'Sam', progress: 90 }, { name: 'Alex', progress: 80 } ] },
  { id: 30, title: 'Track a New Goal', description: 'Set and track a new savings or spending goal.', xpBase: 80, xpBonus: 40, participants: 11, leaderboard: [ { name: 'Jordan', progress: 100 }, { name: 'Alex', progress: 100 }, { name: 'Jamie', progress: 90 } ] },
  // ...add more as desired...
];

// Deterministic weekly random selection (same for all users)
function getWeekNumber(date = new Date()) {
  const firstJan = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date - firstJan) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + firstJan.getDay() + 1) / 7);
}
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
function getWeeklyChallenges(all, week, count = 10) {
  // Shuffle deterministically by week
  let arr = [...all];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom(week + i) * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

const CommunityChallenges = () => {
  const [joined, setJoined] = useState([]); // challenge ids
  const [xpEarned, setXpEarned] = useState(0);
  const [completed, setCompleted] = useState(() => {
    // Load completed challenge IDs from localStorage
    try {
      return JSON.parse(localStorage.getItem('completedChallenges') || '[]');
    } catch {
      return [];
    }
  });

  // Simulate current user (replace with real user context in production)
  const currentUser = localStorage.getItem('username') || 'Alex';

  // Get this week's challenges
  const week = getWeekNumber();
  const weeklyChallenges = getWeeklyChallenges(allChallenges, week, 10);

  // Save completed challenges to localStorage
  useEffect(() => {
    localStorage.setItem('completedChallenges', JSON.stringify(completed));
  }, [completed]);

  function joinChallenge(id) {
    if (!joined.includes(id)) setJoined(j => [...j, id]);
  }

  function claimXP(id) {
    if (completed.includes(id)) return; // Already claimed
    const challenge = weeklyChallenges.find(c => c.id === id);
    // Find user's progress from leaderboard
    const entry = challenge.leaderboard.find(e => e.name === currentUser);
    const percent = entry ? entry.progress : 0;
    if (percent < 100) return; // Only allow claim if 100%
    let xp = challenge.xpBase + challenge.xpBonus;
    setXpEarned(x => x + xp);
    setCompleted(c => [...c, id]);
  }

  // Countdown to next week (Sunday midnight)
  const [countdown, setCountdown] = useState('');
  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const nextSunday = new Date(now);
      nextSunday.setDate(now.getDate() + (7 - now.getDay()));
      nextSunday.setHours(0, 0, 0, 0);
      const diff = nextSunday - now;
      if (diff > 0) {
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        setCountdown(`${h}h ${m}m left`);
      } else {
        setCountdown('New challenges soon!');
      }
    }
    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
    return () => clearInterval(timer);
  }, [week]);

  return (
    <div className="community-challenges-container">
      <h2>Community Challenges</h2>
      <div style={{fontSize:'1.1rem',marginBottom:12,color:'#888'}}>New challenges every week! <b>{countdown}</b></div>
      <div className="challenges-list">
        {weeklyChallenges.map(challenge => {
          // Find current user's progress in leaderboard
          const userEntry = challenge.leaderboard.find(e => e.name === currentUser);
          const userProgress = userEntry ? userEntry.progress : 0;
          const isCompleted = completed.includes(challenge.id);
          return (
            <div className="challenge-card" key={challenge.id}>
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <p className="challenge-participants">Participants: {challenge.participants}</p>
              <div className="challenge-leaderboard">
                <span>Leaderboard:</span>
                <ol>
                  {challenge.leaderboard.map((entry, idx) => (
                    <li key={idx}>{entry.name} - {entry.progress}%</li>
                  ))}
                </ol>
              </div>
              {joined.includes(challenge.id) ? (
                <div className="challenge-progress-section">
                  <span>Your Progress: <b>{userProgress}%</b></span>
                  {isCompleted ? (
                    <button className="profile-claim-btn" disabled style={{opacity:0.6}}>Completed</button>
                  ) : userProgress === 100 ? (
                    <button className="profile-claim-btn" onClick={() => claimXP(challenge.id)}>
                      Claim XP
                    </button>
                  ) : (
                    <button className="profile-claim-btn" disabled style={{opacity:0.6}}>Complete to Claim</button>
                  )}
                </div>
              ) : (
                <button className="profile-action-btn" onClick={() => joinChallenge(challenge.id)}>
                  Join Challenge
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="challenge-xp-earned">Total XP Earned: <b>{xpEarned}</b></div>
    </div>
  );
};

export default CommunityChallenges;
