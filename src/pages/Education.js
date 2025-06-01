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
  },
  { title: "Automate Savings", content: "Set up automatic transfers to your savings account so you never forget to save." },
  { title: "Track Small Expenses", content: "Little purchases add up! Keep an eye on snacks, coffee, and small subscriptions." },
  { title: "Compare Before You Buy", content: "Check prices and reviews before making big purchases to get the best deal." },
  { title: "Set SMART Goals", content: "Make your goals Specific, Measurable, Achievable, Relevant, and Time-bound." },
  { title: "Learn About Investing", content: "Start learning about stocks, bonds, and mutual funds early—even if you don’t invest yet." },
  { title: "Avoid Debt Traps", content: "Don’t borrow more than you can repay. Pay off credit cards in full each month if you use them." },
  { title: "Celebrate Progress", content: "Reward yourself (inexpensively) when you hit a savings milestone!" },
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
  { term: 'Allowance', def: 'Money given regularly, often by parents, to help you learn about managing money.' },
  { term: 'Compound Interest', def: 'Interest calculated on both the initial principal and the accumulated interest.' },
  { term: 'Budgeting App', def: 'A tool to help you track spending and saving.' },
  { term: 'Direct Deposit', def: 'When your paycheck is automatically deposited into your bank account.' },
  { term: 'Overdraft', def: 'Spending more money than you have in your account.' },
  { term: 'Net Worth', def: 'The value of what you own minus what you owe.' },
  { term: 'Financial Goal', def: 'A target to aim for when managing your money.' },
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
  },
  { q: 'What is compound interest?', options: [
    'Interest on the original amount only',
    'Interest on both the original amount and previous interest',
    'A fee for using a credit card',
    'A type of savings account'], answer: 1 },
  { q: 'What is a good first step to start saving?', options: [
    'Wait until you have a job',
    'Set a small, specific goal and save a little each week',
    'Spend less on fun',
    'Open a credit card'], answer: 1 },
  { q: 'What is a budget?', options: [
    'A plan for spending and saving money',
    'A type of bank account',
    'A loan from the bank',
    'A shopping list'], answer: 0 },
  { q: 'Which is a safe way to build credit?', options: [
    'Pay bills late',
    'Borrow more than you can repay',
    'Pay your bills on time',
    'Ignore your credit score'], answer: 2 },
  { q: 'What is an emergency fund for?', options: [
    'Vacations',
    'Unexpected expenses',
    'Buying gifts',
    'Shopping'], answer: 1 },
  { q: 'What is a want, not a need?', options: [
    'Groceries',
    'Rent',
    'Streaming subscription',
    'Utilities'], answer: 2 },
  { q: 'What does “pay yourself first” mean?', options: [
    'Save a portion before spending',
    'Pay your friends',
    'Buy gifts',
    'Spend all your money'], answer: 0 },
  { q: 'How can you avoid impulse buying?', options: [
    'Shop when hungry',
    'Wait 24 hours before buying',
    'Buy everything on sale',
    'Use a credit card'], answer: 1 },
  { q: 'What is a good way to track your spending?', options: [
    'Guess at the end of the month',
    'Use a budgeting app or spreadsheet',
    'Never check your bank account',
    'Only use cash'], answer: 1 },
  { q: 'What is a credit score?', options: [
    'A number showing how likely you are to repay borrowed money',
    'Your bank account balance',
    'The amount you owe',
    'Your monthly income'], answer: 0 },
  { q: 'What is the benefit of starting to save early?', options: [
    'You can spend more',
    'You build good habits and earn more interest',
    'You get more credit cards',
    'You avoid taxes'], answer: 1 },
  { q: 'What is an overdraft?', options: [
    'Spending more than you have in your account',
    'A type of investment',
    'A bonus from your bank',
    'A savings goal'], answer: 0 },
  { q: 'What is net worth?', options: [
    'Your monthly income',
    'The value of what you own minus what you owe',
    'Your credit score',
    'Your savings account balance'], answer: 1 },
  { q: 'What is a financial goal?', options: [
    'A target to aim for when managing your money',
    'A type of loan',
    'A shopping list',
    'A bank account'], answer: 0 },
  { q: 'What is direct deposit?', options: [
    'A type of savings account',
    'When your paycheck is automatically deposited into your bank account',
    'A loan from your employer',
    'A credit card payment'], answer: 1 },
  { q: 'What is a safe way to use a credit card?', options: [
    'Pay the full balance each month',
    'Only pay the minimum',
    'Max out the card',
    'Ignore the bill'], answer: 0 },
  { q: 'What is a budgeting app?', options: [
    'A tool to help you track spending and saving',
    'A type of bank account',
    'A shopping app',
    'A credit card'], answer: 0 },
  { q: 'What is the best way to avoid overdraft fees?', options: [
    'Spend more than you have',
    'Track your balance and set up alerts',
    'Ignore your account',
    'Use only credit cards'], answer: 1 },
  { q: 'What is an investment?', options: [
    'Using money to buy something that could grow in value',
    'A type of debt',
    'A shopping trip',
    'A bank fee'], answer: 0 },
  { q: 'What is an allowance?', options: [
    'Money given regularly to help you learn about managing money',
    'A loan',
    'A bill',
    'A tax'], answer: 0 },
  // New questions added here
  { q: 'What is a checking account?', options: [
    'A type of savings account',
    'An account for daily spending and deposits',
    'A loan from the bank',
    'A credit card'], answer: 1 },
  { q: 'What is a stock?', options: [
    'A loan to a company',
    'Ownership in a company',
    'A type of credit card',
    'A bank account'], answer: 1 },
  { q: 'What is a bond?', options: [
    'A type of loan you give to a company or government',
    'A type of stock',
    'A savings account',
    'A credit card'], answer: 0 },
  { q: 'What is a scholarship?', options: [
    'Money you borrow for school',
    'Money you earn from a job',
    'Money awarded for education that you don’t have to repay',
    'A type of tax'], answer: 2 },
  { q: 'What is a grant?', options: [
    'Money you have to pay back',
    'Money given for education or projects that you don’t repay',
    'A type of loan',
    'A credit card'], answer: 1 },
  { q: 'What is a 401(k)?', options: [
    'A type of savings account',
    'A retirement savings plan from your employer',
    'A credit card',
    'A student loan'], answer: 1 },
  { q: 'What is a Roth IRA?', options: [
    'A retirement account with tax-free withdrawals',
    'A type of loan',
    'A checking account',
    'A credit card'], answer: 0 },
  { q: 'What is inflation?', options: [
    'A decrease in prices',
    'An increase in prices over time',
    'A type of investment',
    'A bank fee'], answer: 1 },
  { q: 'What is diversification?', options: [
    'Putting all your money in one stock',
    'Spreading your money across different investments',
    'Spending all your money',
    'A type of loan'], answer: 1 },
  { q: 'What is a principal?', options: [
    'The interest you earn',
    'The original amount of money invested or borrowed',
    'A type of credit card',
    'A bank manager'], answer: 1 },
  { q: 'What is a credit limit?', options: [
    'The maximum you can borrow on a credit card',
    'The minimum you can borrow',
    'Your monthly income',
    'A type of loan'], answer: 0 },
  { q: 'What is a minimum payment?', options: [
    'The smallest amount you can pay on a loan or credit card to avoid penalties',
    'The most you can pay',
    'A type of investment',
    'A bank fee'], answer: 0 },
  { q: 'What is a liability?', options: [
    'Something valuable you own',
    'Money you owe',
    'A type of investment',
    'A savings account'], answer: 1 },
  { q: 'What is an asset?', options: [
    'Anything valuable you own',
    'Money you owe',
    'A type of loan',
    'A credit card'], answer: 0 },
  { q: 'What is a student loan?', options: [
    'Money you borrow for education',
    'A type of savings account',
    'A grant',
    'A credit card'], answer: 0 },
  { q: 'What is a financial advisor?', options: [
    'Someone who helps you manage your money',
    'A bank teller',
    'A loan officer',
    'A teacher'], answer: 0 },
  { q: 'What is a budget surplus?', options: [
    'Spending more than you earn',
    'Earning more than you spend',
    'A type of loan',
    'A credit card'], answer: 1 },
  { q: 'What is a budget deficit?', options: [
    'Spending more than you earn',
    'Earning more than you spend',
    'A type of investment',
    'A savings account'], answer: 0 },
  { q: 'What is a pay stub?', options: [
    'A summary of your earnings and deductions from your employer',
    'A type of loan',
    'A credit card statement',
    'A savings account'], answer: 0 },
  { q: 'What is a direct deposit?', options: [
    'A type of savings account',
    'When your paycheck is automatically deposited into your bank account',
    'A loan from your employer',
    'A credit card payment'], answer: 1 },
  { q: 'What is a financial goal?', options: [
    'A target to aim for when managing your money',
    'A type of loan',
    'A shopping list',
    'A bank account'], answer: 0 },
  { q: 'What is a grant?', options: [
    'Money given for education or projects that you don’t repay',
    'A type of loan',
    'A credit card',
    'A bank fee'], answer: 0 },
  { q: 'What is a net worth?', options: [
    'The value of what you own minus what you owe',
    'Your monthly income',
    'Your credit score',
    'Your savings account balance'], answer: 0 },
  { q: 'What is a Roth IRA?', options: [
    'A retirement account with tax-free withdrawals',
    'A type of loan',
    'A checking account',
    'A credit card'], answer: 0 },
  { q: 'What is a 401(k)?', options: [
    'A retirement savings plan from your employer',
    'A type of savings account',
    'A credit card',
    'A student loan'], answer: 0 },
];

