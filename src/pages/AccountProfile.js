import React, { useEffect, useState } from 'react';
import BadgesAndRewards from '../components/BadgesAndRewards';
import './AccountProfile.css';

// Move API_BASE outside the component to avoid eslint exhaustive-deps error
const API_BASE = process.env.NODE_ENV === 'production'
  ? 'https://neighborhood-6pj2.onrender.com'
  : '';

const AccountProfile = () => {
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState('');
  const [showAvatarInput, setShowAvatarInput] = useState(false);
  const [avatarInput, setAvatarInput] = useState('');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Fetch real user profile from backend (or localStorage fallback)
    const token = localStorage.getItem('token');
    fetch(`${API_BASE}/api/user/profile`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setAvatar(data.avatar || '');
      })
      .catch(() => {
        // fallback: try localStorage or show error
        const local = localStorage.getItem('userProfile');
        if (local) {
          const parsed = JSON.parse(local);
          setUser(parsed);
          setAvatar(parsed.avatar || '');
        }
      });
  }, [/* API_BASE intentionally omitted to avoid eslint exhaustive-deps error */]);

  const handleAvatarChange = e => setAvatarInput(e.target.value);
  const handleAvatarSave = () => {
    if (avatarInput.trim()) {
      setAvatar(avatarInput.trim());
      setShowAvatarInput(false);
      setAvatarInput('');
      // Save to backend and localStorage
      setUser(u => ({ ...u, avatar: avatarInput.trim() }));
      localStorage.setItem('userProfile', JSON.stringify({ ...user, avatar: avatarInput.trim() }));
      // Optionally: POST/PATCH to backend
      const token = localStorage.getItem('token');
      fetch(`${API_BASE}/api/user/profile`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ avatar: avatarInput.trim() })
      });
    }
  };

  if (!user) return <div className="account-profile-container"><h2>Loading profile...</h2></div>;

  return (
    <div className="account-profile-container">
      <div className="profile-header">
        <img className="profile-avatar" src={avatar} alt="User avatar" />
        <div className="profile-info">
          <h2 className="profile-name">{user.name || user.username}</h2>
          <p className="profile-email">{user.email}</p>
          <p className="profile-joined">Joined: {user.joined ? user.joined.slice(0, 10) : 'N/A'}</p>
          <div className="profile-level">
            <span className="profile-level-label">Level {user.level || 1}:</span>
            <span className="profile-level-title">Money Master</span>
          </div>
          <div className="profile-progress-bar-outer">
            <div className="profile-progress-bar-inner" style={{ width: `${user.progress || 0}%` }} />
          </div>
          <button className="profile-edit-btn" onClick={() => setShowAvatarInput(v => !v)}>
            {showAvatarInput ? 'Cancel' : 'Change Avatar'}
          </button>
          {showAvatarInput && (
            <div style={{marginTop:8}}>
              <input
                type="text"
                className="profile-avatar-input"
                placeholder="Paste image URL or Dicebear URL"
                value={avatarInput}
                onChange={handleAvatarChange}
                style={{marginRight:8, padding:'0.3rem 0.7rem', borderRadius:'0.5rem', border:'1px solid #b3b3e6'}}
              />
              <button className="profile-action-btn" onClick={handleAvatarSave}>Save</button>
            </div>
          )}
        </div>
      </div>
      <div className="profile-bio">{user.bio || 'No bio set yet.'}</div>
      <BadgesAndRewards user={user} />
    </div>
  );
};

export default AccountProfile;
