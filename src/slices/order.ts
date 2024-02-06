import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TOrder = {
    createdAt: string;
    ingredients: string[];
    name: string;
    number: number;
    owner: object;
    price: number;
    status: string;
    updatedAt: string;
    _id: string;
}

type TOrderInfo = {
    isLoading: boolean,
    hasError: boolean,
    order: [TOrder] | []
}

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isLoading: false,
        hasError: false,
        order: []
    } as TOrderInfo,
    reducers: {
        setLoadingOrder: (state) => {
            state.isLoading = true;
        },
        setDataOrder: (state, action: PayloadAction<[TOrder]>) => {
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