import { createSlice } from '@reduxjs/toolkit'

import { Product } from '../schema/Option'

export const OptionDateSlice = createSlice({
  name: 'OptionDate',
  initialState: {},
  reducers: {
    setActiveOptionDate:
      (state, action) => {
        state.activeOptionDate = action.payload
      },
    setOptionDates:
      (state, action) => {
        state.optionDates = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveOptionDate, setOptionDates } = OptionDateSlice.actions

export default OptionDateSlice.reducer