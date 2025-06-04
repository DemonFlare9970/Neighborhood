import React, { useState, useEffect } from 'react';
import './Settings.css';

const defaultSettings = {
  notifications: true,
  emailUpdates: false,
  currency: 'USD',
  language: 'en',
  privacy: 'standard',
  theme: 'vibrant',
  fontSize: 'medium',
  accessibility: 'standard',
};

function Settings() {
  const [settings, setSettings] = useState(defaultSettings);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Load settings from localStorage or backend
    const saved = localStorage.getItem('userSettings');
    if (saved) setSettings(JSON.parse(saved));
    // Optionally fetch from backend here
  }, []);

  useEffect(() => {
    // Save to localStorage on every change
    localStorage.setItem('userSettings', JSON.stringify(settings));
  }, [settings]);

  const handleChange = e => {
    const { name, type, checked, value } = e.target;
    setSettings(s => ({
      ...s,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = async e => {
    e.preventDefault();
    setStatus('Saving...');
    try {
      // Optionally: await fetch('/api/user/settings', ...)
      setStatus('Settings saved!');
    } catch {
      setStatus('Failed to save settings.');
    }
    setTimeout(() => setStatus(''), 2000);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form className="settings-form" onSubmit={handleSave}>
        <div className="settings-section">
          <label>
            Notifications:
            <input type="checkbox" name="notifications" checked={settings.notifications} onChange={handleChange} />
          </label>
          <label>
            Email Updates:
            <input type="checkbox" name="emailUpdates" checked={settings.emailUpdates} onChange={handleChange} />
          </label>
          <label>
            Currency:
            <select name="currency" value={settings.currency} onChange={handleChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
              <option value="CAD">CAD</option>
            </select>
          </label>
          <label>
            Language:
            <select name="language" value={settings.language} onChange={handleChange}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="hi">Hindi</option>
            </select>
          </label>
          <label>
            Privacy:
            <select name="privacy" value={settings.privacy} onChange={handleChange}>
              <option value="standard">Standard</option>
              <option value="strict">Strict</option>
              <option value="custom">Custom</option>
            </select>
          </label>
        </div>
        <div className="settings-section">
          <label>
            Theme:
            <select name="theme" value={settings.theme} onChange={handleChange}>
              <option value="vibrant">Vibrant</option>
              <option value="aqua">Aqua</option>
              <option value="sunset">Sunset</option>
              <option value="midnight">Midnight</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </label>
          <label>
            Font Size:
            <select name="fontSize" value={settings.fontSize || 'medium'} onChange={handleChange}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </label>
          <label>
            Accessibility:
            <select name="accessibility" value={settings.accessibility || 'standard'} onChange={handleChange}>
              <option value="standard">Standard</option>
              <option value="high-contrast">High Contrast</option>
              <option value="dyslexia">Dyslexia Friendly</option>
            </select>
          </label>
        </div>
        <button type="submit" className="settings-save-btn">Save Settings</button>
        {status && <div className="settings-status">{status}</div>}
      </form>
    </div>
  );
}

export default Settings;




