import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Home from './pages/Home';
import BudgetPlanner from './pages/BudgetPlanner';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>Welcome to CoinFlow</h1>
          <div className="nav-and-auth">
            <nav>
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/budget-planner">Budget Planner</Link></li>
                <li><Link to="/settings">Settings</Link></li>
              </ul>
            </nav>
            <div className="auth-buttons">
              {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <>
                  <Link to="/login"><button>Login</button></Link>
                  <Link to="/register"><button>Register</button></Link>
                </>
              )}
            </div>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budget-planner" element={<BudgetPlanner />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
