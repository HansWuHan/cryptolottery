import { configureStore } from '@reduxjs/toolkit'

import OptionDateSlice from './state/OptionDate'
import OptionListSlice from './state/OptionList'
import CartSlice from './state/Cart'


export default configureStore({
    reducer: {
        OptionDate: OptionDateSlice,
        OptionList: OptionListSlice,
        Cart: CartSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})