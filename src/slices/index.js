import { combineReducers } from 'redux';
import { default as burgerConstructorReducer }  from './burgerConstructor';
import { default as ingredientsReducer } from './ingredients';
import { default as orderDetailsReducer } from './orderDetails';
import { default as ingredientDetailsReducer } from './ingredientDetails';
import { default as profileInputsReducer } from './profileInputs';
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