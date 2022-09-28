import { configureStore } from '@reduxjs/toolkit'

import OptionDateSlice from './state/OptionDate'
import OptionListSlice from './state/OptionList'

export default configureStore({
    reducer: {
        OptionDate: OptionDateSlice,
        OptionList: OptionListSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})