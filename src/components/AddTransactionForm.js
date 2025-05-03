import React, { useState } from 'react';
import './AddTransactionForm.css';

function AddTransactionForm({ onAdd }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || !date) return;

    const newTransaction = {
      description,
      amount: parseFloat(amount),
      date
    };
    onAdd(newTransaction);
    setDescription('');
    setAmount('');
    setDate('');
  };
  return (
    <form className="transaction-form" onSubmit={handleSubmit}>
      <h2>Add New Transaction</h2>
      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g. Salary, Coffee"
        />
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Positive for income, negative for expense"
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
}
export default AddTransactionForm;
