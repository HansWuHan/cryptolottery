
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
