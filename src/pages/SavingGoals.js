import React, { useState, useEffect } from 'react';

function SavingsGoals() {
  const [goals, setGoals] = useState(() =>
    JSON.parse(localStorage.getItem('goals')) || []
  );
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [saved, setSaved] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  function addGoal(e) {
    e.preventDefault();
    if (!name || !target) {
      setMessage('Please enter a goal name and target amount.');
      return;
    }
    setGoals([
      ...goals,
      {
        id: Date.now(),
        name,
        target: parseFloat(target),
        saved: saved ? parseFloat(saved) : 0,
      },
    ]);
    setName('');
    setTarget('');
    setSaved('');
    setMessage('Goal added!');
    setTimeout(() => setMessage(''), 2000);
  }

  function updateSaved(id, value) {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, saved: Math.max(0, Math.min(goal.target, parseFloat(value) || 0)) } : goal
    ));
  }

  function deleteGoal(id) {
    setGoals(goals.filter(goal => goal.id !== id));
  }

  return (
    <div className="goals-container" style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
      <h2>Savings Goals</h2>
      <form onSubmit={addGoal} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Goal name (e.g. New Phone)"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <input
          type="number"
          placeholder="Target amount"
          value={target}
          onChange={e => setTarget(e.target.value)}
          min="1"
          style={{ marginRight: 8, width: 120 }}
        />
        <input
          type="number"
          placeholder="Already saved (optional)"
          value={saved}
          onChange={e => setSaved(e.target.value)}
          min="0"
          style={{ marginRight: 8, width: 120 }}
        />
        <button type="submit">Add Goal</button>
      </form>
      {message && <div style={{ color: '#2e8b57', marginBottom: 10 }}>{message}</div>}
      {goals.length === 0 ? (
        <p>No savings goals yet. Add one above!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {goals.map(goal => {
            const percent = Math.min(100, Math.round((goal.saved / goal.target) * 100));
            return (
              <li key={goal.id} style={{ marginBottom: 24, background: '#f7f7f7', borderRadius: 8, padding: 16 }}>
                <strong>{goal.name}</strong>
                <div style={{ margin: '8px 0' }}>
                  <input
                    type="number"
                    value={goal.saved}
                    min="0"
                    max={goal.target}
                    onChange={e => updateSaved(goal.id, e.target.value)}
                    style={{ width: 100, marginRight: 8 }}
                  />
                  / ${goal.target}
                  <span style={{ marginLeft: 16 }}>{percent}% saved</span>
                </div>
                <div style={{ background: '#e0e0e0', borderRadius: 4, height: 10, marginBottom: 8 }}>
                  <div
                    style={{
                      width: `${percent}%`,
                      background: '#2e8b57',
                      height: '100%',
                      borderRadius: 4,
                      transition: 'width 0.3s'
                    }}
                  />
                </div>
                <button onClick={() => deleteGoal(goal.id)} style={{ color: '#c0392b', background: 'none', border: 'none', cursor: 'pointer' }}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SavingsGoals;