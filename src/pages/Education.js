import React, { useState } from 'react';

const tips = [
  {
    title: "Budgeting Basics",
    content: "Track your income and expenses every month. Set spending limits for categories like food, fun, and savings."
  },
  {
    title: "Why Save Early?",
    content: "Saving even a small amount regularly helps you build good habits and reach your goals faster."
  },
  {
    title: "Smart Spending",
    content: "Before buying, ask yourself: Do I need this? Can I get it for less? Waiting 24 hours before big purchases helps avoid impulse buys."
  },
  {
    title: "Understanding Needs vs Wants",
    content: "Needs are things you must have (food, shelter). Wants are nice to have (new phone, eating out). Prioritize needs in your budget."
  },
  {
    title: "Building Credit",
    content: "If you’re old enough, use credit responsibly. Pay your bills on time and don’t borrow more than you can repay."
  }
];

function Education() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="education-container" style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
      <h2>Financial Education</h2>
      <div style={{ marginBottom: 24 }}>
        <strong>Tip of the Day:</strong>
        <div style={{ background: '#f7f7f7', borderRadius: 8, padding: 16, marginTop: 8 }}>
          <h4>{tips[selected].title}</h4>
          <p>{tips[selected].content}</p>
        </div>
        <div style={{ marginTop: 12 }}>
          {tips.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              style={{
                marginRight: 6,
                background: idx === selected ? '#2e8b57' : '#e0e0e0',
                color: idx === selected ? '#fff' : '#222',
                border: 'none',
                borderRadius: '50%',
                width: 24,
                height: 24,
                cursor: 'pointer'
              }}
              aria-label={`Show tip ${idx + 1}`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3>Learn More</h3>
        <ul>
          <li>
            <a href="https://www.consumerfinance.gov/consumer-tools/money-as-you-grow/" target="_blank" rel="noopener noreferrer">
              Money As You Grow (CFPB)
            </a>
          </li>
          <li>
            <a href="https://www.mymoney.gov/" target="_blank" rel="noopener noreferrer">
              MyMoney.gov
            </a>
          </li>
          <li>
            <a href="https://www.practicalmoneyskills.com/" target="_blank" rel="noopener noreferrer">
              Practical Money Skills
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Education;