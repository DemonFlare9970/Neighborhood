import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Home Page - CoinFlow</h2>
      <p>Welcome to CoinFlow, your one-stop platform to manage your budget and finances with ease.</p>
      <p>Start planning your budget or adjust your settings to suit your needs!</p>
      <div className="dashboard-buttons">
        <Link className="dashboard-link" to="/budget-planner">Budget Planner</Link>
        <Link className="dashboard-link" to="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default Dashboard;