function getRandomQuizQuestions(pool, n) {
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, n);
}

function Education() {
  const [selected, setSelected] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [quizSet, setQuizSet] = useState(() => getRandomQuizQuestions(quizQuestions, 10));
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
    if (idx === quizSet[quizIdx].answer) {
      setQuizScore(quizScore + 1);
    }
    setTimeout(() => {
      if (quizIdx + 1 < quizSet.length) {
        setQuizIdx(quizIdx + 1);
        setQuizAnswered(false);
      } else {
        setQuizFinished(true);
      }
    }, 900);
  }

  function resetQuiz() {
    setQuizSet(getRandomQuizQuestions(quizQuestions, 10));
    setQuizIdx(0);
    setQuizScore(0);
    setQuizAnswered(false);
    setQuizFinished(false);
  }

  return (
    <div className="education-container">
      <h2 className="education-title">Financial Education</h2>
      {/* Tips Carousel */}
      <section className="education-section">
        <strong className="education-section-title">Tip of the Day:</strong>
        <div className="education-tip-card">
          <h4 className="education-tip-title">{tips[selected].title}</h4>
          <p className="education-tip-content">{tips[selected].content}</p>
        </div>
        <div className="education-tip-controls">
          <div className="education-tip-dots">
            {tips.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSelected(idx)}
                className={idx === selected ? 'education-tip-dot active' : 'education-tip-dot'}
                aria-label={`Show tip ${idx + 1}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleRandomTip}
            className="education-tip-random-btn"
            aria-label="Show a random tip"
          >
            Surprise Me
          </button>
        </div>
        <div className="education-tip-progress">
          <div className="education-tip-progress-inner" style={{ width: `${((selected + 1) / tips.length) * 100}%` }} />
        </div>
        {showConfetti && (
          <div className="education-confetti">
            <span role="img" aria-label="confetti">🎉</span>
          </div>
        )}
      </section>
      {/* Interactive Quiz */}
      <section className="education-section">
        <h3 className="education-section-title">Quick Quiz</h3>
        {quizFinished ? (
          <div className="education-quiz-finished">
            <strong>Your Score: {quizScore} / {quizSet.length}</strong>
            <div style={{ marginTop: 10 }}>
              <button onClick={resetQuiz} className="education-quiz-retry-btn">Try Again</button>
            </div>
          </div>
        ) : (
          <div className="education-quiz-card">
            <div className="education-quiz-question">{quizSet[quizIdx].q}</div>
            <div className="education-quiz-options">
              {quizSet[quizIdx].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuizAnswer(idx)}
                  className={
                    'education-quiz-option' +
                    (quizAnswered && idx === quizSet[quizIdx].answer ? ' correct' : '') +
                    (quizAnswered && idx !== quizSet[quizIdx].answer ? ' faded' : '')
                  }
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
      <section className="education-section">
        <h3 className="education-section-title">Glossary</h3>
        <ul className="education-glossary-list">
          {glossary.map((item, idx) => (
            <li key={idx} className="education-glossary-item">
              <strong className="education-glossary-term">{item.term}:</strong> {item.def}
            </li>
          ))}
        </ul>
      </section>
      {/* Resource Library */}
      <section className="education-section">
        <h3 className="education-section-title">Learn More</h3>
        <ul className="education-resource-list">
          <li><a href="https://www.consumerfinance.gov/consumer-tools/money-as-you-grow/" target="_blank" rel="noopener noreferrer">Money As You Grow (CFPB)</a></li>
          <li><a href="https://www.mymoney.gov/" target="_blank" rel="noopener noreferrer">MyMoney.gov</a></li>
          <li><a href="https://www.practicalmoneyskills.com/" target="_blank" rel="noopener noreferrer">Practical Money Skills</a></li>
        </ul>
      </section>
      {/* Challenge */}
      <div className="education-challenge">
        <strong>Challenge:</strong> Try to apply one tip this week and share what you learned with a friend or family member!
      </div>
    </div>
  );
}

export default Education;