import React, { useState, useEffect } from 'react';
import './Transaction.css';

const CATEGORY_ICONS = {
  General: '💼',
  Food: '🍔',
  Transport: '🚗',
  Shopping: '🛍️',
  Entertainment: '🎮',
  Other: '✨',
};

function Transactions() {
  const [transactions, setTransactions] = useState(() =>
    JSON.parse(localStorage.getItem('transactions')) || []
  );
  const [desc, setDesc] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('General');
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  function addTransaction(e) {
    e.preventDefault();
    if (!desc || !amount) {
      setMessage('Please enter a description and amount.');
      return;
    }
    setTransactions([
      ...transactions,
      {
        id: Date.now(),
        desc,
        amount: parseFloat(amount),
        type,
        category,
        date: new Date().toLocaleDateString(),
      },
    ]);
    setDesc('');
    setAmount('');
    setCategory('General');
    setType('expense');
    setMessage('Transaction added!');
    setTimeout(() => setMessage(''), 1500);
  }

  function deleteTransaction(id) {
    setTransactions(transactions.filter(tx => tx.id !== id));
  }

  // Summary calculations
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <main className="transactions-main-container">
      <section className="transactions-hero">
        <h2>Transactions</h2>
        <p>Track your income and expenses. Stay on top of your money!</p>
      </section>
      <div className="transactions-summary">
        <div>
          <span className="summary-label">Income</span>
          <span className="summary-income">+${totalIncome.toFixed(2)}</span>
        </div>
        <div>
          <span className="summary-label">Expenses</span>
          <span className="summary-expense">-${totalExpense.toFixed(2)}</span>
        </div>
        <div>
          <span className="summary-label">Balance</span>
          <span className={balance >= 0 ? 'summary-balance' : 'summary-balance negative'}>
            ${balance.toFixed(2)}
          </span>
        </div>
      </div>
      <form onSubmit={addTransaction} className="transactions-form">
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          className="transactions-input"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="transactions-input"
        />
        <select value={type} onChange={e => setType(e.target.value)} className="transactions-select">
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <select value={category} onChange={e => setCategory(e.target.value)} className="transactions-select">
          {Object.keys(CATEGORY_ICONS).map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit" className="transactions-add-btn">Add</button>
      </form>
      {message && <div className="transactions-message">{message}</div>}
      {transactions.length === 0 ? (
        <p className="transactions-empty">No transactions yet.</p>
      ) : (
        <ul className="transactions-list">
          {transactions.slice().reverse().map(tx => (
            <li key={tx.id} className="transactions-list-item">
              <div className="transactions-list-left">
                <span className="transactions-category-icon">{CATEGORY_ICONS[tx.category] || '✨'}</span>
                <div>
                  <strong>{tx.desc}</strong> <span className="transactions-category">({tx.category})</span>
                  <div className="transactions-date">{tx.date}</div>
                </div>
              </div>
              <div className="transactions-list-right">
                <span className={tx.type === 'income' ? 'income' : 'expense'}>
                  {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
                </span>
                <button className="transactions-delete-btn" onClick={() => deleteTransaction(tx.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default Transactions;