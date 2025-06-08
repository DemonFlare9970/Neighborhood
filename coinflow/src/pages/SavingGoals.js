import React, { useState, useEffect } from 'react';
import './SavingGoals.css';

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

  const totalTarget = goals.reduce((sum, g) => sum + g.target, 0);
  const totalSaved = goals.reduce((sum, g) => sum + g.saved, 0);
  const percentTotal = totalTarget ? Math.round((totalSaved / totalTarget) * 100) : 0;

  return (
    <main className="goals-main-container">
      <section className="goals-hero">
        <h2>Savings Goals</h2>
        <p>Set, track, and achieve your dreams! Visualize your progress and stay motivated.</p>
      </section>
      <div className="goals-summary">
        <div>
          <span className="goals-summary-label">Total Saved</span>
          <span className="goals-summary-amount">${totalSaved.toFixed(2)}</span>
        </div>
        <div>
          <span className="goals-summary-label">Total Target</span>
          <span className="goals-summary-amount">${totalTarget.toFixed(2)}</span>
        </div>
        <div>
          <span className="goals-summary-label">Progress</span>
          <span className="goals-summary-percent">{percentTotal}%</span>
        </div>
      </div>
      <div className="goals-progress-bar">
        <div className="goals-progress-bar-inner" style={{ width: `${percentTotal}%` }} />
      </div>
      <form onSubmit={addGoal} className="goals-form">
        <input
          type="text"
          placeholder="Goal name (e.g. New Phone)"
          value={name}
          onChange={e => setName(e.target.value)}
          className="goals-input"
        />
        <input
          type="number"
          placeholder="Target amount"
          value={target}
          onChange={e => setTarget(e.target.value)}
          min="1"
          className="goals-input"
        />
        <input
          type="number"
          placeholder="Already saved (optional)"
          value={saved}
          onChange={e => setSaved(e.target.value)}
          min="0"
          className="goals-input"
        />
        <button type="submit" className="goals-add-btn">Add Goal</button>
      </form>
      {message && <div className="goals-message">{message}</div>}
      {goals.length === 0 ? (
        <p className="goals-empty">No savings goals yet. Add one above!</p>
      ) : (
        <ul className="goals-list">
          {goals.map(goal => {
            const percent = Math.min(100, Math.round((goal.saved / goal.target) * 100));
            return (
              <li key={goal.id} className="goals-list-item">
                <div className="goals-list-header">
                  <strong className="goals-list-title">{goal.name}</strong>
                  <button onClick={() => deleteGoal(goal.id)} className="goals-delete-btn">Delete</button>
                </div>
                <div className="goals-list-progress-row">
                  <input
                    type="number"
                    value={goal.saved}
                    min="0"
                    max={goal.target}
                    onChange={e => updateSaved(goal.id, e.target.value)}
                    className="goals-saved-input"
                  />
                  <span className="goals-list-target">/ ${goal.target}</span>
                  <span className="goals-list-percent">{percent}% saved</span>
                </div>
                <div className="goals-list-progress-bar">
                  <div
                    className="goals-list-progress-bar-inner"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

export default SavingsGoals;