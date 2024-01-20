import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const feedWSStart: 'FEED_WS_CONNECTION_START' = 'FEED_WS_CONNECTION_START';
export const feedWSStop: 'FEED_WS_CONNECTION_STOP' = 'FEED_WS_CONNECTION_STOP';

type TFeed = {
    success: boolean,
    orders: Array<object>,
    total: string,
    totalToday: string,
    socketStatus: string,
}

const { actions, reducer } = createSlice({
    name: 'reducer',
    initialState: <TFeed>{
        success: false,
        orders: [],
        total: '',
        totalToday: '',
        socketStatus: '',
    },
    reducers: {
        setFeed: (state, action: PayloadAction<TFeed>) => {
            state.success = action.payload.success;
            state.orders = action.payload.orders;
            state.total = action.payload.total;
            state.totalToday = action.payload.totalToday;
        },
        setFeedSocketStatus: (state, action: PayloadAction<string>) => {
            state.socketStatus = action.payload;
        },
    },
});

export const { setFeed, setFeedSocketStatus } = actions;
export default reducer;