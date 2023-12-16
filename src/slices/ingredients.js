import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isLoading: false,
        hasError: false,
        ingredients: []
    },
    reducers: {
        setLoadingIngredients: (state) => {
            state.isLoading = true;
        },
        setDataIngredients: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.ingredients = action.payload;
        },
        setErrorIngredients: (state) => {
            state.isLoading = false;
            state.hasError = true;
            state.ingredients = [];
        }
    }
})

export const { setLoadingIngredients, setDataIngredients, setErrorIngredients } = actions;
export default reducer;