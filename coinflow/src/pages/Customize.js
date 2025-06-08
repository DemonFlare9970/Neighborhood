import React, { useState, useEffect } from 'react';
import './Customize.css';

const defaultPrefs = {
  theme: 'vibrant',
  fontSize: 'medium',
  accessibility: 'standard',
  colorAccent: '#6a82fb',
  showAnimations: true,
  roundedCorners: true,
  backgroundPattern: 'none',
  cardStyle: 'elevated',
  navStyle: 'modern',
  showFooter: true,
  showProfilePic: true,
  buttonShape: 'rounded',
  transitionSpeed: 'normal',
};

const themeOptions = [
  { value: 'vibrant', label: 'Vibrant (Purple/Blue Gradient)' },
  { value: 'aqua', label: 'Aqua (Blue/Teal Gradient)' },
  { value: 'galaxy', label: 'Galaxy (Multi-color Space Gradient)' },
  { value: 'aurora', label: 'Aurora (Colorful Aurora Gradient)' },
  { value: 'neon', label: 'Neon (Pink/Blue/Green Gradient)' },
  { value: 'midnight', label: 'Midnight (Deep Purple/Blue/Black)' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
];

const fontSizes = [
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'xl', label: 'Extra Large' },
];

const accessibilityOptions = [
  { value: 'standard', label: 'Standard' },
  { value: 'high-contrast', label: 'High Contrast' },
  { value: 'dyslexia', label: 'Dyslexia Friendly' },
];

const backgroundPatterns = [
  { value: 'none', label: 'None' },
  { value: 'dots', label: 'Dots' },
  { value: 'stripes', label: 'Stripes' },
  { value: 'waves', label: 'Waves' },
  { value: 'grid', label: 'Grid' },
  { value: 'gradient', label: 'Gradient' },
];
const cardStyles = [
  { value: 'elevated', label: 'Elevated' },
  { value: 'flat', label: 'Flat' },
  { value: 'bordered', label: 'Bordered' },
  { value: 'glass', label: 'Glassmorphism' },
];
const navStyles = [
  { value: 'modern', label: 'Modern' },
  { value: 'classic', label: 'Classic' },
  { value: 'minimal', label: 'Minimal' },
];
const buttonShapes = [
  { value: 'rounded', label: 'Rounded' },
  { value: 'pill', label: 'Pill' },
  { value: 'square', label: 'Square' },
];
const transitionSpeeds = [
  { value: 'slow', label: 'Slow' },
  { value: 'normal', label: 'Normal' },
  { value: 'fast', label: 'Fast' },
];

