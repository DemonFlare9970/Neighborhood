import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>BudgetApp</h1>
      <div className="header-info">
        <span>Welcome, User!</span>
        <span>Balance: $5000</span>
      </div>
    </header>
  );
};

export default Header;
