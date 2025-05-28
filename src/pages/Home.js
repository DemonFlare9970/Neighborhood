import React from 'react';

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>Welcome to CoinFlow</h1>
        <p className="subtitle">
          Budgeting and financial education made easy for teens and young adults. Take control of your money, track your spending, set savings goals, and build smart financial habits!
        </p>
        <button
          className="cta-button"
          onClick={() => window.location.href = '/Neighborhood/dashboard'}
        >
          Go to Dashboard
        </button>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="budget">💸</div>
          <h3 className="feature-title">Expense Tracking</h3>
          <p className="feature-description">
            Log your spending and income, see where your money goes, and make smarter choices.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="goal">🎯</div>
          <h3 className="feature-title">Savings Goals</h3>
          <p className="feature-description">
            Set goals for things you want and watch your progress as you save.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="budget">📊</div>
          <h3 className="feature-title">Budgets</h3>
          <p className="feature-description">
            Create budgets for categories like food, fun, and more. Stay on track and avoid overspending.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="education">📚</div>
          <h3 className="feature-title">Financial Education</h3>
          <p className="feature-description">
            Learn money skills with tips, articles, and challenges designed for you.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="parental">👨‍👩‍👧‍👦</div>
          <h3 className="feature-title">Parental Controls</h3>
          <p className="feature-description">
            Optional controls to help parents guide and support healthy money habits.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Start your journey to financial confidence!</h2>
        <p>Join thousands of young people building a brighter financial future with CoinFlow.</p>
        <button
          className="cta-button"
          onClick={() => window.location.href = '/Neighborhood/dashboard'}
        >
          Get Started Now
        </button>
      </section>

      <footer>
        &copy; {new Date().getFullYear()} CoinFlow. All rights reserved.
      </footer>
    </main>
  );
};

export default Home;