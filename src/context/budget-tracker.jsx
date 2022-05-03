import { createContext, useContext, useReducer } from 'react';
import { contextReducer } from './context-reducer';

const initialState = [];

export const BudgetTrackerContext = createContext(initialState);

export const BudgetTrackerContextProvider = ({ children }) => {
    // define context reducer
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // define actions
    const addTransaction = (transaction) =>
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

    const deleteTransaction = (id) =>
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });

    return (
        <BudgetTrackerContext.Provider
            value={{
                transactions,
                addTransaction,
                deleteTransaction,
            }}
        >
            {children}
        </BudgetTrackerContext.Provider>
    );
};

export const useBudgetTrackerContext = () => useContext(BudgetTrackerContext);
