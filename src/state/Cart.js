import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'OptionDate',
    initialState: {
        value: [],
    },
    reducers: {
        setItemToCart:
            (state, action) => {
                const idx = state.value.findIndex(e => e.option.isEqual(action.payload.option))
                if (idx === -1) {
                    state.value.push(action.payload);
                } else {
                    if (action.payload.count === 0) {
                        state.value.splice(idx, 1);
                    } else {
                        state.value[idx].count = action.payload.count;
                    }
                }
            },
        addItemToCart: (state, action) => {
            const idx = state.value.findIndex(e => e.option.isEqual(action.payload.option))
            if (idx === -1) {
                state.value.push(action.payload);
            } else {
                state.value[idx].count += action.payload.count;
            }

        },
        removeItemFromCart: (state, action) => {
            const idx = state.value.findIndex(e => e.option.isEqual(action.payload.option))

            if (idx === -1) {
                return;
            } else {
                state.value.splice(idx, 1);
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setItemToCart, addItemToCart, removeItemFromCart } = CartSlice.actions

export default CartSlice.reducer