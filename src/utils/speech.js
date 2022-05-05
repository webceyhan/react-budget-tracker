import { isValidDate, toUcFirst } from './common';
import { expenseCategories, incomeCategories } from '../constants/categories';

const incomeMap = incomeCategories.reduce(
    (acc, { type }) => ({ ...acc, [type]: 'Income' }),
    {}
);

const expenseMap = expenseCategories.reduce(
    (acc, { type }) => ({ ...acc, [type]: 'Expense' }),
    {}
);

const categoryMap = { ...incomeMap, ...expenseMap };

const parseEntity = ({ type, value }) => {
    switch (type) {
        case 'amount':
            const amount = Number(value);
            return { amount: isNaN(amount) ? 0 : amount };

        case 'date':
            const date = new Date(value);
            return { date: isValidDate(date) ? date : new Date() };

        case 'category':
            const category = toUcFirst(value);
            const type = categoryMap[category];
            return {
                type: type ?? 'Income',
                category: type ? category : '',
            };

        default:
            return {};
    }
};

export const parseSegment = ({ entities }) =>
    entities.reduce((acc, entity) => ({ ...acc, ...parseEntity(entity) }), {});
