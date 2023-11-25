import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {},
    reducers: {
        setDetails: (state, action) => {
            state = action.payload;
        },
        resetDetails: state => {
            state = null;
        }
    }
})

export const { setDetails, resetDetails } = actions;
export default reducer;