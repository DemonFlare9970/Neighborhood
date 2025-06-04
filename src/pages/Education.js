import React, { useState } from 'react';
import './home.css'; // Reuse home styles for consistency

// --- More content: Add more tips, quizzes, flashcards, glossary, and resources ---

// Add more tips
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
  { title: "Automate Your Bills", content: "Set up automatic payments for bills to avoid late fees and build your credit history." },
  { title: "Emergency Fund", content: "Aim to save at least 3 months of expenses for emergencies. Start small and build up!" },
  { title: "Track Subscriptions", content: "Review your subscriptions every few months. Cancel the ones you don’t use to save money." },
  { title: "Meal Planning", content: "Plan your meals for the week to save money and avoid food waste." },
  { title: "Financial Goals", content: "Write down your short-term and long-term financial goals. Review them monthly to stay motivated." },
  { title: "Credit Score", content: "Check your credit score regularly. Good credit can help you get better rates on loans and credit cards." },
  { title: "Invest Early", content: "The earlier you start investing, the more your money can grow thanks to compound interest." },
  { title: "Side Hustles", content: "Consider a side hustle to boost your income and reach your savings goals faster." },
  { title: "Budget Apps", content: "Use budgeting apps (like CoinFlow!) to track your spending and stay on top of your finances." },
  { title: "Financial Literacy", content: "Keep learning! Read books, watch videos, and take quizzes to improve your money skills." },
];

// Add quiz questions
const quizQuestions = [
  { q: 'What is the first step in making a budget?', options: ['Start saving', 'Track your income and expenses', 'Buy what you want', 'Get a credit card'], answer: 1 },
  { q: 'Why is it important to have an emergency fund?', options: ['To buy new clothes', 'For unexpected expenses', 'To lend to friends', 'To pay for vacations'], answer: 1 },
  { q: 'Which of these is a “need” rather than a “want”?', options: ['Streaming subscription', 'New phone', 'Groceries', 'Concert tickets'], answer: 2 },
  { q: 'What is a budget?', options: ['A plan for spending and saving', 'A type of bank account', 'A shopping list', 'A loan'], answer: 0 },
  { q: 'What is compound interest?', options: ['Interest on the original amount only', 'Interest on both the original amount and the interest earned', 'A type of loan', 'A tax'], answer: 1 },
  { q: 'What is a credit score used for?', options: ['To track your spending', 'To determine your trustworthiness for loans', 'To calculate taxes', 'To set your salary'], answer: 1 },
];

// Remove unused variable to fix build error

