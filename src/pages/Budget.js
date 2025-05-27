import React, { useState, useEffect } from 'react';

function Budgets() {
  const [budgets, setBudgets] = useState(() =>
    JSON.parse(localStorage.getItem('budgets')) || []
  );
  const [category, setCategory] = useState('General');
  const [limit, setLimit] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  function addBudget(e) {
    e.preventDefault();
    if (!limit) {
      setMessage('Please enter a budget limit.');
      return;
    }
    // Prevent duplicate categories
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

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
      <h2>Budgets</h2>
      <form onSubmit={addBudget} style={{ marginBottom: '2rem' }}>
        <select value={category} onChange={e => setCategory(e.target.value)} style={{ marginRight: 8 }}>
          <option>General</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>
        <input
          type="number"
          placeholder="Limit"
          value={limit}
          onChange={e => setLimit(e.target.value)}
          style={{ marginRight: 8, width: 100 }}
        />
        <button type="submit">Set Budget</button>
      </form>
      {message && <div style={{ color: '#2e8b57', marginBottom: 10 }}>{message}</div>}
      {budgets.length === 0 ? (
        <p>No budgets set yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {budgets.map((b, i) => (
            <li key={i} style={{ marginBottom: 12, background: '#f7f7f7', borderRadius: 8, padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>
                <strong>{b.category}</strong>: ${b.limit}
              </span>
              <button onClick={() => deleteBudget(b.category)} style={{ color: '#c0392b', background: 'none', border: 'none', cursor: 'pointer' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Budgets;