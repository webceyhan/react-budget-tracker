export const contextReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [...state, action.payload];

        case 'REMOVE_TRANSACTION':
            return state.filter((tx) => tx.id !== action.payload);

        default:
            return state;
    }
};
