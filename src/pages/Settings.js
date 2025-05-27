import React, { useState } from 'react';
import './settings.css';  // <-- assumes settings.css is in the same folder as Settings.js

function Settings() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [message, setMessage] = useState('');

  function handleSave(e) {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    setMessage('Settings saved successfully!');
    // Put actual save logic here
  }

  function handleDelete() {
    if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {
      // Put actual delete logic here
      setMessage('Account deleted.');
      localStorage.removeItem('user');
      // You can redirect user as needed here
    }
  }

  return (
    <div className="settings-container">
      <form className="settings-form" onSubmit={handleSave}>
        <h2>Settings</h2>
        <label>
          Username:
          <input
            type="text"
            placeholder="Your username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <label>
          New Password:
          <input
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
        </label>

        <label>
          Confirm Password:
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={e => setDarkMode(e.target.checked)}
          />
          Enable Dark Mode
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={notifications}
            onChange={e => setNotifications(e.target.checked)}
          />
          Enable Notifications
        </label>

        <div className="buttons-row">
          <button type="submit" className="btn-green">Save Settings</button>
          <button type="button" className="btn-red" onClick={handleDelete}>Delete Account</button>
        </div>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default Settings;
