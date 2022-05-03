// helpers for date-input
export const dateToString = (date) => date.toISOString().substring(0, 10);

export const stringToDate = (date) => new Date(date);

export const formatDate = (date) =>
    Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);
