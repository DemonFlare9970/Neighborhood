import React from 'react';
import CommunityChallenges from '../components/CommunityChallenges';
import '../components/CommunityChallenges.css'; // FIX: Correct import path to point to components folder

const CommunityChallengesPage = () => (
  <div className="community-challenges-page">
    <h1 className="community-challenges-title">Community Challenges</h1>
    <CommunityChallenges />
  </div>
);

export default CommunityChallengesPage;
