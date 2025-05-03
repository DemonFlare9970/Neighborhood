import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const BudgetSummary = () => {
  const { budget, expenses } = useContext(BudgetContext);

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="card">
      <div className="card-header">Budget Summary</div>
      <div className="card-body">
        <p>Total Budget: ${budget}</p>
        <p>Total Expenses: ${totalExpenses}</p>
        <p>Remaining Budget: ${budget - totalExpenses}</p>
      </div>
    </div>
  );
};

export default BudgetSummary;