import React from 'react';
import BadgesAndRewards from '../components/BadgesAndRewards';
import './AccountProfile.css';

const mockUser = {
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  joined: '2024-08-15',
  avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Alex',
  level: 3,
  progress: 70,
  bio: 'Teen saver, future entrepreneur. Loves budgeting, challenges, and learning new money skills!'
};

const AccountProfile = () => {
  return (
    <div className="account-profile-container">
      <div className="profile-header">
        <img className="profile-avatar" src={mockUser.avatar} alt="User avatar" />
        <div className="profile-info">
          <h2 className="profile-name">{mockUser.name}</h2>
          <p className="profile-email">{mockUser.email}</p>
          <p className="profile-joined">Joined: {mockUser.joined}</p>
          <div className="profile-level">
            <span className="profile-level-label">Level {mockUser.level}:</span>
            <span className="profile-level-title">Money Master</span>
          </div>
          <div className="profile-progress-bar-outer">
            <div className="profile-progress-bar-inner" style={{ width: `${mockUser.progress}%` }} />
          </div>
        </div>
      </div>
      <div className="profile-bio">{mockUser.bio}</div>
      <BadgesAndRewards />
    </div>
  );
};

export default AccountProfile;
