import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

type TFilling = {
    id: string,
    key: string
}

type TDraggingIndex = number | {
    to: number,
    from: number
}

type TBurgerConstructor = {
    bun: string,
    filling: Array<TFilling>,
    draggingIndex: TDraggingIndex
}

const filling = (ingredientId: string): TFilling => ({
    id: ingredientId,
    key: uuid()
})

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: <TBurgerConstructor>{
        bun: '643d69a5c3f7b9001cfa093c',
        filling: [
            filling('643d69a5c3f7b9001cfa0944'),
            filling('643d69a5c3f7b9001cfa093f'),
            filling('643d69a5c3f7b9001cfa0947'),
            filling('643d69a5c3f7b9001cfa0946'),
            filling('643d69a5c3f7b9001cfa0946')
        ],
        draggingIndex: -1
    },
    reducers: {
        setBun: (state, action: PayloadAction<string>) => {
            state.bun = action.payload;
        },
        removeIngredient: (state, action: PayloadAction<number>) => {
            const newFilling = state.filling;
            newFilling.splice(action.payload, 1);
            state.filling = newFilling;
        },
        addIngredient: (state, action: PayloadAction<string>) => {
            const newFilling = state.filling;
            newFilling.push(filling(action.payload));
            state.filling = newFilling;
        },
        moveIngredient: (state, action: PayloadAction<{from: number, to: number}>) => {
            const newFilling = state.filling;
            const moved = newFilling.splice(action.payload.from, 1)[0];
            newFilling.splice(action.payload.to, 0, moved);
            state.filling = newFilling;
            state.draggingIndex = action.payload;
        },
        setDraggingIndex: (state, action: PayloadAction<number>) => {
            state.draggingIndex = action.payload;
        },
        resetDraggingIndex: state => {
            state.draggingIndex = -1;
        }
    }
})

export const { setBun, removeIngredient, addIngredient, moveIngredient, setDraggingIndex, resetDraggingIndex } = actions;
export default reducer;