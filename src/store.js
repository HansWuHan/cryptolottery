import { configureStore } from '@reduxjs/toolkit'

import OptionDateSlice from './state/OptionDate'

export default configureStore({
    reducer: {
        OptionDate: OptionDateSlice
    },
})