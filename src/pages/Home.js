import React from 'react';

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>Welcome to CoinFlow</h1>
        <p className="subtitle">
          Budgeting and financial education made easy for teens and young adults. Take control of your money, track your spending, set savings goals, and build smart financial habits!
        </p>
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

        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="analytics">📈</div>
          <h3 className="feature-title">Smart Analytics</h3>
          <p className="feature-description">
            Visualize your spending trends, get personalized insights, and see your financial progress at a glance.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="community">🤝</div>
          <h3 className="feature-title">Community Challenges</h3>
          <p className="feature-description">
            Join fun savings and budgeting challenges with friends or the CoinFlow community. Level up your money skills together!
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="rewards">🏆</div>
          <h3 className="feature-title">Rewards & Badges</h3>
          <p className="feature-description">
            Earn badges and rewards for hitting savings goals, learning new skills, and building healthy habits.
          </p>
          <button
            className="feature-action-btn"
            onClick={() => window.location.href = '/Neighborhood/account-profile'}
            style={{marginTop: '0.7rem', background: '#6a82fb', color: '#fff', border: 'none', borderRadius: '0.7rem', padding: '0.5rem 1.2rem', fontWeight: 600, cursor: 'pointer', fontSize: '1rem', boxShadow: '0 2px 8px #b3b3e633'}}
          >
            View My Badges & Rewards
          </button>
        </div>
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="news">📰</div>
          <h3 className="feature-title">Financial News</h3>
          <p className="feature-description">
            Stay up to date with bite-sized financial news and tips, curated just for you.
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

