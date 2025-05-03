import React from "react";
import './BudgetSummary.css';

function BudgetSummary({ transactions }) {
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(amount => amount > 0)
        .reduce((acc, amount) => (acc + amount), 0)
        .toFixed(2);
    const expense = amounts
        .filter(amount => amount < 0)
        .reduce((acc, amount) => (acc + amount), 0)
        .toFixed(2);
    const total = (income - Math.abs(expenses)).toFixed(2);
    return (
        <div className="budget-summary">
      <div className="summary-item">
        <h3>Total</h3>
        <p className="total">${total}</p>
      </div>
      <div className="summary-item">
        <h3>Income</h3>
        <p className="income">+${income}</p>
      </div>
      <div className="summary-item">
        <h3>Expenses</h3>
        <p className="expenses">-${Math.abs(expenses)}</p>
      </div>
    </div>
  );
}
export default BudgetSummary;
