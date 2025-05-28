import React, { useState, useEffect } from 'react';
import './Transaction.css';

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

  return (
    <div className="transactions-container">
      <h2>Transactions</h2>
      <form onSubmit={addTransaction} className="transactions-form">
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option>General</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Other</option>
        </select>
        <button type="submit">Add</button>
      </form>
      {message && <div style={{ color: '#2e8b57', marginBottom: 10 }}>{message}</div>}
      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        <ul className="transactions-list">
          {transactions.slice().reverse().map(tx => (
            <li key={tx.id}>
              <div>
                <strong>{tx.desc}</strong> <span style={{ color: '#888' }}>({tx.category})</span>
                <div style={{ fontSize: 12, color: '#888' }}>{tx.date}</div>
              </div>
              <div>
                <span className={tx.type === 'income' ? 'income' : 'expense'}>
                  {tx.type === 'income' ? '+' : '-'}${tx.amount}
                </span>
                <button onClick={() => deleteTransaction(tx.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Transactions;