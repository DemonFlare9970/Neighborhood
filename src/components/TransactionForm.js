import React, { useState } from 'react';
import { useBudget } from '../context/BudgetContext';
import { v4 as uuidv4 } from 'uuid';

const TransactionForm = () => {
  const { addTransaction } = useBudget();
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    addTransaction({
      id: uuidv4(),
      text,
      amount: parseFloat(amount),
    });

    setText('');
    setAmount('');
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
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
