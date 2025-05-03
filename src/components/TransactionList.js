import React from 'react';
import './TransactionList.css';

function TransactionList({ transactions }) {
    return (
        <div className="transaction-list">
            <h2>Recent Transactions</h2>
            {transactions.length === 0 ? (
                <p className="no-transactions">No transactions available.</p>
            ) : (
                <ul>
                    {transactions.map((tx, index) => (
                        <li key={index} className="transaction-item">
                        <div className="transaction-info">
                          <span className="transaction-description">{tx.description}</span>
                          <span className="transaction-date">{tx.date}</span>
                        </div>
                        <div
                            className={`transaction-amount ${
                                tx.amount < 0 ? 'negative' : 'positive'
                              }`}
                            > {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              }
              
              export default TransactionList;