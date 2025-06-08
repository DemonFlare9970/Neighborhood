import React from 'react';
import { useBudget } from '../context/BudgetContext';

const BalanceSummary = () => {
  const { transactions } = useBudget();

  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income + expenses;

  return (
    <div className="balance-summary">
      <h2>Balance: ${balance.toFixed(2)}</h2>
      <div className="summary-details">
        <div className="income-box">
          <h4>Income</h4>
          <p className="income">${income.toFixed(2)}</p>
        </div>
        <div className="expense-box">
          <h4>Expenses</h4>
          <p className="expense">${Math.abs(expenses).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummary;
