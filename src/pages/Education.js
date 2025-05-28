import React, { useState } from 'react';
import './home.css'; // Reuse home styles for consistency

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
  },
  {
    title: "Emergency Fund",
    content: "Try to save at least $500 for emergencies. This helps you avoid debt when unexpected expenses pop up."
  },
  {
    title: "Track Subscriptions",
    content: "Review your subscriptions regularly. Cancel the ones you don’t use to save money each month."
  },
  {
    title: "Set a Savings Goal",
    content: "Pick something you want, set a target amount, and save a little each week. Watching your progress is motivating!"
  }
];

const glossary = [
  { term: 'Budget', def: 'A plan for how you will spend and save your money each month.' },
  { term: 'Expense', def: 'Money you spend on things like food, rent, or entertainment.' },
  { term: 'Income', def: 'Money you receive, such as from a job, allowance, or gifts.' },
  { term: 'Savings', def: 'Money you set aside for future needs or goals.' },
  { term: 'Interest', def: 'Money earned on savings or paid on borrowed money.' },
  { term: 'Credit Score', def: 'A number that shows how likely you are to repay borrowed money.' },
  { term: 'Emergency Fund', def: 'Savings set aside for unexpected expenses.' },
  { term: 'Debt', def: 'Money you owe to others.' },
  { term: 'Investment', def: 'Using money to buy something (like stocks) that could grow in value.' },
  { term: 'Allowance', def: 'Money given regularly, often by parents, to help you learn about managing money.' }
];

const quizQuestions = [
  {
    q: 'What is the first step in making a budget?',
    options: ['Start saving', 'Track your income and expenses', 'Buy what you want', 'Get a credit card'],
    answer: 1
  },
  {
    q: 'Why is it important to have an emergency fund?',
    options: ['To buy new clothes', 'For unexpected expenses', 'To lend to friends', 'To pay for vacations'],
    answer: 1
  },
  {
    q: 'Which of these is a “need” rather than a “want”?',
    options: ['Streaming subscription', 'New phone', 'Groceries', 'Concert tickets'],
    answer: 2
  },
  {
    q: 'What does “pay yourself first” mean?',
    options: ['Spend all your money', 'Save a portion before spending', 'Pay your friends', 'Buy gifts'],
    answer: 1
  },
  {
    q: 'What is a good way to avoid impulse buying?',
    options: ['Shop when hungry', 'Wait 24 hours before buying', 'Buy everything on sale', 'Use a credit card'],
    answer: 1
  }
];

