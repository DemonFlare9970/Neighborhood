import React from 'react';
import { useBudget } from '../context/BudgetContext';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useBudget();

  return (
    <div>
      <h3>Transaction History</h3>
      <ul className="transaction-list">
        {transactions.map((txn) => (
          <li key={txn.id} className={txn.amount < 0 ? 'expense' : 'income'}>
            <span>{txn.text}</span>
            <span>{txn.amount < 0 ? '-' : '+'}${Math.abs(txn.amount)}</span>
            <button onClick={() => deleteTransaction(txn.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
