import { createContext, useContext, useReducer } from 'react';
import { contextReducer } from './transaction-reducer';

const initialState = [];

export const TransactionContext = createContext(initialState);

export const TransactionContextProvider = ({ children }) => {
    // define context reducer
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    // define actions
    const addTransaction = (transaction) =>
        dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

    const deleteTransaction = (id) =>
        dispatch({ type: 'DELETE_TRANSACTION', payload: id });

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                addTransaction,
                deleteTransaction,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};

export const useTransactionContext = () => useContext(TransactionContext);
