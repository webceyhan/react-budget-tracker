import { createContext, useContext } from 'react';

const initialState = [];

export const BudgetTrackerContext = createContext(initialState);

export const BudgetTrackerContextProvider = ({ children }) => {
    return (
        <BudgetTrackerContext.Provider value={initialState}>
            {children}
        </BudgetTrackerContext.Provider>
    );
};

export const useBudgetTrackerContext = () => useContext(BudgetTrackerContext);
