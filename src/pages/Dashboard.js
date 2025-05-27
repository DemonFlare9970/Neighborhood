import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  // Example: Load balances, recent transactions, and goal progress from localStorage
  const [balance, setBalance] = useState(0);
  const [recent, setRecent] = useState([]);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    // Calculate balance from transactions
    const txs = JSON.parse(localStorage.getItem('transactions')) || [];
    const bal = txs.reduce((sum, tx) =>
      tx.type === 'income' ? sum + tx.amount : sum - tx.amount, 0
    );
    setBalance(bal);
    setRecent(txs.slice(-5).reverse());
    setGoals(JSON.parse(localStorage.getItem('goals')) || []);
  }, []);

  return (
    <div className="dashboard">
      <h2>Welcome to CoinFlow!</h2>
      <div className="dashboard-summary">
        <div className="dashboard-card">
          <h3>Current Balance</h3>
          <p className="dashboard-balance">${balance.toFixed(2)}</p>
        </div>
        <div className="dashboard-card">
          <h3>Savings Goals</h3>
          {goals.length === 0 ? (
            <p>No goals set yet.</p>
          ) : (
            <ul>
              {goals.slice(0, 3).map(goal => (
                <li key={goal.id}>
                  {goal.name}: ${goal.saved} / ${goal.target}
                </li>
              ))}
            </ul>
          )}
          <Link className="dashboard-link" to="/goals">View All Goals</Link>
        </div>
      </div>
      <div className="dashboard-section">
        <h3>Recent Transactions</h3>
        {recent.length === 0 ? (
          <p>No transactions yet.</p>
        ) : (
          <ul className="dashboard-transactions">
            {recent.map(tx => (
              <li key={tx.id}>
                <span>{tx.date} - {tx.desc}</span>
                <span className={tx.type === 'income' ? 'income' : 'expense'}>
                  {tx.type === 'income' ? '+' : '-'}${tx.amount}
                </span>
              </li>
            ))}
          </ul>
        )}
        <Link className="dashboard-link" to="/transactions">View All Transactions</Link>
      </div>
      <div className="dashboard-buttons">
        <Link className="dashboard-link" to="/budget-planner">Budget Planner</Link>
        <Link className="dashboard-link" to="/transactions">Add Transaction</Link>
        <Link className="dashboard-link" to="/settings">Settings</Link>
      </div>
    </div>
  );
};

export default Dashboard;