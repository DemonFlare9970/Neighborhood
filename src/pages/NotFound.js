import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist or may have been moved.</p>
      <Link to="/" className="home-link">Go Back to Dashboard</Link>
    </div>
  );
};

export default NotFound;
