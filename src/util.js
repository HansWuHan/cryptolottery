import { OptionType } from "./schema/Option"

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

// Whether 2 date objects are on the same day.
export const datesEqual = (a, b) => {
    if (a instanceof Date && b instanceof Date) {
        return a.toDateString() === b.toDateString()
    }
    throw TypeError('dates equal need to have date inputs');
}

// Retun the difference of 2 dayes in days
export const datesDifferenceInDays = (a, b) => {
    if (a instanceof Date && b instanceof Date) {
        return Math.abs(a.getTime() - b.getTime()) / 1000 / 60 / 60 / 24
    }
    throw TypeError('dates diff need to have date inputs');
}

// Format date to MMM-DD-YYYY, HH:MM
export const formatDateAndTime = (date) => {
    if (!(date instanceof Date)) {
        throw TypeError('formatDateAndDate need to have date inputs');
    }

    return date.toLocaleString('en-US',
        { day: 'numeric', year: 'numeric', month: 'short', hour: 'numeric', minute: 'numeric', hour12: false });
}

export const getOptionName = (activeOptionType, strike) => {
    switch (activeOptionType) {
        case OptionType.Positive:
            return 'Over $' + strike;
        case OptionType.Negative:
            return 'Below $' + strike;
        default:
    }
};