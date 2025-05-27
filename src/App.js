import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transaction'; 
import Budgets from './pages/Budget';           
import SavingsGoals from './pages/SavingGoals'; 
import Education from './pages/Education';
import Settings from './pages/Settings';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router basename="/Neighborhood">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/goals" element={<SavingsGoals />} />
        <Route path="/education" element={<Education />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;