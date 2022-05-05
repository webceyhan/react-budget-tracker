export const isValidDate = (d) => {
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
