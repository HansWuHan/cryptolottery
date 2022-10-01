import { createSlice } from '@reduxjs/toolkit'

import { Product, OptionType } from '../schema/Option'

const testPositiveList = [
    { price: 20000, odd: 1.5 },
    { price: 21000, odd: 1.75 },
    { price: 22000, odd: 1.8 },
    { price: 23000, odd: 2.0 },
    { price: 24000, odd: 2.15 },
    { price: 25000, odd: 2.2 },
    { price: 26000, odd: 2.4 },
    { price: 27000, odd: 2.6 },
    { price: 28000, odd: 2.8 },
    { price: 29000, odd: 3 },
    { price: 30000, odd: 3.15 }
];

const testNegativeList = [
    { price: 20000, odd: 1.5 },
    { price: 19000, odd: 1.75 },
    { price: 18000, odd: 1.8 },
    { price: 17000, odd: 2.0 },
    { price: 16000, odd: 2.15 },
    { price: 15000, odd: 2.2 },
    { price: 14000, odd: 2.4 },
    { price: 13000, odd: 2.6 },
    { price: 12000, odd: 2.8 },
    { price: 11000, odd: 3 },
    { price: 10000, odd: 3.15 }
];

export const OptionListSlice = createSlice({
    name: 'OptionList',
    initialState: {
        loading: false,
        values: [{
            product: Product.Bitcoin,
            optionDate: Date.parse('24 Sep 2022 00:00:00 GMT'),
            type: OptionType.Positive,
            value: testPositiveList
        }, {
            product: Product.Bitcoin,
            optionDate: Date.parse('24 Sep 2022 00:00:00 GMT'),
            type: OptionType.Negative,
            value: testNegativeList
        }],
    },
    reducers: {
        setOptionList: (state, action) => {
            state.values = action.payload.values;
        }
    },
})

export default OptionListSlice.reducer