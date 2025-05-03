import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import BudgetPlanner from './pages/BudgetPlanner';
import Learn from './pages/Learn';
import NotFound from './pages/NotFound';
import { BudgetProvider } from './context/BudgetContext';
import ErrorBoundary from './components/ErrorBoundary'; // Import ErrorBoundary
import './styles/App.css';
import './styles/theme.css';

function App() {
  return (
    <BudgetProvider>
      <Router>
        <ErrorBoundary>
          <div className="app-container">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/planner" element={<BudgetPlanner />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </ErrorBoundary>
      </Router>
    </BudgetProvider>
  );
}

export default App;
