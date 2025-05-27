import React from 'react';

const Home = () => {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>Welcome to CoinFlow</h1>
        <p className="subtitle">
          Your seamless and powerful cryptocurrency dashboard. Track, manage, and grow your portfolio effortlessly.
        </p>
        <button
          className="cta-button"
          onClick={() => alert('Feature coming soon!')}
        >
          Get Started
        </button>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="chart">📈</div>
          <h3 className="feature-title">Real-Time Analytics</h3>
          <p className="feature-description">
            Stay ahead with live crypto prices, charts, and market insights.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="wallet">💼</div>
          <h3 className="feature-title">Portfolio Management</h3>
          <p className="feature-description">
            Easily organize and monitor your investments in one place.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" role="img" aria-label="security">🔒</div>
          <h3 className="feature-title">Secure & Private</h3>
          <p className="feature-description">
            Your data stays safe with industry-grade encryption and privacy.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to take control of your crypto journey?</h2>
        <p>Join thousands of users who trust CoinFlow every day.</p>
        <button
          className="cta-button"
          onClick={() => alert('Signup coming soon!')}
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
