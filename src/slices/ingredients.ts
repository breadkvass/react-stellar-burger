import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TIngredient = {
    _id: string;
    price: number;
    name: string;
    image: string;
    type: 'bun' | 'main' | 'sauce';
};

type TIngredients = {
    isLoading: boolean;
    hasError: boolean;
    ingredients: TIngredient[];
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