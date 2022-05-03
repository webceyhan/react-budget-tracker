import { resetCategories, typeCategoryMap } from '../constants/categories';
import { useTransactionContext } from '../context/transaction';

export const useTransactions = (type) => {
    resetCategories();

    // get transaction context
    const ctx = useTransactionContext();

    // get categories for the given type
    const categories = typeCategoryMap[type];

    // get transactions for the given type
    const transactions = ctx.transactions.filter((tx) => tx.type === type);

    let total = 0;
    const categoryMap = {};

    // loop through transactions
    transactions.forEach((tx) => {
        if (!categoryMap[tx.category]) {
            categoryMap[tx.category] = {
                ...categories.find((c) => c.type === tx.category),
            };
        }

        // get category for the transaction
        const category = categoryMap[tx.category];

        // add transaction amount to category
        category.amount += tx.amount;

        // add transaction amount to total
        total += tx.amount;
    });

    const filteredCategories = Object.values(categoryMap);

    const chartData = {
        datasets: [
            {
                data: filteredCategories.map((c) => c.amount),
                backgroundColor: filteredCategories.map((c) => c.color),
            },
        ],
        labels: filteredCategories.map((c) => c.type),
    };

    return {
        type,
        transactions,
        filteredCategories,
        chartData,
        total,
    };
};
