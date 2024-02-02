import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const ordersWSStart: 'ORDERS_WS_CONNECTION_START' = 'ORDERS_WS_CONNECTION_START';
export const ordersWSStop: 'ORDERS_WS_CONNECTION_STOP' = 'ORDERS_WS_CONNECTION_STOP';

type TOrder = {
    createdAt: string;
    ingredients: string[];
    name: string;
    number: number;
    owner: object;
    price: number;
    status: string;
    updatedAt: string;
    _id: string;
}

type TProfileOrders = {
    success: boolean,
    orders: Array<TOrder>,
    total: string,
    totalToday: string,
    socketStatus: string,
}

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: {
        success: false,
        orders: [],
        total: '',
        totalToday: '',
        socketStatus: '',
    } as TProfileOrders,
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