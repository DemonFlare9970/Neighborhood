import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/budget-planner">Budget Planner</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
