import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import TransactionLineGraph from '../components/TransactionLineGraph';
import { useBudget } from '../context/BudgetContext';

const Dashboard = () => {
  const { transactions, recurringTransactions } = useBudget();
  const [goals, setGoals] = useState([]);
  const [budget, setBudget] = useState(0);
  const [topCategory, setTopCategory] = useState('');
  const [progress, setProgress] = useState(0);
  const [tip, setTip] = useState('');

  // Calculate all values from context transactions
  const balance = transactions.reduce((sum, tx) => tx.type === 'income' ? sum + tx.amount : sum - tx.amount, 0);
  const recent = [...transactions].slice(-5).reverse();
  const income = transactions.filter(tx => tx.type === 'income').reduce((sum, tx) => sum + tx.amount, 0);
  const expenses = transactions.filter(tx => tx.type === 'expense').reduce((sum, tx) => sum + tx.amount, 0);

  useEffect(() => {
    // Budget
    const budgets = JSON.parse(localStorage.getItem('budgets')) || [];
    setBudget(budgets.reduce((sum, b) => sum + (b.limit || 0), 0));
    // Top spending category
    const catTotals = {};
    transactions.forEach(tx => {
      if (tx.type === 'expense') catTotals[tx.category] = (catTotals[tx.category] || 0) + tx.amount;
    });
    let topCat = '';
    let max = 0;
    Object.entries(catTotals).forEach(([cat, amt]) => { if (amt > max) { max = amt; topCat = cat; } });
    setTopCategory(topCat);
    // Goals
    const g = JSON.parse(localStorage.getItem('goals')) || [];
    setGoals(g);
    // Progress (first goal)
    if (g.length > 0) setProgress(Math.min(100, Math.round((g[0].saved / g[0].target) * 100)));
    // Random tip
    const tips = [
      'Track your spending daily for better awareness.',
      'Set a savings goal and automate your savings.',
      'Review your subscriptions and cancel unused ones.',
      'Try a no-spend challenge for a week.',
      'Always pay yourself first when you get income.',
      'Use the 24-hour rule before big purchases.',
      'Check your progress every month!'
    ];
    setTip(tips[Math.floor(Math.random() * tips.length)]);
  }, [transactions]);

  return (
    <main className="dashboard-container">
      <section className="dashboard-hero">
        <h1>Welcome to CoinFlow</h1>
        <p className="dashboard-subtitle">Your all-in-one dashboard for budgeting, saving, and financial growth.</p>
      </section>
      <section className="dashboard-summary-cards">
        <div className="dashboard-card dashboard-balance-card">
          <h3>Current Balance</h3>
          <p className="dashboard-balance">${balance.toFixed(2)}</p>
        </div>
        <div className="dashboard-card dashboard-income-card">
          <h3>Total Income</h3>
          <p className="dashboard-income">${income.toFixed(2)}</p>
        </div>
        <div className="dashboard-card dashboard-expense-card">
          <h3>Total Expenses</h3>
          <p className="dashboard-expense">${expenses.toFixed(2)}</p>
        </div>
        <div className="dashboard-card dashboard-budget-card">
          <h3>Budgeted</h3>
          <p className="dashboard-budget">${budget.toFixed(2)}</p>
        </div>
      </section>
      <section className="dashboard-section dashboard-progress-section">
        <div className="dashboard-goal-progress">
          <h3>Top Savings Goal</h3>
          {goals.length === 0 ? (
            <p>No goals set yet.</p>
          ) : (
            <div>
              <div style={{ fontWeight: 600 }}>{goals[0].name}: ${goals[0].saved} / ${goals[0].target}</div>
              <div className="dashboard-progress-bar-bg">
                <div className="dashboard-progress-bar" style={{ width: progress + '%' }}></div>
              </div>
              <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>{progress}% complete</div>
            </div>
          )}
          <Link className="dashboard-link" to="/goals">View All Goals</Link>
        </div>
        <div className="dashboard-top-category">
          <h3>Top Spending Category</h3>
          {topCategory ? (
            <div className="dashboard-topcat">{topCategory}</div>
          ) : (
            <div style={{ color: '#888' }}>No expenses yet.</div>
          )}
        </div>
      </section>
      <section className="dashboard-section dashboard-transactions-section">
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
      </section>
      <section className="dashboard-section dashboard-actions-section">
        <Link className="dashboard-link" to="/budget-planner">Budget Planner</Link>
        <Link className="dashboard-link" to="/transactions">Add Transaction</Link>
        <Link className="dashboard-link" to="/settings">Settings</Link>
      </section>
      <section className="dashboard-section dashboard-tip-section">
        <div className="dashboard-tip-card">
          <h4>Money Tip</h4>
          <p>{tip}</p>
        </div>
      </section>
      <TransactionLineGraph transactions={transactions} recurringTransactions={recurringTransactions} />
    </main>
  );
};

export default Dashboard;
