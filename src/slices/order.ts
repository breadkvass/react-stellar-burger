import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TOrder = {
    isLoading: boolean,
    hasError: boolean,
    order: [object] | []
}

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: <TOrder>{
        isLoading: false,
        hasError: false,
        order: []
    },
    reducers: {
        setLoadingOrder: (state) => {
            state.isLoading = true;
        },
        setDataOrder: (state, action: PayloadAction<[object]>) => {
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