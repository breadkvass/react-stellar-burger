import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TIngredient } from "./ingredients";

type TOrder = {
    ingredients?: TIngredient[];
    _id?: string;
    number?: number;
    price?: number;
}

type TOrderDetails = {
    isLoading: boolean;
    hasError: boolean;
    orderDetails: TOrder;
}

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isLoading: false,
        hasError: false,
        orderDetails: {}
    } as TOrderDetails,
    reducers: {
        setLoadingOrderDetails: state => {
            state.isLoading = true;
        },
        setDataOrderDetails: (state, action: PayloadAction<TOrder>) => {
            state.isLoading = false;
            state.hasError = false;
            state.orderDetails = action.payload;
        },
        setErrorOrderDetails: state => {
            state.isLoading = false;
            state.hasError = true;
            state.orderDetails = {};
        }
    }
})

export const { setLoadingOrderDetails, setDataOrderDetails, setErrorOrderDetails } = actions;
export default reducer;