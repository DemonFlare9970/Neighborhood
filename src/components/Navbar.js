import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
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
        onClick={() => window.location.href = '/Neighborhood/'}
      >
        CoinFlow
      </div>
      <nav>
        <NavLink to="/dashboard" style={navBtnStyle}>Dashboard</NavLink>
        <NavLink to="/transactions" style={navBtnStyle}>Transactions</NavLink>
        <NavLink to="/budgets" style={navBtnStyle}>Budgets</NavLink>
        <NavLink to="/goals" style={navBtnStyle}>Savings Goals</NavLink>
        <NavLink to="/education" style={navBtnStyle}>Education</NavLink>
        <NavLink to="/settings" style={navBtnStyle}>Settings</NavLink>
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

export default NavBar;

