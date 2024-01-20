import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const ordersWSStart: 'ORDERS_WS_CONNECTION_START' = 'ORDERS_WS_CONNECTION_START';
export const ordersWSStop: 'ORDERS_WS_CONNECTION_STOP' = 'ORDERS_WS_CONNECTION_STOP';

type TProfileOrders = {
    success: boolean,
    orders: Array<object>,
    total: string,
    totalToday: string,
    socketStatus: string,
}

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: <TProfileOrders>{
        success: false,
        orders: [],
        total: '',
        totalToday: '',
        socketStatus: '',
    },
    reducers: {
        setOrders: (state, action: PayloadAction<TProfileOrders>) => {
            state.success = action.payload.success;
            state.orders = action.payload.orders;
            state.total = action.payload.total;
            state.totalToday = action.payload.totalToday;
        },
        setOrdersSocketStatus: (state, action: PayloadAction<string>) => {
            state.socketStatus = action.payload;
        },
    },
});

export const { setOrders, setOrdersSocketStatus } = actions;
export default reducer;