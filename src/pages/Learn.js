import React from 'react';
import './Learn.css';

const Learn = () => {
  return (
    <div className="learn-container">
      <h1>Welcome to the Learning Hub</h1>
      <p>Explore valuable information to improve your financial literacy and manage your money better.</p>

      <div className="learning-section">
        <h2>Credit Scores</h2>
        <p>
          A credit score is a numerical representation of your creditworthiness, ranging from 300 to 850. Here are some
          key tips for improving your credit score:
        </p>
        <ul>
          <li>Make payments on time.</li>
          <li>Maintain a low credit utilization rate.</li>
          <li>Check your credit report regularly for errors.</li>
          <li>Avoid opening too many new credit accounts at once.</li>
        </ul>
        <p>
          Credit scores are crucial for securing loans, getting favorable interest rates, and even renting an apartment. Make
          sure to stay informed and improve your credit score over time.
        </p>
      </div>

      <div className="learning-section">
        <h2>Savings Tips</h2>
        <p>
          Saving money is a crucial part of personal finance. Here are some simple ways to start saving:
        </p>
        <ul>
          <li>Set up a monthly savings goal based on your income and expenses.</li>
          <li>Create a separate savings account for emergencies.</li>
          <li>Cut back on unnecessary subscriptions and daily spending.</li>
          <li>Try using the "Pay Yourself First" method by saving a portion of your income as soon as you get paid.</li>
        </ul>
        <p>
          It’s important to start saving early to build an emergency fund and secure your financial future. The earlier you
          start, the better!
        </p>
      </div>

      <div className="learning-section">
        <h2>Understanding Loans</h2>
        <p>
          Loans can help you make big purchases or cover unexpected expenses, but they come with interest rates and
          repayment schedules. Here are some important tips:
        </p>
        <ul>
          <li>Only borrow what you can afford to pay back.</li>
          <li>Check the interest rate and repayment terms before accepting a loan.</li>
          <li>Understand the difference between secured and unsecured loans.</li>
          <li>Try to pay off high-interest loans as quickly as possible.</li>
        </ul>
        <p>
          Loans can be a helpful tool if used responsibly, but always make sure you fully understand the terms before
          committing.
        </p>
      </div>

      <div className="learning-section">
        <h2>Budgeting</h2>
        <p>
          Budgeting is key to managing your finances and achieving your financial goals. Here’s how you can get started:
        </p>
        <ul>
          <li>Track your income and expenses to understand where your money goes.</li>
          <li>Set financial goals and create a budget based on your priorities.</li>
          <li>Use budgeting apps or spreadsheets to keep track of your progress.</li>
          <li>Review your budget regularly and adjust it as needed.</li>
        </ul>
        <p>
          A well-planned budget helps you stay on top of your finances, save for the future, and avoid overspending.
        </p>
      </div>
    </div>
  );
};

export default Learn;
