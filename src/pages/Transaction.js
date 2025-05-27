import React, { useState, useEffect } from 'react';

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
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
      <h2>Transactions</h2>
      <form onSubmit={addTransaction} style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          style={{ marginRight: 8 }}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          style={{ marginRight: 8, width: 100 }}
        />
        <select value={type} onChange={e => setType(e.target.value)} style={{ marginRight: 8 }}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <select value={category} onChange={e => setCategory(e.target.value)} style={{ marginRight: 8 }}>
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
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {transactions.slice().reverse().map(tx => (
            <li key={tx.id} style={{ marginBottom: 12, background: '#f7f7f7', borderRadius: 8, padding: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{tx.desc}</strong> <span style={{ color: '#888' }}>({tx.category})</span>
                <div style={{ fontSize: 12, color: '#888' }}>{tx.date}</div>
              </div>
              <div>
                <span style={{ color: tx.type === 'income' ? '#2e8b57' : '#c0392b', fontWeight: 600 }}>
                  {tx.type === 'income' ? '+' : '-'}${tx.amount}
                </span>
                <button onClick={() => deleteTransaction(tx.id)} style={{ marginLeft: 12, color: '#c0392b', background: 'none', border: 'none', cursor: 'pointer' }}>
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