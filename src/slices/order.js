import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isLoading: false,
        hasError: false,
        order: []
    },
    reducers: {
        setLoadingOrder: (state) => {
            state.isLoading = true;
        },
        setDataOrder: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.order = action.payload;
        },
        setErrorOrder: (state) => {
            state.isLoading = false;
            state.hasError = true;
            state.order = [];
        }
    }
})

export const { setLoadingOrder, setDataOrder, setErrorOrder } = actions;
export default reducer;