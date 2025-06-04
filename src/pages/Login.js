import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const API_BASE = process.env.NODE_ENV === 'production'
    ? 'https://neighborhood-6pj2.onrender.com'
    : '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');
      // Save token to localStorage (or context)
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <div className="auth-error">{error}</div>}
      </form>
      <div className="auth-extra">
        <p>Don't have an account? <span className="auth-link" onClick={() => navigate('/register')}>Register</span></p>
        <p style={{marginTop: 10, fontSize: 13, color: '#888'}}>Demo: Try <b>test@example.com</b> / <b>password123</b></p>
      </div>
      <div className="auth-tips">
        <h4>Login Tips</h4>
        <ul>
          <li>Use a strong password for your account.</li>
          <li>Never share your credentials with anyone.</li>
          <li>If you forget your password, contact support.</li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
