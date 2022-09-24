import { createSlice } from '@reduxjs/toolkit'

export const OptionDateSlice = createSlice({
  name: 'OptionDate',
  initialState: {
    activeOptionDate: { product: 'bitcoin', optionDate: Date.parse('24 Sep 2022 00:00:00 GMT') },
    optionDates: {},
  },
  reducers: {
    activateOptionDate: {
      reducer(state, action) {
        state.activeOptionDate = action.payload
      },
      prepare(product, optionDate) {
        return {
          payload: { product: product, optionDate: optionDate }
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { activateOptionDate } = OptionDateSlice.actions

export default OptionDateSlice.reducer