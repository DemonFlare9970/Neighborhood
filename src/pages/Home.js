import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h2>Home Page - CoinFlow</h2>
      <p>Welcome to CoinFlow, your one-stop platform to manage your budget and finances with ease.</p>
      <p>Start planning your budget or adjust your settings to suit your needs!</p>
      <div className="home-buttons">
        <Link to="/budget-planner" className="home-btn">Budget Planner</Link>
        <Link to="/settings" className="home-btn">Settings</Link>
      </div>
    </div>
  );
}

export default Home;
