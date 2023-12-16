import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isLoading: false,
        hasError: false,
        orderDetails: []
    },
    reducers: {
        setLoadingOrderDetails: (state) => {
            state.isLoading = true;
        },
        setDataOrderDetails: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.orderDetails = action.payload;
        },
        setErrorOrderDetails: (state) => {
            state.isLoading = false;
            state.hasError = true;
            state.orderDetails = [];
        }
    }
})

export const { setLoadingOrderDetails, setDataOrderDetails, setErrorOrderDetails } = actions;
export default reducer;