const Customize = () => {
  const [prefs, setPrefs] = useState(() => {
    const saved = localStorage.getItem('customizePrefs');
    return saved ? JSON.parse(saved) : defaultPrefs;
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    localStorage.setItem('customizePrefs', JSON.stringify(prefs));
    // Theme (handled by data-theme for CSS)
    document.body.setAttribute('data-theme', prefs.theme);
    // Font size
    document.body.style.fontSize =
      prefs.fontSize === 'small' ? '15px' :
      prefs.fontSize === 'large' ? '20px' :
      prefs.fontSize === 'xl' ? '24px' : '17px';
    // Accessibility
    document.body.setAttribute('data-accessibility', prefs.accessibility);
    // Accent color
    document.body.style.setProperty('--color-accent', prefs.colorAccent);
    // Card style
    document.body.setAttribute('data-card-style', prefs.cardStyle);
    // Navbar style
    document.body.setAttribute('data-nav-style', prefs.navStyle);
    // Button shape
    document.body.setAttribute('data-button-shape', prefs.buttonShape);
    // Transition speed
    document.body.style.setProperty('--transition-speed',
      prefs.transitionSpeed === 'slow' ? '0.7s' :
      prefs.transitionSpeed === 'fast' ? '0.15s' : '0.35s');
    // Animations
    document.body.setAttribute('data-animations', prefs.showAnimations ? 'on' : 'off');
    // Rounded corners
    document.body.setAttribute('data-rounded', prefs.roundedCorners ? 'on' : 'off');
    // Footer/ProfilePic (for global CSS, if needed)
    document.body.setAttribute('data-show-footer', prefs.showFooter ? 'on' : 'off');
    document.body.setAttribute('data-show-profile-pic', prefs.showProfilePic ? 'on' : 'off');
    // Background pattern (as overlay, not replacing theme background)
    if (prefs.backgroundPattern !== 'none') {
      document.body.setAttribute('data-bg-pattern', prefs.backgroundPattern);
    } else {
      document.body.removeAttribute('data-bg-pattern');
    }
    // --- THEME BACKGROUND FIX ---
    // Remove any direct backgroundImage/backgroundColor overrides
    document.body.style.backgroundImage = '';
    document.body.style.backgroundColor = '';
  }, [prefs]);

  const handleChange = e => {
    const { name, type, value, checked } = e.target;
    setPrefs(p => ({
      ...p,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = e => {
    e.preventDefault();
    setStatus('Preferences saved!');
    setTimeout(() => setStatus(''), 2000);
  };

  return (
    <div className="customize-container">
      <h2>Customize Your Experience</h2>
      <form className="customize-form" onSubmit={handleSave}>
        <div className="customize-section">
          <label>
            Theme:
            <select name="theme" value={prefs.theme} onChange={handleChange}>
              {themeOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
          <label>
            Font Size:
            <select name="fontSize" value={prefs.fontSize} onChange={handleChange}>
              {fontSizes.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
          <label>
            Accessibility:
            <select name="accessibility" value={prefs.accessibility} onChange={handleChange}>
              {accessibilityOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="customize-section">
          <label>
            <input
              type="checkbox"
              name="showAnimations"
              checked={prefs.showAnimations}
              onChange={handleChange}
            />
            Enable Animations
          </label>
          <label>
            <input
              type="checkbox"
              name="roundedCorners"
              checked={prefs.roundedCorners}
              onChange={handleChange}
            />
            Rounded Corners
          </label>
        </div>
        <div className="customize-section">
          <label>
            Background Pattern:
            <select name="backgroundPattern" value={prefs.backgroundPattern} onChange={handleChange}>
              {backgroundPatterns.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
          <label>
            Card Style:
            <select name="cardStyle" value={prefs.cardStyle} onChange={handleChange}>
              {cardStyles.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
          <label>
            Navbar Style:
            <select name="navStyle" value={prefs.navStyle} onChange={handleChange}>
              {navStyles.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
        </div>
        <div className="customize-section">
          <label>
            Button Shape:
            <select name="buttonShape" value={prefs.buttonShape} onChange={handleChange}>
              {buttonShapes.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
          <label>
            Transition Speed:
            <select name="transitionSpeed" value={prefs.transitionSpeed} onChange={handleChange}>
              {transitionSpeeds.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </label>
          <label>
            <input
              type="checkbox"
              name="showFooter"
              checked={prefs.showFooter}
              onChange={handleChange}
            />
            Show Footer
          </label>
          <label>
            <input
              type="checkbox"
              name="showProfilePic"
              checked={prefs.showProfilePic}
              onChange={handleChange}
            />
            Show Profile Picture
          </label>
        </div>
        <button type="submit" className="customize-save-btn">Save Preferences</button>
        {status && <div className="customize-status">{status}</div>}
      </form>
      <div className="customize-preview" style={{
        borderColor: prefs.colorAccent,
        borderRadius: prefs.roundedCorners ? 18 : 0,
        background: prefs.backgroundPattern !== 'none' ? `url(/patterns/${prefs.backgroundPattern}.svg)` : '#f7faff',
        transition: `all ${
          prefs.transitionSpeed === 'slow' ? '0.7s' :
          prefs.transitionSpeed === 'fast' ? '0.15s' : '0.35s'
        } ease`,
        overflow: prefs.roundedCorners ? 'hidden' : 'visible',
      }}>
        <h3 style={{ color: prefs.colorAccent }}>{
          prefs.navStyle === 'classic' ? 'Classic Navbar' :
          prefs.navStyle === 'minimal' ? 'Minimal Navbar' : 'Modern Navbar'
        }</h3>
        <p style={{
          fontSize: prefs.fontSize === 'small' ? 15 :
            prefs.fontSize === 'large' ? 20 :
            prefs.fontSize === 'xl' ? 24 : 17,
          fontFamily: prefs.accessibility === 'dyslexia' ? 'OpenDyslexic, Arial, sans-serif' : undefined
        }}>
          This is how your CoinFlow app will look with your chosen settings!
        </p>
        <button
          className="customize-preview-btn"
          style={{
            height: 32,
            width: 120,
            background: prefs.colorAccent,
            color: '#fff',
            border: 'none',
            margin: '0.5rem auto',
            display: 'block',
            borderRadius: prefs.roundedCorners ? (prefs.buttonShape === 'pill' ? 16 : prefs.buttonShape === 'square' ? 0 : 8) : 0,
            boxShadow: prefs.cardStyle === 'elevated' ? '0 4px 16px #6a82fb33' :
              prefs.cardStyle === 'glass' ? '0 2px 8px #fff8, 0 1px 4px #b3b3e633' : 'none',
            border: prefs.cardStyle === 'bordered' ? '2px solid #6a82fb' : 'none',
            backdropFilter: prefs.cardStyle === 'glass' ? 'blur(4px)' : 'none',
            transition: 'border-radius 0.2s, background 0.2s',
          }}
        >
          Example Button
        </button>
        {prefs.showProfilePic && <img src="https://api.dicebear.com/7.x/bottts/svg?seed=User" alt="Profile" style={{ width: 40, height: 40, borderRadius: '50%', margin: '0.5rem auto', display: 'block' }} />}
        {prefs.showFooter && <footer style={{ marginTop: 16, color: '#888', fontSize: 13 }}>&copy; {new Date().getFullYear()} CoinFlow</footer>}
      </div>
    </div>
  );
};

export default Customize;