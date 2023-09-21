import {
  INGREDIENTS_SET_DATA,
  INGREDIENTS_SET_ERROR
} from '../actions/ingredients';

const initialState = {
    isLoading: true,
    hasError: false,
    ingredients: []
};

export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
      case INGREDIENTS_SET_DATA: {
        return {
          isLoading: false,
          hasError: false,
          ingredients: action.ingredients
        };
      }
      case INGREDIENTS_SET_ERROR: {
        return {
          isLoading: false,
          hasError: true,
          ingredients: []
        };
      }
      default: {
        return state;
      }
    }
};

 