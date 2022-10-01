export const Product = Object.freeze({
    Bitcoin: Symbol("bitcoin"),
    Ethereum: Symbol("ethereum"),
})

export const ProductMessages = new Map([
    [Product.Bitcoin, "Bitcoin"],
    [Product.Ethereum, "Ethereum"],
]);

export const OptionType = Object.freeze({
    Positive: Symbol("positive"),
    Negative: Symbol("negative"),
})


export class Option {
    product;
    date;
    type;
    price;

    constructor(product, date, type, price) {
        this.product = product;
        this.date = date;
        this.type = type;
        this.price = price;
    }

    isEqual(b) {
        if (b === undefined) return false;
        return this.product === b.product && this.date.getTime() === b.date.getTime()
            && this.type === b.type && this.price === b.price;
    }
}