import { Option, ProductShortMessages, OptionType, OptionInfo } from "../schema/Option";

const optionTypeMapper = {
    'positive': OptionType.Positive,
    'negative': OptionType.Negative
}

// Get the option list from backend
// product: the product enum.
// oddLimit: the filter on odds, only get the option with odd higher than oddLimit, the min should be 1.
export const fetchOptionInfoList = async (product, oddLimit) => {

    if (product === undefined) {
        throw new Error("ERROR: Must specify the symbol of function fetchOptionInfoList.");
    }
    oddLimit = oddLimit === undefined ? 1 : oddLimit;
    oddLimit = oddLimit < 1 ? 1 : oddLimit;

    // Get the 3 character symbol of the product. e.g.: BTC, ETH
    let symbol = ProductShortMessages.get(product);

    const response = await fetch('https://zlhckivszynuniq56pab77ij7a0mddlr.lambda-url.eu-west-2.on.aws/?currency=' + symbol + '&rate=' + oddLimit);
    if (!response.ok) {
        throw new Error(
            `This is an HTTP error when fetching data: The status is ${response.status}`
        );
    }

    let list = (await response.json()).prices;
    let optionInfoList = list.map((item) => new OptionInfo(new Option(product, new Date(Date.parse(item.date)), optionTypeMapper[item.type], item.strike), item.rate, item.minCost));
    return optionInfoList;
};