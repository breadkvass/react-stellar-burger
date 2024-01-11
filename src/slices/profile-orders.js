import { createSlice } from "@reduxjs/toolkit";

export const ordersWSStart = 'ORDERS_WS_CONNECTION_START';
export const ordersWSStop = 'ORDERS_WS_CONNECTION_STOP';

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        success: false,
        orders: [],
        total: '',
        totalToday: '',
        socketStatus: '',
    },
    reducers: {
        setOrders: (state, action) => {
            state.success = action.payload.success;
            state.orders = action.payload.orders;
            state.total = action.payload.total;
            state.totalToday = action.payload.totalToday;
        },
        setOrdersSocketStatus: (state, action) => {
            state.socketConnectionStatus = action.payload;
        },
    },
});

export const { setOrders, setOrdersSocketStatus } = actions;
export default reducer;