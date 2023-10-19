import { combineReducers } from 'redux';
import { constructorReducer } from './burger-constructor';
import { ingredientsReducer } from './ingredients';
import { orderDetailsReducer } from './order-details';
import { ingredientDetailsReducer } from './ingredient-details';
import { profileInputsReducer } from './profile-page';
import { authReducer } from './auth';

export const rootReducer = combineReducers({
  burgerConstructor: constructorReducer,
  ingredients: ingredientsReducer,
  orderDetails: orderDetailsReducer,
  ingredientDetails: ingredientDetailsReducer,
  profileInputs: profileInputsReducer,
  auth: authReducer,
});