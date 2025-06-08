import React, { createContext, useReducer, useContext } from 'react';

// Actions
const ADD_TRANSACTION = 'ADD_TRANSACTION';
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const SET_SAVINGS_GOAL = 'SET_SAVINGS_GOAL';

const BudgetContext = createContext();

const initialState = {
  transactions: [],
  savingsGoal: 0,
  recurringTransactions: [],
};

// Reducer for managing state updates
function budgetReducer(state, action) {
  switch (action.type) {
    case ADD_TRANSACTION:
      return { ...state, transactions: [...state.transactions, action.payload] };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id !== action.payload),
      };
    case SET_SAVINGS_GOAL:
      return { ...state, savingsGoal: action.payload };
    default:
      return state;
  }
}

// Context Provider to wrap the application
export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const addTransaction = (transaction) => {
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
  };

  const deleteTransaction = (id) => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  };

  const setSavingsGoal = (goal) => {
    dispatch({ type: SET_SAVINGS_GOAL, payload: goal });
  };

  return (
    <BudgetContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        savingsGoal: state.savingsGoal,
        setSavingsGoal,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  return useContext(BudgetContext);
};
