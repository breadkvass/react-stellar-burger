import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TOrderDetails = {
    isLoading: boolean,
    hasError: boolean,
    orderDetails: [] | object
}

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: <TOrderDetails>{
        isLoading: false,
        hasError: false,
        orderDetails: []
    },
    reducers: {
        setLoadingOrderDetails: state => {
            state.isLoading = true;
        },
        setDataOrderDetails: (state, action: PayloadAction<object>) => {
            state.isLoading = false;
            state.hasError = false;
            state.orderDetails = action.payload;
        },
        setErrorOrderDetails: state => {
            state.isLoading = false;
            state.hasError = true;
            state.orderDetails = [];
        }
    }
})

export const { setLoadingOrderDetails, setDataOrderDetails, setErrorOrderDetails } = actions;
export default reducer;