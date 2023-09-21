import {
    CONSTRUCTOR_SET_BUN,
    CONSTRUCTOR_REMOVE_INGREDIENT,
    CONSTRUCTOR_ADD_INGREDIENT,
    CONSTRUCTOR_MOVE_INGREDIENT,
    CONSTRUCTOR_SET_DRAGGING_INDEX,
    CONSTRUCTOR_RESET_DRAGGING_INDEX,
  } from '../actions/burger-constructor';

  const initialState = {
    bun: '643d69a5c3f7b9001cfa093c',
    filling: [
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa0946'
    ],
    draggingIndex: -1
  };

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTRUCTOR_SET_BUN: {
            return {
                ...state,
                bun: action.ingredientId
            };
        }
        case CONSTRUCTOR_REMOVE_INGREDIENT: {
            const newFilling = [...state.filling];
            newFilling.splice(action.index, 1);
            return {
                ...state,
                filling: newFilling
            };
        }
        case CONSTRUCTOR_ADD_INGREDIENT: {
            return {
                ...state,
                filling: [...state.filling, action.ingredientId]
            };
        }
        case CONSTRUCTOR_MOVE_INGREDIENT: {
            const newFilling = [...state.filling];
            const moved = newFilling.splice(action.from, 1)[0]
            newFilling.splice(action.to, 0, moved)
            return {
                ...state,
                filling: [...newFilling],
                draggingIndex: action.to
            };
        }
        case CONSTRUCTOR_SET_DRAGGING_INDEX: {
            return {
                ...state,
                draggingIndex: action.index
            };
        }
        case CONSTRUCTOR_RESET_DRAGGING_INDEX: {
            return {
                ...state,
                draggingIndex: -1
            };
        }
        default: {
            return state;
        }
    }
};

 