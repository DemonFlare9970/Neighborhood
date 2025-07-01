import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BudgetProvider } from './context/BudgetContext';
import { LanguageProvider } from './context/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <BudgetProvider>
        <App />
      </BudgetProvider>
    </LanguageProvider>
  </React.StrictMode>
);
