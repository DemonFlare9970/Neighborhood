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
import Login from './pages/Login';
import Register from './pages/Register';
import AccountProfile from './pages/AccountProfile';

function App() {
  return (
    <Router basename="/Neighborhood">
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
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="account-profile" element={<AccountProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

