import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from 'uuid';

const filling = (ingredientId) => ({
    id: ingredientId,
    key: uuid()
})

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
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
        setBun: (state, action) => {
            state.bun = action.payload;
        },
        removeIngredient: (state, action) => {
            const newFilling = state.filling;
            newFilling.splice(action.payload, 1);
            state.filling = newFilling;
        },
        addIngredient: (state, action) => {
            const newFilling = state.filling;
            newFilling.push(filling(action.payload));
            state.filling = newFilling;
        },
        moveIngredient: (state, action) => {
            const newFilling = state.filling;
            const moved = newFilling.splice(action.payload.from, 1)[0];
            newFilling.splice(action.payload.to, 0, moved);
            state.filling = newFilling;
            state.draggingIndex = action.payload;
        },
        setDraggingIndex: (state, action) => {
            state.draggingIndex = action.payload;
        },
        resetDraggingIndex: state => {
            state.draggingIndex = -1;
        }
    }
})

export const { setBun, removeIngredient, addIngredient, moveIngredient, setDraggingIndex, resetDraggingIndex } = actions;
export default reducer;