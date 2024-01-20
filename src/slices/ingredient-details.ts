import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TIngredientsDetails = {
    details: object
} | null;

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: <TIngredientsDetails>{
        details: {}
    },
    reducers: {
        setDetails: (state, action: PayloadAction<object>) => {
            if (state) {
                state.details = action.payload;
            }
        },
        resetDetails: state => {
            state = null;
        }
    }
})

export const { setDetails, resetDetails } = actions;
export default reducer;