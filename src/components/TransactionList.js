import React from 'react';
import { useBudget } from '../context/BudgetContext';  // Corrected import path

const TransactionList = () => {
  const { transactions, deleteTransaction } = useBudget();

  return (
    <div>
      <h2>Transaction List</h2>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.text}: ${transaction.amount}</p>
          <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
