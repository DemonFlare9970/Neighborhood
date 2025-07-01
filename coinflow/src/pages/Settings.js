import React, { useState, useEffect } from 'react';
import './Settings.css';
import { t } from '../i18n';
import { useLanguage } from '../context/LanguageContext';

const defaultSettings = {
  notifications: true,
  emailUpdates: false,
  currency: 'USD',
  language: 'en',
  privacy: 'standard',
  fontSize: 'medium',
  accessibility: 'standard',
};

function Settings() {
  const [settings, setSettings] = useState(defaultSettings);
  const [status, setStatus] = useState('');
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const saved = localStorage.getItem('userSettings');
    if (saved) setSettings(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    if (settings.language !== language) {
      setLanguage(settings.language);
    }
    // eslint-disable-next-line
  }, [settings.language]);

  const handleChange = e => {
    const { name, type, checked, value } = e.target;
    setSettings(s => ({
      ...s,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (name === 'language') {
      setLanguage(value);
    }
  };

  const handleSave = async e => {
    e.preventDefault();
    setStatus('Saving...');
    try {
      setStatus('Settings saved!');
    } catch {
      setStatus('Failed to save settings.');
    }
    setTimeout(() => setStatus(''), 2000);
  };

  const lang = language;

  return (
    <div className="settings-container">
      <h2>{t(lang, 'settings.settings')}</h2>
      <form className="settings-form" onSubmit={handleSave}>
        <div className="settings-section">
          <label>
            {t(lang, 'settings.notifications')}
            <input type="checkbox" name="notifications" checked={settings.notifications} onChange={handleChange} />
          </label>
          <label>
            {t(lang, 'settings.emailUpdates')}
            <input type="checkbox" name="emailUpdates" checked={settings.emailUpdates} onChange={handleChange} />
          </label>
          <label>
            {t(lang, 'settings.currency')}
            <select name="currency" value={settings.currency} onChange={handleChange}>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
              <option value="CAD">CAD</option>
            </select>
          </label>
          <label>
            {t(lang, 'settings.language')}
            <select name="language" value={settings.language} onChange={handleChange}>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="hi">Hindi</option>
            </select>
          </label>
          <label>
            {t(lang, 'settings.privacy')}
            <select name="privacy" value={settings.privacy} onChange={handleChange}>
              <option value="standard">Standard</option>
              <option value="strict">Strict</option>
              <option value="custom">Custom</option>
            </select>
          </label>
        </div>
        <div className="settings-section">
          <label>
            {t(lang, 'settings.fontSize')}
            <select name="fontSize" value={settings.fontSize || 'medium'} onChange={handleChange}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xl">Extra Large</option>
            </select>
          </label>
          <label>
            {t(lang, 'settings.accessibility')}
            <select name="accessibility" value={settings.accessibility || 'standard'} onChange={handleChange}>
              <option value="standard">Standard</option>
              <option value="high-contrast">High Contrast</option>
              <option value="dyslexia">Dyslexia Friendly</option>
            </select>
          </label>
        </div>
        <button type="submit" className="settings-save-btn">{t(lang, 'settings.save')}</button>
        {status && <div className="settings-status">{status === 'Settings saved!' ? t(lang, 'settings.saved') : status === 'Failed to save settings.' ? t(lang, 'settings.failed') : status}</div>}
      </form>
    </div>
  );
}

export default Settings;




