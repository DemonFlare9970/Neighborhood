import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function CoinFlowNavbar() {
  useEffect(() => {}, []);

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
        {/* <NavLink to="/settings" style={navBtnStyle}>Settings</NavLink> */}
        <NavLink to="/customize" style={navBtnStyle}>Customize</NavLink>
      </nav>
    </header>
  );
}

const navBtnStyle = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 0.7rem',
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: '0.3rem 0.9rem',
  borderRadius: '0.5rem',
  background: 'rgba(0,0,0,0.08)',
  transition: 'background 0.2s',
};

export default CoinFlowNavbar;
