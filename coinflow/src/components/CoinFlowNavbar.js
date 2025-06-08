import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function CoinFlowNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for token in localStorage (or sessionStorage)
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header style={{
      backgroundColor: '#2ecc71',
      padding: '1rem 2rem',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 3px 10px rgba(0,0,0,0.1)'
    }}>
      <div
        style={{ fontWeight: '700', fontSize: '1.8rem', cursor: 'pointer' }}
        tabIndex={0}
        aria-label="Go to homepage"
      >
        <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          CoinFlow
        </NavLink>
      </div>
      <nav>
        <NavLink to="/dashboard" style={navBtnStyle}>Dashboard</NavLink>
        <NavLink to="/transactions" style={navBtnStyle}>Transactions</NavLink>
        <NavLink to="/budget-planner" style={navBtnStyle}>Budget Planner</NavLink>
        <NavLink to="/goals" style={navBtnStyle}>Savings Goals</NavLink>
        <NavLink to="/education" style={navBtnStyle}>Education</NavLink>
        <NavLink to="/settings" style={navBtnStyle}>Settings</NavLink>
        <NavLink to="/community-challenges" style={navBtnStyle}>Community Challenges</NavLink>
        <NavLink to="/account-profile" style={navBtnStyle}>Account Profile</NavLink>
        <NavLink to="/customize" style={navBtnStyle}>Customize</NavLink>
        {!isLoggedIn && (
          <>
            <NavLink to="/login" style={navBtnStyle}>Login</NavLink>
            <NavLink to="/register" style={navBtnStyle}>Register</NavLink>
          </>
        )}
        {isLoggedIn && (
          <button onClick={handleLogout} style={navBtnStyle}>Logout</button>
        )}
      </nav>
    </header>
  );
}

const navBtnStyle = {
  background: 'transparent',
  border: 'none',
  color: 'white',
  fontWeight: 500,
  fontSize: '1rem',
  marginLeft: '1.2rem',
  cursor: 'pointer',
  outline: 'none',
  textDecoration: 'none',
  transition: 'color 0.2s',
};

export default CoinFlowNavbar;
