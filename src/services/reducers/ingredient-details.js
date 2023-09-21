import { INGREDIENT_DETAILS_SET, INGREDIENT_DETAILS_RESET } from '../actions/ingredient-details';

export const ingredientDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case INGREDIENT_DETAILS_SET: {
            return { ...action.details };
        }
        case INGREDIENT_DETAILS_RESET: {
            return { };
        }
        default: {
            return state;
        }
    }
};

 