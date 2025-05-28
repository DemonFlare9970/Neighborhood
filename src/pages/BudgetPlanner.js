import React, { useState, useEffect } from 'react';
import './BudgetPlanner.css';

function BudgetPlanner() {
  const [income, setIncome] = useState(() =>
    parseFloat(localStorage.getItem('plannerIncome')) || ''
  );
  const [categories, setCategories] = useState(() =>
    JSON.parse(localStorage.getItem('plannerCategories')) || []
  );
  const [catName, setCatName] = useState('');
  const [catLimit, setCatLimit] = useState('');
  const [editIdx, setEditIdx] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('plannerIncome', income);
  }, [income]);
  useEffect(() => {
    localStorage.setItem('plannerCategories', JSON.stringify(categories));
  }, [categories]);

  const totalBudgeted = categories.reduce((sum, c) => sum + Number(c.limit), 0);
  const remaining = income ? income - totalBudgeted : 0;

  function addOrEditCategory(e) {
    e.preventDefault();
    if (!catName || !catLimit) {
      setMessage('Please enter a category and limit.');
      return;
    }
    if (editIdx !== null) {
      const updated = [...categories];
      updated[editIdx] = { name: catName, limit: parseFloat(catLimit) };
      setCategories(updated);
      setEditIdx(null);
      setMessage('Category updated!');
    } else {
      if (categories.some(c => c.name.toLowerCase() === catName.toLowerCase())) {
        setMessage('Category already exists.');
        return;
      }
      setCategories([...categories, { name: catName, limit: parseFloat(catLimit) }]);
      setMessage('Category added!');
    }
    setCatName('');
    setCatLimit('');
    setTimeout(() => setMessage(''), 1500);
  }

  function editCategory(idx) {
    setCatName(categories[idx].name);
    setCatLimit(categories[idx].limit);
    setEditIdx(idx);
  }

  function deleteCategory(idx) {
    setCategories(categories.filter((_, i) => i !== idx));
    setEditIdx(null);
    setCatName('');
    setCatLimit('');
  }

  function resetPlanner() {
    setIncome('');
    setCategories([]);
    setCatName('');
    setCatLimit('');
    setEditIdx(null);
    setMessage('Planner reset!');
    setTimeout(() => setMessage(''), 1500);
    localStorage.removeItem('plannerIncome');
    localStorage.removeItem('plannerCategories');
  }

  return (
    <div className="budget-planner-container">
      <h2>Budget Planner</h2>
      <p>Plan your monthly budget, track your categories, and see how much you have left to allocate.</p>
      <div style={{ margin: '2rem 0', background: '#f7f7f7', borderRadius: 10, padding: 20 }}>
        <label style={{ fontWeight: 600, fontSize: 18 }}>
          Monthly Income: $
          <input
            type="number"
            value={income}
            onChange={e => setIncome(e.target.value)}
            style={{ marginLeft: 8, width: 120, fontSize: 16 }}
            min="0"
          />
        </label>
      </div>
      <form onSubmit={addOrEditCategory} style={{ marginBottom: '2rem', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Category (e.g. Food)"
          value={catName}
          onChange={e => setCatName(e.target.value)}
          style={{ width: 160 }}
        />
        <input
          type="number"
          placeholder="Limit"
          value={catLimit}
          onChange={e => setCatLimit(e.target.value)}
          style={{ width: 100 }}
          min="0"
        />
        <button type="submit">{editIdx !== null ? 'Update' : 'Add'}</button>
        {editIdx !== null && (
          <button type="button" onClick={() => { setEditIdx(null); setCatName(''); setCatLimit(''); }}>
            Cancel
          </button>
        )}
        <button type="button" onClick={resetPlanner} style={{ marginLeft: 'auto', color: '#c0392b', background: 'none', border: '1px solid #c0392b', borderRadius: 5, padding: '0.3rem 0.8rem' }}>
          Reset All
        </button>
      </form>
      {message && <div style={{ color: '#2e8b57', marginBottom: 10 }}>{message}</div>}
      <div style={{ marginBottom: 24 }}>
        <strong>Total Budgeted:</strong> ${totalBudgeted.toFixed(2)}<br />
        <strong>Unallocated:</strong> <span style={{ color: remaining < 0 ? '#c0392b' : '#2e8b57' }}>${remaining.toFixed(2)}</span>
      </div>
      {categories.length === 0 ? (
        <p>No categories yet. Add one above!</p>
      ) : (
        <table style={{ width: '100%', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px #e0e0e0', marginBottom: 20 }}>
          <thead>
            <tr style={{ background: '#ecf9f1' }}>
              <th style={{ padding: 8, borderRadius: '8px 0 0 0' }}>Category</th>
              <th style={{ padding: 8 }}>Limit</th>
              <th style={{ padding: 8, borderRadius: '0 8px 0 0' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, idx) => (
              <tr key={cat.name}>
                <td style={{ padding: 8 }}>{cat.name}</td>
                <td style={{ padding: 8 }}>${cat.limit}</td>
                <td style={{ padding: 8 }}>
                  <button onClick={() => editCategory(idx)} style={{ marginRight: 8 }}>Edit</button>
                  <button onClick={() => deleteCategory(idx)} style={{ color: '#c0392b' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <footer style={{ color: '#999', fontSize: 13, marginTop: 40 }}>
        Need help? Try setting up categories for Food, Transport, Fun, Savings, and more!
      </footer>
    </div>
  );
}

export default BudgetPlanner;