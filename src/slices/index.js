import { combineReducers } from 'redux';
import { default as burgerConstructorReducer }  from './burgerConstructor';
import { default as ingredientsReducer } from './ingredients';
import { default as orderDetailsReducer } from './orderDetails';
import { default as ingredientDetailsReducer } from './ingredientDetails';
import { default as profileInputsReducer } from './profileInputs';
import { default as authReducer } from './auth';

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  ingredients: ingredientsReducer,
  orderDetails: orderDetailsReducer,
  ingredientDetails: ingredientDetailsReducer,
  profileInputs: profileInputsReducer,
  auth: authReducer,
});