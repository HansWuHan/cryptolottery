export const Product = Object.freeze({
    Bitcoin: Symbol("BTC"),
    Ethereum: Symbol("ETH"),
})

export const ProductShortMessages = new Map([
    [Product.Bitcoin, "BTC"],
    [Product.Ethereum, "ETH"],
]);

export const ProductMessages = new Map([
    [Product.Bitcoin, "Bitcoin"],
    [Product.Ethereum, "Ethereum"],
]);

export const OptionType = Object.freeze({
    Positive: Symbol("positive"),
    Negative: Symbol("negative"),
})


export class Option {
    product; // type: Product enum
    date;  // type: Date
    type;  // type: OptionType
    strike; // type: int

    constructor(product, date, type, strike) {
        this.product = product;
        this.date = date;
        this.type = type;
        this.strike = strike;
    }

    isEqual(b) {
        if (b === undefined) return false;
        return this.product === b.product && this.date.getTime() === b.date.getTime()
            && this.type === b.type && this.strike === b.strike;
    }
}

export class OptionInfo {
    option; // tyoe: Option
    odd; // type: double
    minCost; // type: double the minimum buy value of this option 

    constructor(option, odd, minCost) {
        this.option = option;
        this.odd = odd;
        this.minCost = minCost;
    }
}