// Add more glossary terms
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
  { term: 'Checking Account', def: 'A bank account for daily spending and deposits.' },
  { term: 'Savings Account', def: 'A bank account that earns interest and is used to save money.' },
  { term: 'ATM', def: 'Automated Teller Machine; lets you withdraw or deposit money.' },
  { term: 'PIN', def: 'Personal Identification Number; a secret code for your bank card.' },
  { term: 'Bank Statement', def: 'A summary of all transactions in your account over a period.' },
  { term: 'Balance', def: 'The amount of money you have in your account.' },
  { term: 'Withdrawal', def: 'Taking money out of your account.' },
  { term: 'Deposit', def: 'Putting money into your account.' },
  { term: 'Loan', def: 'Money you borrow and must pay back, usually with interest.' },
  { term: 'Principal', def: 'The original amount of money invested or borrowed.' },
  { term: 'Scholarship', def: 'Money awarded for education that you don’t have to repay.' },
  { term: 'Grant', def: 'Money given for education or projects that you don’t repay.' },
  { term: 'Tuition', def: 'The cost of attending school or college.' },
  { term: 'Budget Surplus', def: 'Earning more than you spend.' },
  { term: 'Budget Deficit', def: 'Spending more than you earn.' },
  { term: 'Pay Stub', def: 'A summary of your earnings and deductions from your employer.' },
  { term: 'W-2', def: 'A tax form showing your earnings and taxes withheld.' },
  { term: 'Tax Return', def: 'A form you file to report income and calculate taxes owed or refunded.' },
  { term: 'IRS', def: 'Internal Revenue Service; the U.S. government agency for taxes.' },
  { term: '401(k)', def: 'A retirement savings plan from your employer.' },
  { term: 'Roth IRA', def: 'A retirement account with tax-free withdrawals.' },
  { term: 'Stock', def: 'Ownership in a company.' },
  { term: 'Bond', def: 'A type of loan you give to a company or government.' },
  { term: 'Mutual Fund', def: 'A pool of money from many investors to buy a mix of investments.' },
  { term: 'ETF', def: 'Exchange-Traded Fund; a type of investment fund traded on stock exchanges.' },
  { term: 'Portfolio', def: 'A collection of investments owned by an individual or organization.' },
  { term: 'Diversification', def: 'Spreading your money across different investments to reduce risk.' },
  { term: 'Inflation', def: 'An increase in prices over time.' },
  { term: 'Deflation', def: 'A decrease in prices over time.' },
  { term: 'Asset', def: 'Anything valuable you own.' },
  { term: 'Liability', def: 'Money you owe.' },
  { term: 'Net Income', def: 'Your income after taxes and deductions.' },
  { term: 'Gross Income', def: 'Your total income before taxes and deductions.' },
  { term: 'Paycheck', def: 'Money you receive for working.' },
  { term: 'Minimum Wage', def: 'The lowest hourly pay allowed by law.' },
  { term: 'Entrepreneur', def: 'Someone who starts and runs a business.' },
  { term: 'Side Hustle', def: 'A way to earn extra money outside your main job.' },
  { term: 'Gig Economy', def: 'A labor market of short-term, flexible jobs.' },
  { term: 'Freelancer', def: 'A person who works for themselves, not a company.' },
  { term: 'Credit Card', def: 'A card that lets you borrow money to make purchases.' },
  { term: 'Debit Card', def: 'A card that lets you spend money directly from your bank account.' },
  { term: 'Credit Limit', def: 'The maximum you can borrow on a credit card.' },
  { term: 'Minimum Payment', def: 'The smallest amount you can pay on a loan or credit card to avoid penalties.' },
  { term: 'APR', def: 'Annual Percentage Rate; the yearly interest rate on a loan or credit card.' },
  { term: 'Late Fee', def: 'A charge for not paying a bill on time.' },
  { term: 'Grace Period', def: 'Time after a bill is due when you can pay without penalty.' },
  { term: 'Bankruptcy', def: 'A legal process for people or businesses that cannot repay debts.' },
  { term: 'Foreclosure', def: 'When a lender takes property because the borrower didn’t pay the loan.' },
  { term: 'Repossession', def: 'Taking back property (like a car) when payments aren’t made.' },
  { term: 'Down Payment', def: 'Money paid upfront when buying something expensive, like a car or house.' },
  { term: 'Mortgage', def: 'A loan to buy a home.' },
  { term: 'Rent', def: 'Money paid to use someone else’s property.' },
  { term: 'Lease', def: 'A contract to rent property for a set time.' },
  { term: 'Utilities', def: 'Services like electricity, water, and gas.' },
  { term: 'Insurance', def: 'A contract that protects you from financial loss.' },
  { term: 'Premium', def: 'The amount you pay for insurance.' },
  { term: 'Deductible', def: 'The amount you pay before insurance covers the rest.' },
  { term: 'Claim', def: 'A request for payment from your insurance.' },
  { term: 'Beneficiary', def: 'The person who receives money from insurance or a will.' },
  { term: 'Will', def: 'A legal document stating who gets your property after you die.' },
  { term: 'Inheritance', def: 'Money or property received from someone who has died.' },
  { term: 'Charity', def: 'An organization that helps people in need.' },
  { term: 'Donation', def: 'Money or goods given to help others.' },
  { term: 'Scam', def: 'A dishonest scheme to steal money or information.' },
  { term: 'Fraud', def: 'Wrongful or criminal deception for financial gain.' },
  { term: 'Identity Theft', def: 'Stealing someone’s personal information to commit fraud.' },
  { term: 'Cybersecurity', def: 'Protecting computers and data from theft or damage.' },
  { term: 'Phishing', def: 'Tricking people into giving up personal information online.' },
  { term: 'Budget Category', def: 'A group for similar expenses, like food or transportation.' },
  { term: 'Recurring Expense', def: 'A regular payment, like rent or subscriptions.' },
  { term: 'Variable Expense', def: 'An expense that changes each month, like groceries.' },
  { term: 'Fixed Expense', def: 'An expense that stays the same each month, like rent.' },
  { term: 'Discretionary Spending', def: 'Money spent on non-essentials, like entertainment.' },
  { term: 'Needs', def: 'Things you must have, like food and shelter.' },
  { term: 'Wants', def: 'Things you would like to have, but don’t need.' },
  { term: 'Financial Literacy', def: 'Understanding how money works and how to manage it.' },
  { term: 'Financial Advisor', def: 'Someone who helps you manage your money.' },
  { term: 'Pay Yourself First', def: 'Saving a portion of your income before spending.' },
  { term: 'Emergency Contact', def: 'A person to reach in case of emergency.' },
  { term: 'Social Security Number', def: 'A unique number used for taxes and identification in the U.S.' },
  { term: 'Tax Deduction', def: 'An expense you can subtract from your income to lower your taxes.' },
  { term: 'Tax Credit', def: 'An amount that reduces the tax you owe.' },
  { term: 'Withholding', def: 'Money taken from your paycheck for taxes.' },
  { term: 'Gross Pay', def: 'Your pay before taxes and deductions.' },
  { term: 'Net Pay', def: 'Your pay after taxes and deductions.' },
  { term: 'Pay Period', def: 'The time covered by a paycheck.' },
  { term: 'Direct Debit', def: 'An automatic payment from your account for bills.' },
  { term: 'Mobile Banking', def: 'Managing your bank account using a smartphone app.' },
  { term: 'Online Banking', def: 'Managing your bank account using the internet.' },
  { term: 'Contactless Payment', def: 'Paying by tapping your card or phone.' },
  { term: 'Cryptocurrency', def: 'A digital currency, like Bitcoin.' },
  { term: 'Bitcoin', def: 'A popular type of cryptocurrency.' },
  { term: 'Blockchain', def: 'A digital ledger for recording transactions.' },
  { term: 'Venmo', def: 'A mobile app for sending and receiving money.' },
  { term: 'PayPal', def: 'A service for online payments and money transfers.' },
  { term: 'Zelle', def: 'A service for sending money between U.S. banks.' },
  { term: 'Apple Pay', def: 'A mobile payment service by Apple.' },
  { term: 'Google Pay', def: 'A mobile payment service by Google.' },
  { term: 'Financial Aid', def: 'Money to help pay for education.' },
  { term: 'Student Loan', def: 'Money you borrow for education.' },
  { term: 'Subsidized Loan', def: 'A student loan where the government pays the interest while you’re in school.' },
  { term: 'Unsubsidized Loan', def: 'A student loan where you pay all the interest.' },
  { term: 'Grace Period (Loan)', def: 'Time after graduation before you must start repaying a loan.' },
  { term: 'Default (Loan)', def: 'Failure to repay a loan as agreed.' },
  { term: 'Cosigner', def: 'Someone who agrees to repay a loan if you don’t.' },
  { term: 'Credit Bureau', def: 'A company that collects credit information.' },
  { term: 'FICO Score', def: 'A type of credit score used by lenders.' },
  { term: 'Annual Fee', def: 'A yearly charge for having a credit card.' },
  { term: 'Transaction Fee', def: 'A charge for making a transaction.' },
  { term: 'Foreign Transaction Fee', def: 'A charge for using your card in another country.' },
  { term: 'Rewards Program', def: 'A system where you earn points or cash back for spending.' },
  { term: 'Cash Back', def: 'A credit card reward that gives you money back.' },
  { term: 'Point', def: 'A unit earned in a rewards program.' },
  { term: 'Redemption', def: 'Exchanging points or rewards for cash or prizes.' },
  { term: 'Introductory Rate', def: 'A low interest rate offered for a short time.' },
  { term: 'Balance Transfer', def: 'Moving debt from one credit card to another.' },
  { term: 'Credit Utilization', def: 'The percentage of your credit limit you are using.' },
  { term: 'Prepaid Card', def: 'A card you load with money to spend.' },
  { term: 'Money Order', def: 'A way to send money that’s more secure than cash.' },
  { term: 'Certified Check', def: 'A check guaranteed by a bank.' },
  { term: 'Wire Transfer', def: 'An electronic way to send money.' },
  { term: 'Overtime', def: 'Extra pay for working more than usual hours.' },
  { term: 'Commission', def: 'Earnings based on sales or performance.' },
  { term: 'Tip', def: 'Extra money given for good service.' },
  { term: 'Allowance (Budget)', def: 'A set amount of money for a specific purpose.' },
  { term: 'Financial Planner', def: 'A professional who helps you create a plan for your money.' },
  { term: 'Estate', def: 'Everything a person owns at death.' },
  { term: 'Trust', def: 'A legal arrangement for managing assets.' },
  { term: 'Power of Attorney', def: 'A legal document giving someone authority to act for you.' },
  { term: 'Notary', def: 'A person authorized to witness signatures.' },
  { term: 'Lien', def: 'A legal claim on property for unpaid debt.' },
  { term: 'Repossession', def: 'Taking back property when payments aren’t made.' },
  { term: 'Depreciation', def: 'A decrease in the value of an asset over time.' },
  { term: 'Appreciation', def: 'An increase in the value of an asset over time.' },
  { term: 'Liquidity', def: 'How easily an asset can be turned into cash.' },
  { term: 'Capital Gain', def: 'Profit from selling an asset for more than you paid.' },
  { term: 'Capital Loss', def: 'Loss from selling an asset for less than you paid.' },
  { term: 'Dividend', def: 'A payment to shareholders from a company’s profits.' },
  { term: 'Shareholder', def: 'Someone who owns stock in a company.' },
  { term: 'IPO', def: 'Initial Public Offering; when a company sells stock to the public for the first time.' },
  { term: 'Bull Market', def: 'A period when stock prices are rising.' },
  { term: 'Bear Market', def: 'A period when stock prices are falling.' },
  { term: 'Market Index', def: 'A measure of the performance of a group of stocks.' },
  { term: 'S&P 500', def: 'A stock market index of 500 large U.S. companies.' },
  { term: 'Dow Jones', def: 'A stock market index of 30 major U.S. companies.' },
  { term: 'NASDAQ', def: 'A stock market index focused on technology companies.' },
  { term: 'Blue Chip Stock', def: 'Stock in a large, well-established company.' },
  { term: 'Penny Stock', def: 'Stock that trades for less than $5 per share.' },
  { term: 'Roth 401(k)', def: 'A retirement account combining features of Roth IRA and 401(k).' },
  { term: 'Traditional IRA', def: 'A retirement account with tax-deferred growth.' },
  { term: 'Social Security', def: 'A U.S. government program that provides income for retirees.' },
  { term: 'Medicare', def: 'A U.S. government health insurance program for people 65 and older.' },
  { term: 'Medicaid', def: 'A U.S. government health insurance program for low-income people.' },
  { term: 'Flexible Spending Account', def: 'An account to save pre-tax money for medical expenses.' },
  { term: 'Health Savings Account', def: 'An account to save pre-tax money for health expenses.' },
  { term: 'Premium (Investment)', def: 'The amount paid for an investment above its face value.' },
  { term: 'Yield', def: 'The income return on an investment.' },
  { term: 'Risk Tolerance', def: 'How much risk you are willing to take with investments.' },
  { term: 'Time Horizon', def: 'How long you plan to invest before needing the money.' },
  { term: 'Financial Independence', def: 'Having enough money to support yourself without working.' },
  { term: 'Retirement', def: 'When you stop working, usually after a long career.' },
  { term: 'Pension', def: 'A regular payment made during retirement from an employer.' },
  { term: 'Annuity', def: 'A contract that pays you money regularly, often for retirement.' },
  { term: 'Inflation Rate', def: 'The percentage increase in prices over time.' },
  { term: 'Cost of Living', def: 'The amount of money needed to cover basic expenses.' },
  { term: 'Living Wage', def: 'The minimum income needed to meet basic needs.' },
  { term: 'Disposable Income', def: 'Money left after taxes to spend or save.' },
  { term: 'Discretionary Income', def: 'Money left after paying for essentials.' },
  { term: 'Payday Loan', def: 'A short-term, high-interest loan.' },
  { term: 'Predatory Lending', def: 'Unfair or abusive loan practices.' },
  { term: 'APR (Loan)', def: 'Annual Percentage Rate; the yearly cost of borrowing money.' },
  { term: 'Refinance', def: 'Replacing an old loan with a new one, usually at a better rate.' },
  { term: 'Amortization', def: 'Paying off a loan over time with regular payments.' },
  { term: 'Escrow', def: 'Money held by a third party until a condition is met.' },
  { term: 'Title', def: 'Legal ownership of property.' },
  { term: 'Deed', def: 'A legal document showing ownership of property.' },
  { term: 'Closing Costs', def: 'Fees paid when buying or selling property.' },
  { term: 'Home Equity', def: 'The value of your home minus what you owe on it.' },
  { term: 'Appraisal', def: 'An estimate of a property’s value.' },
  { term: 'Real Estate Agent', def: 'A person who helps buy or sell property.' },
  { term: 'Landlord', def: 'A person who rents out property.' },
  { term: 'Tenant', def: 'A person who rents property from a landlord.' },
  { term: 'Eviction', def: 'Removal of a tenant from rental property.' },
  { term: 'Security Deposit', def: 'Money paid to a landlord to cover damages or unpaid rent.' },
  { term: 'Utilities (Home)', def: 'Services like water, electricity, and gas for a home.' },
  { term: 'Maintenance', def: 'Upkeep and repairs for property or equipment.' },
  { term: 'Warranty', def: 'A guarantee that a product will work as promised.' },
  { term: 'Recall', def: 'A request to return a product due to safety issues.' },
  { term: 'Consumer Protection', def: 'Laws and organizations that help protect buyers.' },
  { term: 'Better Business Bureau', def: 'An organization that rates businesses and handles complaints.' },
  { term: 'Credit Report', def: 'A record of your credit history.' },
  { term: 'Credit Freeze', def: 'A way to restrict access to your credit report.' },
  { term: 'Fraud Alert', def: 'A warning on your credit report about possible identity theft.' },
  { term: 'Opt Out', def: 'To choose not to participate in something.' },
  { term: 'Default (Credit)', def: 'Failure to repay credit as agreed.' },
  { term: 'Charge-Off', def: 'A debt a lender believes will not be repaid.' },
  { term: 'Collections', def: 'Efforts to collect unpaid debts.' },
  { term: 'Settlement', def: 'An agreement to pay less than the full amount owed.' },
  { term: 'Repossession (Car)', def: 'Taking back a car when payments aren’t made.' },
  { term: 'Title Loan', def: 'A loan using your car title as collateral.' },
  { term: 'Pawn Shop', def: 'A place to get a loan using personal items as collateral.' },
  { term: 'Collateral', def: 'Something valuable pledged for a loan.' },
  { term: 'Unsecured Loan', def: 'A loan not backed by collateral.' },
  { term: 'Secured Loan', def: 'A loan backed by collateral.' },
  { term: 'Installment Loan', def: 'A loan repaid with regular payments.' },
  { term: 'Revolving Credit', def: 'Credit that can be used repeatedly up to a limit.' },
  { term: 'Line of Credit', def: 'A flexible loan you can draw from as needed.' },
  { term: 'Grace Period (Credit)', def: 'Time after a credit card bill is due when you can pay without penalty.' },
  { term: 'Credit Counseling', def: 'Advice to help manage debt and credit.' },
  { term: 'Debt Consolidation', def: 'Combining several debts into one payment.' },
  { term: 'Bank Draft', def: 'A check drawn by a bank on its own funds.' },
  { term: 'Certified Funds', def: 'Money guaranteed by a bank.' },
  { term: 'Money Market Account', def: 'A savings account with higher interest and limited transactions.' },
  { term: 'CD (Certificate of Deposit)', def: 'A savings account with a fixed term and interest rate.' },
  { term: 'Treasury Bond', def: 'A long-term government bond.' },
  { term: 'Municipal Bond', def: 'A bond issued by a city or state.' },
  { term: 'Corporate Bond', def: 'A bond issued by a company.' },
  { term: 'Callable Bond', def: 'A bond that can be redeemed by the issuer before maturity.' },
  { term: 'Zero-Coupon Bond', def: 'A bond sold at a discount that pays no interest until maturity.' },
  { term: 'Yield Curve', def: 'A graph showing interest rates for bonds of different maturities.' },
  { term: 'Inflation-Protected Bond', def: 'A bond that increases payments with inflation.' },
  { term: 'Junk Bond', def: 'A high-risk, high-yield bond.' },
  { term: 'Callable CD', def: 'A certificate of deposit that can be redeemed early by the bank.' },
  { term: 'Brokerage Account', def: 'An account to buy and sell investments.' },
  { term: 'Margin Account', def: 'An account that lets you borrow money to buy investments.' },
  { term: 'Short Selling', def: 'Selling borrowed stock, hoping to buy it back at a lower price.' },
  { term: 'Options', def: 'Contracts giving the right to buy or sell an asset at a set price.' },
  { term: 'Futures', def: 'Contracts to buy or sell an asset at a future date.' },
  { term: 'Derivatives', def: 'Financial contracts whose value depends on other assets.' },
  { term: 'Hedge', def: 'An investment to reduce risk.' },
  { term: 'Speculation', def: 'Risky investment hoping for big gains.' },
  { term: 'Arbitrage', def: 'Profiting from price differences in different markets.' },
  { term: 'Market Order', def: 'An order to buy or sell immediately at the best price.' },
  { term: 'Limit Order', def: 'An order to buy or sell at a specific price.' },
  { term: 'Stop Order', def: 'An order to buy or sell when a price is reached.' },
  { term: 'Bid Price', def: 'The price a buyer is willing to pay.' },
  { term: 'Ask Price', def: 'The price a seller wants to receive.' },
  { term: 'Spread', def: 'The difference between bid and ask prices.' },
  { term: 'Liquidity (Market)', def: 'How easily assets can be bought or sold.' },
  { term: 'Volatility', def: 'How much prices move up and down.' },
  { term: 'Market Capitalization', def: 'The total value of a company’s shares.' },
  { term: 'Dividend Yield', def: 'A stock’s annual dividend divided by its price.' },
  { term: 'Earnings Per Share', def: 'A company’s profit divided by its number of shares.' },
  { term: 'Price-to-Earnings Ratio', def: 'A measure of a stock’s price compared to its earnings.' },
  { term: 'Return on Investment', def: 'A measure of how much money you make on an investment.' },
  { term: 'Alpha', def: 'A measure of an investment’s performance compared to a benchmark.' },
  { term: 'Beta', def: 'A measure of an investment’s volatility compared to the market.' },
  { term: 'Sharpe Ratio', def: 'A measure of risk-adjusted return.' },
  { term: 'Standard Deviation', def: 'A measure of how spread out numbers are.' },
  { term: 'Correlation', def: 'How two investments move in relation to each other.' },
  { term: 'Benchmark', def: 'A standard for comparing investment performance.' },
  { term: 'Expense Ratio', def: 'The annual fee for managing a fund.' },
  { term: 'Load', def: 'A sales charge for buying or selling a fund.' },
  { term: 'No-Load Fund', def: 'A fund with no sales charge.' },
  { term: 'Index Fund', def: 'A fund that tracks a market index.' },
  { term: 'Active Management', def: 'Trying to beat the market by picking investments.' },
  { term: 'Passive Management', def: 'Trying to match the market by tracking an index.' },
  { term: 'Robo-Advisor', def: 'An automated service that manages investments.' },
  { term: 'Financial Technology (FinTech)', def: 'Technology that improves financial services.' },
  { term: 'Crowdfunding', def: 'Raising money from many people, usually online.' },
  { term: 'Peer-to-Peer Lending', def: 'Borrowing and lending money directly between people.' },
  { term: 'Microloan', def: 'A small loan, often for entrepreneurs.' },
  { term: 'Remittance', def: 'Money sent to family or friends in another country.' },
  { term: 'Exchange Rate', def: 'The value of one currency compared to another.' },
  { term: 'Foreign Currency', def: 'Money used in another country.' },
  { term: 'Currency Conversion', def: 'Changing money from one currency to another.' },
  { term: 'Travel Insurance', def: 'Insurance that covers problems while traveling.' },
  { term: 'Trip Cancellation Insurance', def: 'Insurance that pays if you have to cancel a trip.' },
  { term: 'Auto Insurance', def: 'Insurance for your car.' },
  { term: 'Homeowners Insurance', def: 'Insurance for your home.' },
  { term: 'Renters Insurance', def: 'Insurance for people who rent their home.' },
  { term: 'Life Insurance', def: 'Insurance that pays money to your family if you die.' },
  { term: 'Disability Insurance', def: 'Insurance that pays if you can’t work due to illness or injury.' },
  { term: 'Long-Term Care Insurance', def: 'Insurance for extended medical care.' },
  { term: 'Umbrella Policy', def: 'Extra insurance for major claims or lawsuits.' },
  { term: 'Beneficiary (Insurance)', def: 'The person who receives insurance money.' },
  { term: 'Premium (Insurance)', def: 'The amount you pay for insurance.' },
  { term: 'Deductible (Insurance)', def: 'The amount you pay before insurance pays.' },
  { term: 'Claim (Insurance)', def: 'A request for payment from insurance.' },
  { term: 'Underwriting', def: 'The process of evaluating risk for insurance.' },
  { term: 'Actuary', def: 'A person who calculates insurance risks and premiums.' },
  { term: 'Policyholder', def: 'The person who owns an insurance policy.' },
  { term: 'Coverage', def: 'The amount of protection provided by insurance.' },
  { term: 'Exclusion', def: 'Something not covered by insurance.' },
  { term: 'Rider', def: 'An addition to an insurance policy.' },
  { term: 'Surrender Value', def: 'The amount you get if you cancel a life insurance policy.' },
  { term: 'Whole Life Insurance', def: 'Life insurance that lasts your entire life.' },
  { term: 'Term Life Insurance', def: 'Life insurance for a set period.' },
  { term: 'Universal Life Insurance', def: 'Flexible life insurance with savings.' },
  { term: 'Variable Life Insurance', def: 'Life insurance with investment options.' },
  { term: 'Group Insurance', def: 'Insurance offered to a group, like employees.' },
  { term: 'COBRA', def: 'A law allowing you to keep health insurance after leaving a job.' },
  { term: 'Medigap', def: 'Insurance that covers costs not paid by Medicare.' },
  { term: 'Affordable Care Act', def: 'A U.S. law to make health insurance more affordable.' },
  { term: 'Health Maintenance Organization (HMO)', def: 'A health insurance plan with a network of providers.' },
  { term: 'Preferred Provider Organization (PPO)', def: 'A health insurance plan with more provider choices.' },
  { term: 'High-Deductible Health Plan', def: 'A health plan with lower premiums and higher deductibles.' },
  { term: 'Out-of-Pocket Maximum', def: 'The most you pay for health care in a year.' },
  { term: 'Copayment', def: 'A fixed amount you pay for a service.' },
  { term: 'Coinsurance', def: 'A percentage you pay for a service after deductible.' },
  { term: 'Provider', def: 'A person or place that gives health care.' },
  { term: 'Network', def: 'Health care providers contracted with your insurance.' },
  { term: 'Referral', def: 'A recommendation to see a specialist.' },
  { term: 'Preauthorization', def: 'Approval from insurance before getting a service.' },
  { term: 'Claim Number', def: 'A unique number for an insurance claim.' },
  { term: 'Explanation of Benefits', def: 'A statement showing what insurance paid.' },
  { term: 'Flexible Premium', def: 'A premium that can change over time.' },
  { term: 'Fixed Premium', def: 'A premium that stays the same.' },
  { term: 'Variable Premium', def: 'A premium that can change based on investment performance.' },
  { term: 'Policy Term', def: 'The length of time an insurance policy is in effect.' },
  { term: 'Renewal', def: 'Extending an insurance policy for another term.' },
  { term: 'Lapse', def: 'When an insurance policy ends due to nonpayment.' },
  { term: 'Grace Period (Insurance)', def: 'Extra time to pay your insurance premium.' },
  { term: 'Insured', def: 'The person covered by insurance.' },
  { term: 'Insurer', def: 'The company providing insurance.' },
  { term: 'Policy Number', def: 'A unique number for your insurance policy.' },
  { term: 'Claimant', def: 'A person making an insurance claim.' },
  { term: 'Adjuster', def: 'A person who investigates insurance claims.' },
  { term: 'Settlement (Insurance)', def: 'The amount paid to settle an insurance claim.' },
  { term: 'Subrogation', def: 'When an insurer seeks reimbursement from a third party.' },
  { term: 'Indemnity', def: 'Compensation for loss or damage.' },
  { term: 'Peril', def: 'A cause of loss or damage.' },
  { term: 'Hazard', def: 'A condition that increases the chance of loss.' },
  { term: 'Risk', def: 'The chance of loss or injury.' },
  { term: 'Loss', def: 'The amount of damage or injury.' },
  { term: 'Claim Form', def: 'A document to request insurance payment.' },
  { term: 'Proof of Loss', def: 'Evidence of a loss for an insurance claim.' },
  { term: 'Underinsured', def: 'Not having enough insurance coverage.' },
  { term: 'Overinsured', def: 'Having more insurance than needed.' },
  { term: 'Self-Insured', def: 'Paying for losses yourself instead of buying insurance.' },
  { term: 'Third-Party Insurance', def: 'Insurance that covers damage to others.' },
  { term: 'First-Party Insurance', def: 'Insurance that covers your own losses.' },
  { term: 'Reinsurance', def: 'Insurance for insurance companies.' },
  { term: 'Act of God', def: 'A natural event not caused by people.' },
  { term: 'Force Majeure', def: 'An event beyond control that prevents fulfilling a contract.' },
  { term: 'Mitigation', def: 'Steps to reduce loss or damage.' },
  { term: 'Salvage', def: 'Property saved from loss or damage.' },
  { term: 'Total Loss', def: 'When property is damaged beyond repair.' },
  { term: 'Partial Loss', def: 'When property is only partly damaged.' },
  { term: 'Actual Cash Value', def: 'The value of property minus depreciation.' },
  { term: 'Replacement Cost', def: 'The cost to replace damaged property.' },
  { term: 'Agreed Value', def: 'A set value for property agreed by insurer and insured.' },
  { term: 'Stated Value', def: 'A value stated in the insurance policy.' },
  { term: 'Valuation', def: 'The process of determining value.' },
  { term: 'Appraiser', def: 'A person who estimates value.' },
  { term: 'Depreciation Schedule', def: 'A plan for reducing value over time.' },
  { term: 'Salvage Value', def: 'The value of property after a loss.' },
  { term: 'Replacement Value', def: 'The cost to replace property.' },
  { term: 'Market Value', def: 'The price property would sell for.' },
  { term: 'Insurable Interest', def: 'A financial interest in property covered by insurance.' },
  { term: 'Moral Hazard', def: 'When someone takes more risks because they have insurance.' },
  { term: 'Morale Hazard', def: 'Carelessness that increases risk because of insurance.' },
  { term: 'Named Peril', def: 'A specific risk listed in an insurance policy.' },
  { term: 'Open Peril', def: 'Any risk not excluded by an insurance policy.' },
  { term: 'All-Risk Policy', def: 'Insurance covering all risks except those excluded.' },
  { term: 'Excess Insurance', def: 'Insurance that pays after other insurance is used.' },
  { term: 'Primary Insurance', def: 'Insurance that pays first in a claim.' },
  { term: 'Secondary Insurance', def: 'Insurance that pays after primary insurance.' },
  { term: 'Umbrella Insurance', def: 'Extra liability insurance for major claims.' },
  { term: 'Aggregate Limit', def: 'The maximum an insurer will pay during a policy period.' },
  { term: 'Per Occurrence Limit', def: 'The maximum paid for a single event.' },
  { term: 'Per Person Limit', def: 'The maximum paid for one person.' },
  { term: 'Lifetime Limit', def: 'The maximum paid over a person’s life.' },
  { term: 'Policy Exclusion', def: 'Something not covered by an insurance policy.' },
  { term: 'Policy Endorsement', def: 'A change or addition to an insurance policy.' },
  { term: 'Policy Rider', def: 'An addition to an insurance policy.' },
  { term: 'Policy Schedule', def: 'A list of coverage and limits in a policy.' },
  { term: 'Declarations Page', def: 'A summary of insurance coverage.' },
  { term: 'Certificate of Insurance', def: 'Proof of insurance coverage.' },
  { term: 'Binder', def: 'Temporary proof of insurance.' },
  { term: 'Policy Renewal', def: 'Extending an insurance policy for another term.' },
  { term: 'Policy Lapse', def: 'When insurance ends due to nonpayment.' },
  { term: 'Policyholder Service', def: 'Help provided to insurance customers.' },
  { term: 'Claims Adjuster', def: 'A person who evaluates insurance claims.' },
  { term: 'Loss Adjuster', def: 'A person who investigates insurance losses.' },
  { term: 'Public Adjuster', def: 'A person hired by the policyholder to settle a claim.' },
  { term: 'Insurance Broker', def: 'A person who sells insurance from many companies.' },
  { term: 'Insurance Agent', def: 'A person who sells insurance from one company.' },
  { term: 'Captive Agent', def: 'An insurance agent who works for one company.' },
  { term: 'Independent Agent', def: 'An insurance agent who sells for many companies.' },
  { term: 'Surplus Lines Insurance', def: 'Insurance for unusual or high-risk situations.' },
  { term: 'Admitted Carrier', def: 'An insurer licensed in a state.' },
  { term: 'Non-Admitted Carrier', def: 'An insurer not licensed in a state.' },
  { term: 'Guaranty Association', def: 'A group that protects policyholders if an insurer fails.' },
  { term: 'Risk Pool', def: 'A group sharing insurance risk.' },
  { term: 'Self-Insured Retention', def: 'The amount you pay before insurance pays.' },
  { term: 'Coinsurance Clause', def: 'A rule requiring you to insure a certain percentage of value.' },
  { term: 'Pro Rata', def: 'A proportional share.' },
  { term: 'Subrogation Clause', def: 'A rule allowing an insurer to recover costs from others.' },
  { term: 'Waiver of Subrogation', def: 'Giving up the right to recover costs from others.' },
  { term: 'Indemnification', def: 'Compensation for harm or loss.' },
  { term: 'Hold Harmless Agreement', def: 'A contract where one party agrees not to hold the other responsible.' },
  { term: 'Surety Bond', def: 'A promise to pay if someone fails to meet an obligation.' },
  { term: 'Fidelity Bond', def: 'Insurance protecting against employee dishonesty.' },
  { term: 'Performance Bond', def: 'A bond guaranteeing work will be completed.' },
  { term: 'Bid Bond', def: 'A bond guaranteeing a contractor will accept a job if selected.' },
  { term: 'Payment Bond', def: 'A bond guaranteeing payment to workers and suppliers.' },
  { term: 'Completion Bond', def: 'A bond guaranteeing a project will be finished.' },
  { term: 'Bail Bond', def: 'Money paid to release someone from jail until trial.' },
  { term: 'Indemnitor', def: 'A person who promises to pay for loss or damage.' },
  { term: 'Obligee', def: 'A person to whom an obligation is owed.' },
  { term: 'Obligor', def: 'A person who has an obligation to another.' },
  { term: 'Principal (Bond)', def: 'The person who must perform an obligation.' },
  { term: 'Surety', def: 'A person or company that guarantees an obligation.' },
  { term: 'Bond Premium', def: 'The cost of a bond.' },
  { term: 'Bond Term', def: 'The length of time a bond is in effect.' },
  { term: 'Bond Underwriter', def: 'A person who evaluates risk for a bond.' },
  { term: 'Bondholder', def: 'A person who owns a bond.' },
  { term: 'Callable Security', def: 'A security that can be redeemed before maturity.' },
  { term: 'Convertible Bond', def: 'A bond that can be exchanged for stock.' },
  { term: 'Debenture', def: 'An unsecured bond.' },
  { term: 'Sinking Fund', def: 'Money set aside to pay off debt.' },
  { term: 'Zero-Balance Account', def: 'An account that is regularly emptied.' },
  { term: 'Sweep Account', def: 'An account that moves excess funds to another account.' },
  { term: 'Escrow Account', def: 'An account for holding money until a condition is met.' },
  { term: 'Trust Account', def: 'An account managed by one person for another.' },
  { term: 'Custodial Account', def: 'An account managed for a minor.' },
  { term: 'Joint Account', def: 'An account shared by two or more people.' },
  { term: 'Individual Account', def: 'An account owned by one person.' },
  { term: 'Authorized User', def: 'A person allowed to use someone else’s account.' },
  { term: 'Power of Attorney (Banking)', def: 'A legal document allowing someone to act for you in banking.' },
  { term: 'Bank Routing Number', def: 'A nine-digit code identifying a bank.' },
  { term: 'Account Number', def: 'A unique number for your bank account.' },
  { term: 'ACH Transfer', def: 'An electronic bank-to-bank payment.' },
  { term: 'Wire Room', def: 'A bank department handling wire transfers.' },
  { term: 'Bank Examiner', def: 'A person who inspects banks for safety and soundness.' },
  { term: 'Federal Reserve', def: 'The central bank of the United States.' },
  { term: 'FDIC', def: 'Federal Deposit Insurance Corporation; insures bank deposits.' },
  { term: 'NCUA', def: 'National Credit Union Administration; insures credit union deposits.' },
  { term: 'Credit Union', def: 'A nonprofit financial institution owned by its members.' },
  { term: 'Bank Charter', def: 'A license to operate a bank.' },
  { term: 'Branch', def: 'A local office of a bank.' },
  { term: 'Teller', def: 'A bank employee who handles transactions.' },
  { term: 'Safe Deposit Box', def: 'A secure box in a bank for valuables.' },
  { term: 'Overdraft Protection', def: 'A service that covers transactions when you don’t have enough money.' },
  { term: 'Stop Payment', def: 'An order to a bank not to pay a check.' },
  { term: 'Postdated Check', def: 'A check dated for the future.' },
  { term: 'Stale Check', def: 'A check not cashed within a certain time.' },
  { term: 'Endorsement', def: 'Signing the back of a check to deposit or cash it.' },
  { term: 'Blank Endorsement', def: 'Signing your name only on a check.' },
  { term: 'Restrictive Endorsement', def: 'An endorsement limiting how a check can be used.' },
  { term: 'Special Endorsement', def: 'An endorsement transferring a check to another person.' },
  { term: 'Check Register', def: 'A record of all checks written and deposits made.' },
  { term: 'Reconciliation', def: 'Comparing your records to the bank statement.' },
  { term: 'Outstanding Check', def: 'A check that has not yet cleared the bank.' },
  { term: 'Canceled Check', def: 'A check that has been paid and returned by the bank.' },
  { term: 'Bounced Check', def: 'A check that cannot be processed due to insufficient funds.' },
  { term: 'NSF', def: 'Non-Sufficient Funds; not enough money in the account.' },
  { term: 'Returned Item Fee', def: 'A fee for a check that cannot be processed.' },
  { term: 'Check Number', def: 'A unique number identifying a check.' },
  { term: 'MICR', def: 'Magnetic Ink Character Recognition; used to process checks.' },
  { term: 'Remote Deposit', def: 'Depositing a check using a smartphone or scanner.' },
  { term: 'Mobile Deposit', def: 'Depositing a check using a mobile app.' },
  { term: 'Bank Statement Cycle', def: 'The period covered by a bank statement.' },
  { term: 'Account Reconciliation', def: 'Making sure your records match the bank’s.' },
  { term: 'Bank Fee', def: 'A charge for using bank services.' },
  { term: 'Monthly Maintenance Fee', def: 'A monthly charge for keeping an account open.' },
  { term: 'ATM Fee', def: 'A charge for using an ATM.' },
  { term: 'Paper Statement Fee', def: 'A charge for receiving paper statements.' },
  { term: 'Electronic Statement', def: 'A digital version of your bank statement.' },
  { term: 'Statement Balance', def: 'The balance shown on your bank statement.' },
  { term: 'Available Balance', def: 'The amount you can spend or withdraw.' },
  { term: 'Pending Transaction', def: 'A transaction that has not yet cleared.' },
  { term: 'Hold', def: 'A delay in making funds available.' },
  { term: 'Provisional Credit', def: 'Temporary credit while a transaction is investigated.' },
  { term: 'Dispute', def: 'Questioning a transaction or charge.' },
  { term: 'Chargeback', def: 'A reversal of a credit card transaction.' },
  { term: 'Merchant', def: 'A person or business that accepts payments.' },
  { term: 'Point of Sale', def: 'Where a sale takes place.' },
  { term: 'POS Terminal', def: 'A device for processing card payments.' },
  { term: 'EMV Chip', def: 'A chip in cards for secure payments.' },
  { term: 'Contactless Card', def: 'A card you tap to pay.' },
  { term: 'Tokenization', def: 'Replacing sensitive data with a unique code.' },
  { term: 'PCI Compliance', def: 'Following rules to protect card data.' },
  { term: 'Payment Gateway', def: 'A service that processes online payments.' },
  { term: 'Acquirer', def: 'A bank that processes card payments for merchants.' },
  { term: 'Issuer', def: 'A bank that issues credit or debit cards.' },
  { term: 'Interchange Fee', def: 'A fee paid between banks for card transactions.' },
  { term: 'Settlement (Payment)', def: 'Completing a payment transaction.' },
  { term: 'Batch Processing', def: 'Processing many transactions at once.' },
  { term: 'Authorization', def: 'Approval for a payment.' },
  { term: 'Decline', def: 'A refused payment.' },
  { term: 'Charge Slip', def: 'A receipt for a card transaction.' },
  { term: 'Tip (Payment)', def: 'Extra money given for service.' },
  { term: 'Split Payment', def: 'Paying with more than one method.' },
  { term: 'Partial Payment', def: 'Paying less than the full amount owed.' },
  { term: 'Overpayment', def: 'Paying more than the amount due.' },
  { term: 'Underpayment', def: 'Paying less than the amount due.' },
  { term: 'Refund', def: 'Money returned for a purchase.' },
  { term: 'Store Credit', def: 'Credit to use at a specific store.' },
  { term: 'Gift Card', def: 'A prepaid card for purchases.' },
  { term: 'Loyalty Program', def: 'A program rewarding repeat customers.' },
  { term: 'Rewards Card', def: 'A card that earns points or cash back.' },
  { term: 'Cashier’s Check', def: 'A check guaranteed by a bank.' },
  { term: 'Traveler’s Check', def: 'A check used as cash while traveling.' },
  { term: 'Foreign Exchange', def: 'Trading one currency for another.' },
  { term: 'Currency Symbol', def: 'A sign representing a currency.' },
  { term: 'Currency Code', def: 'A three-letter code for a currency.' },
  { term: 'Exchange Fee', def: 'A charge for converting currency.' },
  { term: 'Remittance Transfer', def: 'Sending money to another country.' },
  { term: 'Wire Room (Bank)', def: 'A department handling wire transfers.' },

  { term: 'Bank Draft (Payment)', def: 'A check drawn by a bank.' },
  { term: 'Standing Order', def: 'An instruction to make regular payments.' },
  { term: 'Recurring Payment', def: 'A payment made regularly.' },
  { term: 'One-Time Payment', def: 'A payment made once.' },
  { term: 'Payment Processor', def: 'A company that handles payments.' },
  { term: 'Payment Network', def: 'A system for processing payments.' },
  { term: 'Clearing', def: 'Settling a payment between banks.' },
  { term: 'Settlement Date', def: 'The date a payment is completed.' },
  { term: 'ACH', def: 'Automated Clearing House; a network for electronic payments.' },
  { term: 'ACH Credit', def: 'An electronic payment to your account.' },
  { term: 'ACH Debit', def: 'An electronic payment from your account.' },
  { term: 'ACH Return', def: 'A returned ACH payment.' },
  { term: 'ACH Reversal', def: 'A reversed ACH payment.' },
  { term: 'ACH Block', def: 'A service to prevent unauthorized ACH debits.' },
  { term: 'ACH Filter', def: 'A service to allow only certain ACH debits.' },
  { term: 'ACH Origination', def: 'Creating an ACH payment.' },
  { term: 'ACH Settlement', def: 'Completing an ACH payment.' },
  { term: 'ACH Trace Number', def: 'A unique number for an ACH payment.' },
  { term: 'ACH Operator', def: 'A central facility for ACH payments.' },
  { term: 'ACH Network', def: 'The system for ACH payments.' },
  { term: 'ACH File', def: 'A file containing ACH payment instructions.' },
  { term: 'ACH Batch', def: 'A group of ACH payments.' },
  { term: 'ACH Entry', def: 'A single ACH payment.' },
  { term: 'ACH Addenda', def: 'Additional information for an ACH payment.' },
  { term: 'ACH Return Code', def: 'A code explaining why an ACH payment was returned.' },
  { term: 'ACH Prenote', def: 'A test ACH payment.' },
  { term: 'ACH Notification of Change', def: 'A notice of a change to ACH information.' },
  { term: 'ACH Settlement Date', def: 'The date an ACH payment is settled.' },
  { term: 'ACH Effective Entry Date', def: 'The date an ACH payment is effective.' },
  { term: 'ACH Company ID', def: 'A unique ID for an ACH originator.' },
  { term: 'ACH SEC Code', def: 'A code for the type of ACH payment.' },
  { term: 'ACH Standard Entry Class', def: 'A code for the type of ACH payment.' },
  { term: 'ACH CCD', def: 'Corporate Credit or Debit ACH payment.' },
  { term: 'ACH PPD', def: 'Prearranged Payment and Deposit ACH payment.' },
  { term: 'ACH WEB', def: 'Internet-initiated ACH payment.' },
  { term: 'ACH TEL', def: 'Telephone-initiated ACH payment.' },
  { term: 'ACH ARC', def: 'Accounts Receivable Entry ACH payment.' },
  { term: 'ACH BOC', def: 'Back Office Conversion ACH payment.' },
  { term: 'ACH POP', def: 'Point of Purchase ACH payment.' },
  { term: 'ACH RCK', def: 'Re-presented Check Entry ACH payment.' },
  { term: 'ACH XCK', def: 'Destroyed Check Entry ACH payment.' },
  { term: 'ACH IAT', def: 'International ACH payment.' },
  { term: 'ACH COR', def: 'Notification of Change ACH payment.' },
  { term: 'ACH DNE', def: 'Death Notification Entry ACH payment.' },
  { term: 'ACH ENR', def: 'Automated Enrollment Entry ACH payment.' },
  { term: 'ACH TRC', def: 'Truncated Entry ACH payment.' },
  { term: 'ACH TRX', def: 'Truncated Entry Exchange ACH payment.' },
  { term: 'ACH SHR', def: 'Shared Network Entry ACH payment.' },
  { term: 'ACH MTE', def: 'Machine Transfer Entry ACH payment.' },
  { term: 'ACH POS', def: 'Point of Sale Entry ACH payment.' },
  { term: 'ACH BTR', def: 'Batch Transfer Entry ACH payment.' },
  { term: 'ACH CIE', def: 'Customer Initiated Entry ACH payment.' },
  { term: 'ACH ATX', def: 'Financial Institution General Entry ACH payment.' },
  { term: 'ACH ADV', def: 'Automated Notification of Change ACH payment.' },
  { term: 'ACH COR', def: 'Notification of Change ACH payment.' },
  { term: 'ACH DNE', def: 'Death Notification Entry ACH payment.' },
  { term: 'ACH ENR', def: 'Automated Enrollment Entry ACH payment.' },
  { term: 'ACH TRC', def: 'Truncated Entry ACH payment.' },
  { term: 'ACH TRX', def: 'Truncated Entry Exchange ACH payment.' },
  { term: 'ACH SHR', def: 'Shared Network Entry ACH payment.' },
  { term: 'ACH MTE', def: 'Machine Transfer Entry ACH payment.' },
  { term: 'ACH POS', def: 'Point of Sale Entry ACH payment.' },
  { term: 'ACH BTR', def: 'Batch Transfer Entry ACH payment.' },
  { term: 'ACH CIE', def: 'Customer Initiated Entry ACH payment.' },
  { term: 'ACH ATX', def: 'Financial Institution General Entry ACH payment.' },
  { term: 'ACH ADV', def: 'Automated Notification of Change ACH payment.' },
];

