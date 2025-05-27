import React, { useState, useEffect } from 'react';
import './Settings.css';

function Settings() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [parentalControls, setParentalControls] = useState(false);
  const [financialTips, setFinancialTips] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('userSettings'));
    if (saved) {
      setDisplayName(saved.displayName || '');
      setEmail(saved.email || '');
      setCurrency(saved.currency || 'USD');
      setParentalControls(saved.parentalControls || false);
      setFinancialTips(saved.financialTips !== undefined ? saved.financialTips : true);
      setDarkMode(saved.darkMode || false);
      setNotifications(saved.notifications !== undefined ? saved.notifications : true);
    }
  }, []);

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  function handleSave(e) {
    e.preventDefault();
    if (newPassword && newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    localStorage.setItem(
      'userSettings',
      JSON.stringify({
        displayName,
        email,
        currency,
        parentalControls,
        financialTips,
        darkMode,
        notifications,
      })
    );
    setMessage('Settings saved!');
    setNewPassword('');
    setConfirmPassword('');
  }

  function handleDelete() {
    if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {
      localStorage.removeItem('userSettings');
      setDisplayName('');
      setEmail('');
      setCurrency('USD');
      setParentalControls(false);
      setFinancialTips(true);
      setDarkMode(false);
      setNotifications(true);
      setNewPassword('');
      setConfirmPassword('');
      setMessage('Account deleted.');
      document.body.classList.remove('dark-mode');
    }
  }

  return (
    <div className="settings-container">
      <form className="settings-form" onSubmit={handleSave}>
        <h2>Settings</h2>
        <label>
          Display Name:
          <input
            type="text"
            placeholder="Your name"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
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
          Preferred Currency:
          <select value={currency} onChange={e => setCurrency(e.target.value)}>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="CAD">CAD (C$)</option>
            <option value="AUD">AUD (A$)</option>
          </select>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={parentalControls}
            onChange={e => setParentalControls(e.target.checked)}
          />
          Enable Parental Controls
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={financialTips}
            onChange={e => setFinancialTips(e.target.checked)}
          />
          Receive Financial Tips & Challenges
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