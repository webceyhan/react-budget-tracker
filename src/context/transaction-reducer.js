import { storeTransactions } from './local-storage';

export const contextReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION': {
            const txs = [...state, action.payload];

            // save to local storage
            storeTransactions(txs);

            return txs;
        }

        case 'REMOVE_TRANSACTION': {
            const txs = state.filter((tx) => tx.id !== action.payload);

            // save to local storage
            storeTransactions(txs);

            return txs;
        }

        default:
            return state;
    }
};
