import React, { useState } from 'react';
import './CommunityChallenges.css';

const challengesList = [
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
];

const CommunityChallenges = () => {
  const [joined, setJoined] = useState([]); // challenge ids
  const [progress, setProgress] = useState({}); // {challengeId: percent}
  const [xpEarned, setXpEarned] = useState(0);

  function joinChallenge(id) {
    if (!joined.includes(id)) setJoined(j => [...j, id]);
  }

  function updateProgress(id, val) {
    setProgress(p => ({ ...p, [id]: Math.max(0, Math.min(100, Number(val))) }));
  }

  function claimXP(id) {
    const challenge = challengesList.find(c => c.id === id);
    const percent = progress[id] || 0;
    let xp = Math.round(challenge.xpBase * (percent / 100));
    if (percent === 100) xp += challenge.xpBonus;
    setXpEarned(x => x + xp);
    // Optionally: mark as completed/claimed
  }

  return (
    <div className="community-challenges-container">
      <h2>Community Challenges</h2>
      <div className="challenges-list">
        {challengesList.map(challenge => (
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
                <label>
                  Your Progress: 
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={progress[challenge.id] || ''}
                    onChange={e => updateProgress(challenge.id, e.target.value)}
                    style={{marginLeft:8, width:60}}
                  />%
                </label>
                <button className="profile-claim-btn" onClick={() => claimXP(challenge.id)}>
                  Claim XP
                </button>
              </div>
            ) : (
              <button className="profile-action-btn" onClick={() => joinChallenge(challenge.id)}>
                Join Challenge
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="challenge-xp-earned">Total XP Earned: <b>{xpEarned}</b></div>
    </div>
  );
};

export default CommunityChallenges;
