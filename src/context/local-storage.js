const DEMO_TXS = [
    {
        id: '1',
        type: 'Income',
        category: 'Savings',
        amount: 250,
        date: '2019-01-01',
    },
    {
        id: '2',
        type: 'Expense',
        category: 'Food',
        amount: 100,
        date: '2019-01-02',
    },
];

export const storeTransactions = (txs) => {
    localStorage.setItem('transactions', JSON.stringify(txs));
};

export const fetchTransactions = () => {
    const rawTxs = localStorage.getItem('transactions');

    // parse json string or default to DEMO_TXS
    const txs = JSON.parse(rawTxs) || [...DEMO_TXS];

    // convert date strings to Date objects
    return txs.map((tx) => ({ ...tx, date: new Date(tx.date) }));
};
