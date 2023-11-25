import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isLoading: false,
        hasError: false,
        ingredients: []
    },
    reducers: {
        setLoading: (state) => {
            state.isLoading = true;
        },
        setData: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.ingredients = action.payload;
        },
        setError: (state) => {
            state.isLoading = false;
            state.hasError = true;
            state.ingredients = [];
        }
    }
})

export const { setLoading, setData, setError } = actions;
export default reducer;