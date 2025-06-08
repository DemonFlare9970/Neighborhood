import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

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
            Set goals for things you want and watch your progress as you save. Visualize your journey with progress bars and celebrate every milestone!
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="budget">📊</div>
          <h3 className="feature-title">Budgets</h3>
          <p className="feature-description">
            Create budgets for categories like food, fun, and more. Get smart suggestions, track your spending, and avoid overspending with real-time analytics.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="education">📚</div>
          <h3 className="feature-title">Financial Education</h3>
          <p className="feature-description">
            Learn money skills with tips, articles, quizzes, flashcards, and challenges designed for you. Explore a huge glossary and resource library!
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="parental">👨‍👩‍👧‍👦</div>
          <h3 className="feature-title">Parental Controls</h3>
          <p className="feature-description">
            Optional controls to help parents guide and support healthy money habits. Set spending limits, approve goals, and monitor progress.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="analytics">📈</div>
          <h3 className="feature-title">Smart Analytics</h3>
          <p className="feature-description">
            Visualize your spending trends, get personalized insights, and see your financial progress at a glance. Unlock advanced charts and reports!
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="rewards">🏆</div>
          <h3 className="feature-title">Rewards & Badges</h3>
          <p className="feature-description">
            Earn badges and rewards for hitting savings goals, learning new skills, and building healthy habits. View your collection and claim special prizes!
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
          <h3 className="feature-title">Financial News Feed</h3>
          <p className="feature-description">
            Stay up to date with the latest financial news, tips, and trends. Get curated articles and updates right on your dashboard.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="customize">🎨</div>
          <h3 className="feature-title">Customize Your Experience</h3>
          <p className="feature-description">
            Choose your theme, font size, and accessibility options. Make CoinFlow truly yours!
          </p>
          <button
            className="feature-action-btn"
            onClick={() => navigate('/customize')}
            style={{marginTop: '0.7rem', background: '#00b894', color: '#fff', border: 'none', borderRadius: '0.7rem', padding: '0.5rem 1.2rem', fontWeight: 600, cursor: 'pointer', fontSize: '1rem', boxShadow: '0 2px 8px #00b89433'}}
          >
            Go to Customize
          </button>
        </div>
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="community">🤝</div>
          <h3 className="feature-title">Community Challenges</h3>
          <p className="feature-description">
            Join fun savings and budgeting challenges with friends or the CoinFlow community. Level up your money skills together! Compete on the leaderboard and earn XP.
          </p>
        </div>
      </section>
      
      <section className="home-news-feed">
        <h2>Latest Financial News & Tips</h2>
        <ul className="news-feed-list">
          <li><a href="https://www.cnbc.com/personal-finance/" target="_blank" rel="noopener noreferrer">CNBC Personal Finance: How teens can start investing early</a></li>
          <li><a href="https://www.nerdwallet.com/article/finance/financial-tips-for-teens" target="_blank" rel="noopener noreferrer">NerdWallet: 10 Smart Money Tips for Teens</a></li>
          <li><a href="https://www.kiplinger.com/personal-finance/" target="_blank" rel="noopener noreferrer">Kiplinger: Best Budgeting Apps for Young Adults</a></li>
          <li><a href="https://www.marketwatch.com/personal-finance" target="_blank" rel="noopener noreferrer">MarketWatch: How to Build Good Credit as a Teen</a></li>
          <li><a href="https://www.investopedia.com/financial-education-for-teens-5181812" target="_blank" rel="noopener noreferrer">Investopedia: Financial Education for Teens</a></li>
        </ul>
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

