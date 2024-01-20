import { combineReducers } from 'redux';
import { default as burgerConstructorReducer }  from './burger-constructor';
import { default as ingredientsReducer } from './ingredients';
import { default as orderDetailsReducer } from './order-details';
import { default as ingredientDetailsReducer } from './ingredient-details';
import { default as profileInputsReducer } from './profile-inputs';
import { default as ordersReducer } from './profile-orders';
import { default as authReducer } from './auth';
import { default as feedReducer } from './feed';
import { default as orderReducer } from './order';

export const rootReducer = combineReducers({
  burgerConstructor: burgerConstructorReducer,
  ingredients: ingredientsReducer,
  orderDetails: orderDetailsReducer,
  ingredientDetails: ingredientDetailsReducer,
  profileInputs: profileInputsReducer,
  auth: authReducer,
  orders: ordersReducer,
  feed: feedReducer,
  order: orderReducer
});