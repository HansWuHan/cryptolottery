import { createSlice } from '@reduxjs/toolkit'

import { Product } from '../enums'

const testDate = new Date(Date.parse('Oct 3 2022 00:00:00 GMT'));
const testDates = Array.from({ length: 18 }).map((_, index) => new Date((new Date(testDate)).setDate(testDate.getDate() + 7 * index)));

export const OptionDateSlice = createSlice({
  name: 'OptionDate',
  initialState: {
    activeOptionDate: { product: Product.Bitcoin, date: testDate },
    optionDates: [{ product: Product.Bitcoin, dates: testDates }],
  },
  reducers: {
    setActiveOptionDate:
      (state, action) => {
        state.activeOptionDate = action.payload
      }

  },
})

// Action creators are generated for each case reducer function
export const { setActiveOptionDate } = OptionDateSlice.actions

export default OptionDateSlice.reducer