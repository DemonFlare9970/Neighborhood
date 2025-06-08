import React, { useState, useEffect } from 'react';
import './BudgetPlanner.css'; // Reuse the vibrant styles
import BudgetPlanner from './BudgetPlanner';

const DEFAULT_CATEGORIES = [
  { name: 'Rent', percent: 30 },
  { name: 'Food', percent: 15 },
  { name: 'Transport', percent: 10 },
  { name: 'Fun', percent: 10 },
  { name: 'Savings', percent: 20 },
  { name: 'Other', percent: 15 },
];

const Budgets = () => {
  const [income, setIncome] = useState(() => parseFloat(localStorage.getItem('budgetsIncome')) || '');
  const [budgets, setBudgets] = useState(() =>
    JSON.parse(localStorage.getItem('budgets')) || []
  );
  const [category, setCategory] = useState('Rent');
  const [limit, setLimit] = useState('');
  const [message, setMessage] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);
  useEffect(() => {
    localStorage.setItem('budgetsIncome', income);
  }, [income]);

  function addBudget(e) {
    e.preventDefault();
    if (!limit) {
      setMessage('Please enter a budget limit.');
      return;
    }
    if (budgets.some(b => b.category === category)) {
      setMessage('Budget for this category already exists.');
      return;
    }
    setBudgets([...budgets, { category, limit: parseFloat(limit) }]);
    setLimit('');
    setMessage('Budget added!');
    setTimeout(() => setMessage(''), 1500);
  }

  function deleteBudget(cat) {
    setBudgets(budgets.filter(b => b.category !== cat));
  }

  function suggestBudgets() {
    if (!income || isNaN(income) || income <= 0) {
      setMessage('Enter a valid monthly income first.');
      return;
    }
    const suggested = DEFAULT_CATEGORIES.map(c => ({
      category: c.name,
      limit: parseFloat(((income * c.percent) / 100).toFixed(2)),
      percent: c.percent
    }));
    setBudgets(suggested);
    setShowSuggestions(false);
    setMessage('Suggested budgets applied!');
    setTimeout(() => setMessage(''), 1500);
  }

  return (
    <main className="budget-planner-container">
      <section className="budget-planner-hero">
        <h2>Budgets</h2>
        <p>Track and manage your monthly budgets by category. Enter your income and let CoinFlow suggest a smart breakdown!</p>
      </section>
      <section className="budget-planner-income-section">
        <label className="budget-planner-income-label">
          Monthly Income: $
          <input
            type="number"
            value={income}
            onChange={e => setIncome(e.target.value)}
            min="0"
            className="budget-planner-income-input"
          />
        </label>
        <button
          type="button"
          className="budget-planner-form budget-planner-edit-btn"
          style={{ marginLeft: 16, padding: '0.6rem 1.5rem', borderRadius: 30 }}
          onClick={() => setShowSuggestions(true)}
        >
          Suggest Budgets
        </button>
      </section>
      {showSuggestions && (
        <div className="budget-planner-summary" style={{ marginBottom: 16 }}>
          <div style={{ fontWeight: 700, marginBottom: 8 }}>Suggested Breakdown:</div>
          {DEFAULT_CATEGORIES.map(c => (
            <div key={c.name}>
              {c.name}: <span style={{ color: '#27ae60', fontWeight: 600 }}>{c.percent}%</span> = <span style={{ color: '#2e8b57' }}>${income ? ((income * c.percent) / 100).toFixed(2) : '0.00'}</span>
            </div>
          ))}
          <button
            className="budget-planner-edit-btn"
            style={{ marginTop: 12 }}
            onClick={suggestBudgets}
          >Apply Suggestions</button>
          <button
            className="budget-planner-delete-btn"
            style={{ marginLeft: 10, marginTop: 12 }}
            onClick={() => setShowSuggestions(false)}
          >Cancel</button>
        </div>
      )}
      <form onSubmit={addBudget} className="budget-planner-form">
        <select value={category} onChange={e => setCategory(e.target.value)} className="budget-planner-income-input" style={{ minWidth: 120 }}>
          {DEFAULT_CATEGORIES.map(c => <option key={c.name}>{c.name}</option>)}
        </select>
        <input
          type="number"
          placeholder="Limit"
          value={limit}
          onChange={e => setLimit(e.target.value)}
          className="budget-planner-income-input"
        />
        <button type="submit" className="budget-planner-edit-btn">Set Budget</button>
      </form>
      {message && <div className="budget-planner-message">{message}</div>}
      {budgets.length === 0 ? (
        <p>No budgets set yet.</p>
      ) : (
        <div className="budget-planner-summary">
          <strong>Total Budgeted:</strong> ${budgets.reduce((acc, b) => acc + b.limit, 0).toFixed(2)}<br />
          <strong>Unallocated:</strong> <span style={{ color: '#2e8b57' }}>${(income - budgets.reduce((acc, b) => acc + b.limit, 0)).toFixed(2)}</span>
        </div>
      )}
      <table className="budget-planner-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Budgeted</th>
            <th>Spent</th>
            <th>Remaining</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {budgets.map((b, i) => (
            <tr key={i}>
              <td>{b.category}</td>
              <td>${b.limit.toFixed(2)}</td>
              <td>${(b.spent || 0).toFixed(2)}</td>
              <td>${(b.limit - (b.spent || 0)).toFixed(2)}</td>
              <td>
                <button className="budget-planner-delete-btn" onClick={() => deleteBudget(b.category)} style={{ fontSize: 14, padding: '0.3rem 1rem' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="budget-planner-footer">
        <div>Tip: Review your budgets monthly and adjust as your needs change!</div>
      </footer>
    </main>
  );
}

export default Budgets;