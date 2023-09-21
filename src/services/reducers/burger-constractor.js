import {
    CONSTRUCTOR_SET_BUN,
    CONSTRUCTOR_REMOVE_INGREDIENT,
    CONSTRUCTOR_ADD_INGREDIENT
  } from '../actions/burger-constractor';

  const initialState = {
    bun: '643d69a5c3f7b9001cfa093c',
    filling: [
        '643d69a5c3f7b9001cfa0944',
        '643d69a5c3f7b9001cfa093f',
        '643d69a5c3f7b9001cfa0947',
        '643d69a5c3f7b9001cfa0946',
        '643d69a5c3f7b9001cfa0946'
    ]
  };

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTRUCTOR_SET_BUN: {
            return {
                ...state,
                bun: action.bun
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
        // case CONSTRUCTOR_ADD_INGREDIENTS: {
        //     // return {
        //     //     ...state,
        //     //     filling: [...state.filling][[...state.items].length + 1] == action.id
        //     // };
        // }
        default: {
            return state;
        }
    }
};

 