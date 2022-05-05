import { categoryMap } from '../constants/categories';

const isValidDate = (d) => {
    return d instanceof Date && !isNaN(d);
};

// helpers for date-input
export const dateToString = (date) => date.toISOString().substring(0, 10);

export const stringToDate = (date) => new Date(date);

export const formatDate = (date) =>
    Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);

export const toUcFirst = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

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
                type: type ? type : 'Income',
                category: type ? category : '',
            };

        default:
            return {};
    }
};

export const parseSegment = ({ entities }) => {
    return entities.reduce(
        (acc, entity) => ({ ...acc, ...parseEntity(entity) }),
        {}
    );
};
