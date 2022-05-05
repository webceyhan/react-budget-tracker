import { createContext, useContext, useReducer } from 'react';
import { fetchTransactions } from './local-storage';
import { contextReducer } from './transaction-reducer';

const initialState = fetchTransactions();

export const TransactionContext = createContext({
    transactions: initialState,
    addTransaction: () => {},
    deleteTransaction: () => {},
});

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
