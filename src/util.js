export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const datesEqual = (a, b) => {
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
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