function Education() {
  const [selected, setSelected] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [quizIdx, setQuizIdx] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizAnswered, setQuizAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  function handleRandomTip() {
    let idx;
    do {
      idx = Math.floor(Math.random() * tips.length);
    } while (idx === selected && tips.length > 1);
    setSelected(idx);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 800);
  }

  function handleQuizAnswer(idx) {
    if (quizAnswered) return;
    setQuizAnswered(true);
    if (idx === quizQuestions[quizIdx].answer) {
      setQuizScore(quizScore + 1);
    }
    setTimeout(() => {
      if (quizIdx + 1 < quizQuestions.length) {
        setQuizIdx(quizIdx + 1);
        setQuizAnswered(false);
      } else {
        setQuizFinished(true);
      }
    }, 900);
  }

  function resetQuiz() {
    setQuizIdx(0);
    setQuizScore(0);
    setQuizAnswered(false);
    setQuizFinished(false);
  }

  return (
    <div className="education-container" style={{ maxWidth: 800, margin: '0 auto', padding: '2.5rem 1rem' }}>
      <h2 style={{ color: '#27ae60', fontWeight: 800, fontSize: '2.2rem', marginBottom: 18 }}>Financial Education</h2>
      {/* Tips Carousel */}
      <section style={{ marginBottom: 40, position: 'relative' }}>
        <strong style={{ fontSize: 18 }}>Tip of the Day:</strong>
        <div style={{ background: '#f7f7f7', borderRadius: 12, padding: 24, marginTop: 12, boxShadow: '0 4px 16px #e0e0e0' }}>
          <h4 style={{ color: '#2ecc71', fontWeight: 700, fontSize: 20 }}>{tips[selected].title}</h4>
          <p style={{ fontSize: 17, color: '#333', margin: '10px 0 0 0' }}>{tips[selected].content}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 18 }}>
          <div style={{ flex: 1, display: 'flex', gap: 6 }}>
            {tips.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(idx)}
                style={{
                  background: idx === selected ? '#2e8b57' : '#e0e0e0',
                  color: idx === selected ? '#fff' : '#222',
                  border: 'none',
                  borderRadius: '50%',
                  width: 28,
                  height: 28,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: 'pointer',
                  boxShadow: idx === selected ? '0 2px 8px #b2f2d6' : 'none',
                  transition: 'background 0.2s, color 0.2s'
                }}
                aria-label={`Show tip ${idx + 1}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleRandomTip}
            style={{
              marginLeft: 18,
              background: 'linear-gradient(90deg, #2ecc71 60%, #27ae60 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '0.4rem 1.2rem',
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
              boxShadow: '0 2px 8px #b2f2d6',
              transition: 'background 0.2s, transform 0.2s'
            }}
            aria-label="Show a random tip"
          >
            Surprise Me
          </button>
        </div>
        {/* Progress bar */}
        <div style={{ marginTop: 18, height: 8, background: '#e0e0e0', borderRadius: 4, overflow: 'hidden' }}>
          <div style={{ width: `${((selected + 1) / tips.length) * 100}%`, background: '#2ecc71', height: '100%', borderRadius: 4, transition: 'width 0.4s' }} />
        </div>
        {showConfetti && (
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 0, pointerEvents: 'none' }}>
            <span role="img" aria-label="confetti" style={{ fontSize: 40, animation: 'pop 0.8s' }}>🎉</span>
          </div>
        )}
      </section>
      {/* Interactive Quiz */}
      <section style={{ marginBottom: 40 }}>
        <h3 style={{ color: '#27ae60', fontWeight: 700, fontSize: 20, marginBottom: 12 }}>Quick Quiz</h3>
        {quizFinished ? (
          <div style={{ background: '#f7f7f7', borderRadius: 10, padding: 18, marginBottom: 12 }}>
            <strong>Your Score: {quizScore} / {quizQuestions.length}</strong>
            <div style={{ marginTop: 10 }}>
              <button onClick={resetQuiz} style={{ background: '#2ecc71', color: '#fff', border: 'none', borderRadius: 6, padding: '0.4rem 1.2rem', fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>Try Again</button>
            </div>
          </div>
        ) : (
          <div style={{ background: '#f7f7f7', borderRadius: 10, padding: 18 }}>
            <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 10 }}>{quizQuestions[quizIdx].q}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {quizQuestions[quizIdx].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuizAnswer(idx)}
                  style={{
                    background: quizAnswered && idx === quizQuestions[quizIdx].answer ? '#2ecc71' : '#e0e0e0',
                    color: quizAnswered && idx === quizQuestions[quizIdx].answer ? '#fff' : '#222',
                    border: 'none',
                    borderRadius: 6,
                    padding: '0.4rem 1.2rem',
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: quizAnswered ? 'default' : 'pointer',
                    opacity: quizAnswered && idx !== quizQuestions[quizIdx].answer ? 0.7 : 1,
                    transition: 'background 0.2s, color 0.2s, opacity 0.2s'
                  }}
                  disabled={quizAnswered}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
      {/* Glossary */}
      <section style={{ marginBottom: 40 }}>
        <h3 style={{ color: '#27ae60', fontWeight: 700, fontSize: 20, marginBottom: 12 }}>Glossary</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: 16 }}>
          {glossary.map((item, idx) => (
            <li key={idx} style={{ marginBottom: 10, background: '#f7f7f7', borderRadius: 8, padding: 10 }}>
              <strong style={{ color: '#2ecc71' }}>{item.term}:</strong> {item.def}
            </li>
          ))}
        </ul>
      </section>
      {/* Resource Library */}
      <section style={{ marginBottom: 32 }}>
        <h3 style={{ color: '#27ae60', fontWeight: 700, fontSize: 20 }}>Learn More</h3>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: 16 }}>
          <li style={{ marginBottom: 8 }}>
            <a href="https://www.consumerfinance.gov/consumer-tools/money-as-you-grow/" target="_blank" rel="noopener noreferrer" style={{ color: '#2e8b57', textDecoration: 'underline' }}>
              Money As You Grow (CFPB)
            </a>
          </li>
          <li style={{ marginBottom: 8 }}>
            <a href="https://www.mymoney.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#2e8b57', textDecoration: 'underline' }}>
              MyMoney.gov
            </a>
          </li>
          <li style={{ marginBottom: 8 }}>
            <a href="https://www.practicalmoneyskills.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#2e8b57', textDecoration: 'underline' }}>
              Practical Money Skills
            </a>
          </li>
        </ul>
      </section>
      {/* Challenge */}
      <div style={{ background: '#ecf9f1', borderRadius: 10, padding: 18, boxShadow: '0 2px 8px #e0e0e0', fontSize: 15 }}>
        <strong>Challenge:</strong> Try to apply one tip this week and share what you learned with a friend or family member!
      </div>
    </div>
  );
}

export default Education;