import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import { v4 as uuidv4 } from 'uuid';

const TransactionForm = () => {
  const { addTransaction } = useBudget();
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    addTransaction({
      id: uuidv4(),
      text,
      amount: parseFloat(amount),
      date,
    });

    setText('');
    setAmount('');
    setDate(new Date().toISOString().slice(0, 10));
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <input
        type="text"
        placeholder="Transaction description"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
