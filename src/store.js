import { configureStore } from '@reduxjs/toolkit'

import OptionDateSlice from './state/OptionDate'
import OptionInfoListSlice from './state/OptionInfoList'
import CartSlice from './state/Cart'


export default configureStore({
    reducer: {
        OptionDate: OptionDateSlice,
        OptionInfoList: OptionInfoListSlice,
        Cart: CartSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})