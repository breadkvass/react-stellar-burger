import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TIngredients = {
    isLoading: boolean,
    hasError: boolean,
    ingredients: Array<object>
}

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: <TIngredients>{
        isLoading: false,
        hasError: false,
        ingredients: []
    },
    reducers: {
        setLoadingIngredients: (state) => {
            state.isLoading = true;
        },
        setDataIngredients: (state, action: PayloadAction<Array<object>>) => {
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