import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transaction'; 
import Budgets from './pages/Budget';           
import SavingsGoals from './pages/SavingGoals'; 
import Education from './pages/Education';
import Settings from './pages/Settings';
import CoinFlowNavbar from './components/CoinFlowNavbar';
import BudgetPlanner from './pages/BudgetPlanner';
import Customize from './pages/Customize';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router basename={process.env.NODE_ENV === 'production' ? '/Neighborhood' : '/'}>
      <CoinFlowNavbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="budgets" element={<Budgets />} />
        <Route path="goals" element={<SavingsGoals />} />
        <Route path="education" element={<Education />} />
        <Route path="settings" element={<Settings />} />
        <Route path="budget-planner" element={<BudgetPlanner />} />
        <Route path="customize" element={<Customize />} />
        {/* Show NotFound only for truly unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

