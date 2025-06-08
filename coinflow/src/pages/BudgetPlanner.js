import React, { useState, useEffect } from 'react';
import './BudgetPlanner.css';
import BudgetChart from '../controllers/BudgetChart';

const DEFAULT_CATEGORIES = [
  { name: 'Food', percent: 15 },
  { name: 'Housing', percent: 30 },
  { name: 'Transport', percent: 10 },
  { name: 'Fun', percent: 10 },
  { name: 'Savings', percent: 20 },
  { name: 'Other', percent: 15 },
];

function BudgetPlanner() {
  const [income, setIncome] = useState(() => parseFloat(localStorage.getItem('plannerIncome')) || '');
  const [categories, setCategories] = useState(() =>
    JSON.parse(localStorage.getItem('plannerCategories')) || DEFAULT_CATEGORIES
  );
  const [editIdx, setEditIdx] = useState(null);
  const [catName, setCatName] = useState('');
  const [catPercent, setCatPercent] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('plannerIncome', income);
  }, [income]);
  useEffect(() => {
    localStorage.setItem('plannerCategories', JSON.stringify(categories));
  }, [categories]);

  const totalPercent = categories.reduce((sum, c) => sum + Number(c.percent), 0);
  const totalBudgeted = income ? categories.reduce((sum, c) => sum + (income * c.percent / 100), 0) : 0;
  const remainingPercent = 100 - totalPercent;
  const remaining = income ? income - totalBudgeted : 0;

  function addOrEditCategory(e) {
    e.preventDefault();
    if (!catName || !catPercent) {
      setMessage('Please enter a category and percent.');
      return;
    }
    if (editIdx !== null) {
      const updated = [...categories];
      updated[editIdx] = { name: catName, percent: parseFloat(catPercent) };
      setCategories(updated);
      setEditIdx(null);
      setMessage('Category updated!');
    } else {
      if (categories.some(c => c.name.toLowerCase() === catName.toLowerCase())) {
        setMessage('Category already exists.');
        return;
      }
      setCategories([...categories, { name: catName, percent: parseFloat(catPercent) }]);
      setMessage('Category added!');
    }
    setCatName('');
    setCatPercent('');
    setTimeout(() => setMessage(''), 1500);
  }

  function editCategory(idx) {
    setCatName(categories[idx].name);
    setCatPercent(categories[idx].percent);
    setEditIdx(idx);
  }

  function deleteCategory(idx) {
    setCategories(categories.filter((_, i) => i !== idx));
    setEditIdx(null);
    setCatName('');
    setCatPercent('');
  }

  function resetPlanner() {
    setIncome('');
    setCategories(DEFAULT_CATEGORIES);
    setCatName('');
    setCatPercent('');
    setEditIdx(null);
    setMessage('Planner reset!');
    setTimeout(() => setMessage(''), 1500);
    localStorage.removeItem('plannerIncome');
    localStorage.removeItem('plannerCategories');
  }

  return (
    <main className="budget-planner-container">
      <section className="budget-planner-hero">
        <h2>Budget Planner</h2>
        <p>Enter your monthly income and let CoinFlow recommend a smart budget breakdown. Adjust categories and percentages as needed!</p>
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
      </section>
      <form onSubmit={addOrEditCategory} className="budget-planner-form">
        <input
          type="text"
          placeholder="Category (e.g. Food)"
          value={catName}
          onChange={e => setCatName(e.target.value)}
        />
        <input
          type="number"
          placeholder="% of Income"
          value={catPercent}
          onChange={e => setCatPercent(e.target.value)}
          min="1"
          max="100"
        />
        <button type="submit">{editIdx !== null ? 'Update' : 'Add'}</button>
        {editIdx !== null && (
          <button type="button" onClick={() => { setEditIdx(null); setCatName(''); setCatPercent(''); }}>
            Cancel
          </button>
        )}
        <button type="button" onClick={resetPlanner} className="budget-planner-reset-btn">
          Reset All
        </button>
      </form>
      {message && <div className="budget-planner-message">{message}</div>}
      <div className="budget-planner-summary">
        <strong>Total Budgeted:</strong> ${totalBudgeted.toFixed(2)} ({totalPercent}%)<br />
        <strong>Unallocated:</strong> <span style={{ color: remaining < 0 ? '#c0392b' : '#2e8b57' }}>${remaining.toFixed(2)} ({remainingPercent}%)</span>
      </div>
      {/* Visualization Pie Chart */}
      <div className="budget-planner-piechart">
        <BudgetChart categories={categories} income={parseFloat(income) || 0} />
      </div>
      {categories.length === 0 ? (
        <p>No categories yet. Add one above!</p>
      ) : (
        <table className="budget-planner-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>% of Income</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, idx) => (
              <tr key={cat.name}>
                <td>{cat.name}</td>
                <td>{cat.percent}%</td>
                <td>${income ? ((income * cat.percent) / 100).toFixed(2) : '0.00'}</td>
                <td>
                  <button onClick={() => editCategory(idx)} className="budget-planner-edit-btn">Edit</button>
                  <button onClick={() => deleteCategory(idx)} className="budget-planner-delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <footer className="budget-planner-footer">
        <div>Tip: A common rule is 50% Needs, 30% Wants, 20% Savings. Adjust to fit your goals!</div>
        <div style={{ marginTop: 8, color: '#888', fontSize: 13 }}>
          Need help? Try categories like Food, Housing, Transport, Fun, Savings, and more!
        </div>
      </footer>
    </main>
  );
}

export default BudgetPlanner;