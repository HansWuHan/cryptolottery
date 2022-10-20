import { createSlice } from '@reduxjs/toolkit'

export const OptionInfoListSlice = createSlice({
    name: 'OptionInfoList',
    initialState: {
        loading: true,
        values: [],
    },
    reducers: {
        setOptionInfoList: (state, action) => {
            state.values = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
})

export const { setOptionInfoList, setLoading } = OptionInfoListSlice.actions


export default OptionInfoListSlice.reducer