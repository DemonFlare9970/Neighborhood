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
  const [language, setLanguage] = useState('en');
  const [privacyMode, setPrivacyMode] = useState(false);
  const [weeklySummary, setWeeklySummary] = useState(false);
  const [autoLogout, setAutoLogout] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);
  const [dataExport, setDataExport] = useState(false);
  const [reminderTime, setReminderTime] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Helper: get auth token (for demo, replace with real auth)
  function getAuthToken() {
    return localStorage.getItem('authToken') || '';
  }

  // Fetch user settings from backend
  async function fetchUserSettings() {
    try {
      const res = await fetch('/api/user/settings', {
        headers: { 'Authorization': `Bearer ${getAuthToken()}` },
      });
      if (!res.ok) throw new Error('Failed to fetch');
      return await res.json();
    } catch (e) {
      // fallback to localStorage for demo
      return JSON.parse(localStorage.getItem('userSettings')) || null;
    }
  }

  // Save user settings to backend
  async function saveUserSettings(settings) {
    try {
      const res = await fetch('/api/user/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`,
        },
        body: JSON.stringify(settings),
      });
      if (!res.ok) throw new Error('Failed to save');
      return true;
    } catch (e) {
      // fallback to localStorage for demo
      localStorage.setItem('userSettings', JSON.stringify(settings));
      return false;
    }
  }

  // Change password
  async function changePassword(newPassword) {
    try {
      const res = await fetch('/api/user/password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getAuthToken()}`,
        },
        body: JSON.stringify({ newPassword }),
      });
      if (!res.ok) throw new Error('Failed to change password');
      return true;
    } catch (e) {
      return false;
    }
  }

  // Delete account
  async function deleteAccount() {
    try {
      const res = await fetch('/api/user', {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${getAuthToken()}` },
      });
      if (!res.ok) throw new Error('Failed to delete');
      return true;
    } catch (e) {
      // fallback: clear localStorage
      localStorage.removeItem('userSettings');
      return false;
    }
  }

  // Load settings from backend/localStorage on mount
  useEffect(() => {
    fetchUserSettings().then(saved => {
      if (saved) {
        setDisplayName(saved.displayName || '');
        setEmail(saved.email || '');
        setCurrency(saved.currency || 'USD');
        setParentalControls(saved.parentalControls || false);
        setFinancialTips(saved.financialTips !== undefined ? saved.financialTips : true);
        setDarkMode(saved.darkMode || false);
        setNotifications(saved.notifications !== undefined ? saved.notifications : true);
        setLanguage(saved.language || 'en');
        setPrivacyMode(saved.privacyMode || false);
        setWeeklySummary(saved.weeklySummary || false);
        setAutoLogout(saved.autoLogout || false);
        setTwoFactorAuth(saved.twoFactorAuth || false);
        setDataExport(saved.dataExport || false);
        setReminderTime(saved.reminderTime || '');
        setShowAdvanced(saved.showAdvanced || false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Apply dark mode to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Simulate real settings update (replace with API calls in production)
  function handleSave(e) {
    e.preventDefault();
    if (newPassword && newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    const settings = {
      displayName,
      email,
      currency,
      parentalControls,
      financialTips,
      darkMode,
      notifications,
      language,
      privacyMode,
      weeklySummary,
      autoLogout,
      twoFactorAuth,
      dataExport,
      reminderTime,
      showAdvanced,
    };
    saveUserSettings(settings).then(success => {
      if (newPassword) {
        changePassword(newPassword).then(pwSuccess => {
          setMessage(
            success && pwSuccess
              ? 'Settings and password saved!'
              : 'Saved locally. Backend unavailable.'
          );
          setNewPassword('');
          setConfirmPassword('');
        });
      } else {
        setMessage(success ? 'Settings saved!' : 'Saved locally. Backend unavailable.');
        setNewPassword('');
        setConfirmPassword('');
      }
    });
  }

  function handleDelete() {
    if (window.confirm('Are you sure you want to delete your account? This action is irreversible.')) {
      deleteAccount().then(success => {
        setDisplayName('');
        setEmail('');
        setCurrency('USD');
        setParentalControls(false);
        setFinancialTips(true);
        setDarkMode(false);
        setNotifications(true);
        setNewPassword('');
        setConfirmPassword('');
        setLanguage('en');
        setPrivacyMode(false);
        setWeeklySummary(false);
        setAutoLogout(false);
        setTwoFactorAuth(false);
        setDataExport(false);
        setReminderTime('');
        setShowAdvanced(false);
        setMessage(success ? 'Account deleted.' : 'Deleted locally. Backend unavailable.');
        document.body.classList.remove('dark-mode');
      });
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

        <label>
          Language:
          <select value={language} onChange={e => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="zh">Chinese</option>
          </select>
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={privacyMode}
            onChange={e => setPrivacyMode(e.target.checked)}
          />
          Enable Privacy Mode
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={weeklySummary}
            onChange={e => setWeeklySummary(e.target.checked)}
          />
          Email Weekly Summary
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={autoLogout}
            onChange={e => setAutoLogout(e.target.checked)}
          />
          Auto-Logout on Inactivity
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={twoFactorAuth}
            onChange={e => setTwoFactorAuth(e.target.checked)}
          />
          Enable Two-Factor Authentication
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={dataExport}
            onChange={e => setDataExport(e.target.checked)}
          />
          Allow Data Export
        </label>
        <label>
          Daily Reminder Time:
          <input
            type="time"
            value={reminderTime}
            onChange={e => setReminderTime(e.target.value)}
          />
        </label>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showAdvanced}
            onChange={e => setShowAdvanced(e.target.checked)}
          />
          Show Advanced Settings
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