// Add resource links
const resources = [
  { title: 'Investopedia: Budgeting', url: 'https://www.investopedia.com/budgeting-4689743' },
  { title: 'Khan Academy: Personal Finance', url: 'https://www.khanacademy.org/college-careers-more/personal-finance' },
  { title: 'MyMoney.gov', url: 'https://www.mymoney.gov/' },
  { title: 'Practical Money Skills', url: 'https://www.practicalmoneyskills.com/' },
  { title: 'Jump$tart Coalition', url: 'https://www.jumpstart.org/' },
  { title: 'Consumer.gov: Managing Your Money', url: 'https://consumer.gov/managing-your-money' },
  { title: 'Mint: Budgeting Tips', url: 'https://mint.intuit.com/blog/budgeting/' },
  { title: 'Smart About Money', url: 'https://www.smartaboutmoney.org/' },
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
  const [tab, setTab] = useState('quiz'); // New: tab state
  const [flashIdx, setFlashIdx] = useState(0); // New: flashcard index
  const [showDef, setShowDef] = useState(false); // New: flashcard flip

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

  function nextFlashcard() {
    setShowDef(false);
    setFlashIdx((prev) => (prev + 1) % glossary.length);
  }
  function prevFlashcard() {
    setShowDef(false);
    setFlashIdx((prev) => (prev - 1 + glossary.length) % glossary.length);
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
      {/* Tabbed Interface */}
      <section className="education-section">
        <div className="education-tabs">
          <button className={tab === 'quiz' ? 'education-tab active' : 'education-tab'} onClick={() => setTab('quiz')}>Quiz</button>
          <button className={tab === 'flashcards' ? 'education-tab active' : 'education-tab'} onClick={() => setTab('flashcards')}>Flashcards</button>
          <button className={tab === 'glossary' ? 'education-tab active' : 'education-tab'} onClick={() => setTab('glossary')}>Glossary</button>
        </div>
        {/* Quiz Tab */}
        {tab === 'quiz' && (
          <div>
            <h3 className="education-quiz-title">Quiz</h3>
            <div className="education-quiz-container">
              {quizFinished ? (
                <div className="education-quiz-results">
                  <h4 className="education-quiz-score">Your Score: {quizScore} / {quizSet.length}</h4>
                  <button onClick={resetQuiz} className="education-quiz-restart-btn">
                    Restart Quiz
                  </button>
                </div>
              ) : (
                <div className="education-quiz-question">
                  <div className="education-quiz-question-text">
                    <strong>Question {quizIdx + 1}:</strong> {quizSet[quizIdx].q}
                  </div>
                  <div className="education-quiz-options">
                    {quizSet[quizIdx].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(idx)}
                        className="education-quiz-option"
                        disabled={quizAnswered}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {quizAnswered && (
                    <div className="education-quiz-answer-feedback">
                      {quizSet[quizIdx].answer === quizScore ? 'Correct!' : 'Try again!'}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        {/* Flashcards Tab */}
        {tab === 'flashcards' && (
          <div>
            <h3 className="education-flashcards-title">Flashcards</h3>
            <div className="education-flashcard-container">
              <div className="education-flashcard">
                <div className="education-flashcard-content">
                  {showDef ? glossary[flashIdx].def : glossary[flashIdx].term}
                </div>
                <button onClick={() => setShowDef(!showDef)} className="education-flashcard-toggle">
                  {showDef ? 'Show Term' : 'Show Definition'}
                </button>
              </div>
              <div className="education-flashcard-controls">
                <button onClick={prevFlashcard} className="education-flashcard-prev">
                  Previous
                </button>
                <button onClick={nextFlashcard} className="education-flashcard-next">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Glossary Tab */}
        {tab === 'glossary' && (
          <div>
            <h3 className="education-glossary-title">Glossary</h3>
            <div className="education-glossary-container">
              {glossary.map((item, idx) => (
                <div key={idx} className="education-glossary-item">
                  <strong className="education-glossary-term">{item.term}:</strong> {item.def}
                </div>
              ))}
            </div>
          </div>
        )}
        {/* Resources Section */}
        <section className="education-section">
          <h3 className="education-section-title">Resources</h3>
          <ul className="education-resources-list">
            {resources.map((res, idx) => (
              <li key={idx}>
                <a href={res.url} target="_blank" rel="noopener noreferrer">{res.title}</a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
}

export default Education;