import { combineReducers } from 'redux';
import { constructorReducer } from './burger-constractor';
import { ingredientsReducer } from './ingredients';
import { orderDetailsReducer } from './order-details';
import { ingredientDetailsReducer } from './ingredient-details';

export const rootReducer = combineReducers({
  burgerConstructor: constructorReducer,
  ingredients: ingredientsReducer,
  orderDetails: orderDetailsReducer,
  ingredientDetails: ingredientDetailsReducer,
});