import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TIngredient = {
    _id: string;
    price: number;
    name: string;
    image: string;
    type: 'bun' | 'main' | 'sauce';
    image_mobile: string;
    calories: number;
    proteins: number;
    fat: number;
    carbohydrates: number;
};

export type TIngredients = {
    isLoading: boolean;
    hasError: boolean;
    ingredients: TIngredient[];
}

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        isLoading: false,
        hasError: false,
        ingredients: []
    } as TIngredients,
    reducers: {
        setLoadingIngredients: (state) => {
            state.isLoading = true;
        },
        setDataIngredients: (state, action: PayloadAction<TIngredient[]>) => {
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