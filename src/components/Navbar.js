import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();

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
        onClick={() => navigate('/')}
        tabIndex={0}
        onKeyPress={(e) => { if (e.key === 'Enter') navigate('/'); }}
        aria-label="Go to homepage"
      >
        CoinFlow
      </div>
    </header>
  );
}

export default NavBar;

