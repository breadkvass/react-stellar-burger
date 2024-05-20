import {
  ORDER_DETAILS_SET_LOADING,
  ORDER_DETAILS_SET_DATA,
  ORDER_DETAILS_SET_ERROR
} from '../actions/order-details';

const initialState = {
  isLoading: true,
  hasError: false,
  orderDetails: []
};

export const orderDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_DETAILS_SET_LOADING: {
      return initialState;
    }
    case ORDER_DETAILS_SET_DATA: {
      return {
        isLoading: false,
        hasError: false,
        orderDetails: action.orderDetails
      };
    }
    case ORDER_DETAILS_SET_ERROR: {
      return {
        isLoading: false,
        hasError: true,
        orderDetails: []
      };
    }
    default: {
      return state;
    }
  }
};

